import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "wg4j13ic",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
