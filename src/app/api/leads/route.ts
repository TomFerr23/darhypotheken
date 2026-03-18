import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

interface LeadRequestBody {
  name: string;
  email: string;
  phone: string;
  locale?: string;
  source?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body: LeadRequestBody = await request.json();
    const { name, email, phone, locale = "nl", source = "chatbot" } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length === 0) {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 }
      );
    }

    const leadId = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    // Check for Google Sheets configuration
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const credentialsJson = process.env.GOOGLE_SHEETS_CREDENTIALS;

    if (!spreadsheetId || !credentialsJson) {
      console.warn(
        "Google Sheets not configured — lead stored locally only:",
        { leadId, name, email, phone, locale, source, timestamp }
      );
      return NextResponse.json({ success: true, leadId });
    }

    // Append to Google Sheets
    try {
      const { google } = await import("googleapis");

      const credentials = JSON.parse(credentialsJson);
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:F",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[timestamp, name, email, phone, locale, source]],
        },
      });
    } catch (sheetsError) {
      console.error("Failed to write to Google Sheets:", sheetsError);
      // Still return success — the lead data was received
    }

    return NextResponse.json({ success: true, leadId });
  } catch (error) {
    console.error("Leads API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
