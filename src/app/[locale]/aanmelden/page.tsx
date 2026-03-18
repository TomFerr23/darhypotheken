"use client";

import { useState, type FormEvent } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "motion/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "@/i18n/navigation";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  city: string;
  country: string;
  email: string;
  purchaseType: "alone" | "together";
  income: string;
  financingPercentage: string;
  currentMortgage: string;
  dataConsent: boolean;
  emailConsent: boolean;
}

export default function AanmeldenPage() {
  const t = useTranslations("apply");
  const locale = useLocale();

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    city: "",
    country: "",
    email: "",
    purchaseType: "alone",
    income: "",
    financingPercentage: "",
    currentMortgage: "",
    dataConsent: false,
    emailConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function updateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function validate(): boolean {
    const newErrors: Record<string, string> = {};

    if (!form.firstName.trim()) newErrors.firstName = t("required");
    if (!form.lastName.trim()) newErrors.lastName = t("required");
    if (!form.dateOfBirth) newErrors.dateOfBirth = t("required");
    if (!form.city.trim()) newErrors.city = t("required");
    if (!form.country.trim()) newErrors.country = t("required");
    if (!form.email.trim()) {
      newErrors.email = t("required");
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      newErrors.email = t("emailInvalid");
    }
    if (!form.income) newErrors.income = t("required");
    if (!form.financingPercentage) newErrors.financingPercentage = t("required");
    if (!form.currentMortgage) newErrors.currentMortgage = t("required");
    if (!form.dataConsent) newErrors.dataConsent = t("consentRequired");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName.trim()} ${form.lastName.trim()}`,
          email: form.email.trim(),
          phone: "-",
          locale,
          source: "form",
          dateOfBirth: form.dateOfBirth,
          city: form.city.trim(),
          country: form.country.trim(),
          purchaseType: form.purchaseType,
          income: form.income,
          financingPercentage: form.financingPercentage,
          currentMortgage: form.currentMortgage,
          dataConsent: form.dataConsent,
          emailConsent: form.emailConsent,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      }
    } catch {
      // silent fail — form still shows
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <main className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-dar-green/10">
              <svg
                className="h-8 w-8 text-dar-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-dar-slate md:text-4xl">
              {t("successTitle")}
            </h1>
            <p className="mt-4 text-lg text-dar-gray leading-relaxed">
              {t("successMessage")}
            </p>
            <Link
              href="/"
              className="mt-8 inline-block rounded-full bg-dar-green px-10 py-4 font-semibold text-white transition-all hover:brightness-105"
            >
              {t("successBack")}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Navy intro section */}
        <section className="bg-[#1c3349] py-16 md:py-20">
          <div className="mx-auto max-w-2xl px-6">
            <h1 className="text-3xl font-bold text-[#f8fddb] md:text-5xl">
              {t("pageTitle")}
            </h1>
            <div className="mt-6 space-y-4 text-[#f8fddb]/90 leading-relaxed">
              <p>{t("introText")}</p>
              <p>{t("introText2")}</p>
              <p>{t("introText3")}</p>
            </div>
          </div>
        </section>

        {/* Form body */}
        <section className="py-12 md:py-16">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto max-w-2xl px-6"
          >
            {/* Section: Person */}
            <h2 className="text-xl font-semibold text-dar-slate">
              {t("sectionPerson")}
            </h2>
            <div className="mt-6 space-y-5">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-dar-slate"
                >
                  {t("firstName")}
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className={`mt-1 w-full rounded-lg border px-4 py-3 text-dar-slate outline-none transition-colors focus:border-[#060097] focus:ring-1 focus:ring-[#060097] ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-dar-slate"
                >
                  {t("lastName")}
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className={`mt-1 w-full rounded-lg border px-4 py-3 text-dar-slate outline-none transition-colors focus:border-[#060097] focus:ring-1 focus:ring-[#060097] ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-medium text-dar-slate"
                >
                  {t("dateOfBirth")}
                </label>
                <input
                  id="dateOfBirth"
                  type="date"
                  value={form.dateOfBirth}
                  onChange={(e) => updateField("dateOfBirth", e.target.value)}
                  className={`mt-1 w-full rounded-lg border px-4 py-3 text-dar-slate outline-none transition-colors focus:border-[#060097] focus:ring-1 focus:ring-[#060097] ${
                    errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.dateOfBirth && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-dar-slate"
                >
                  {t("city")}
                </label>
                <input
                  id="city"
                  type="text"
                  value={form.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className={`mt-1 w-full rounded-lg border px-4 py-3 text-dar-slate outline-none transition-colors focus:border-[#060097] focus:ring-1 focus:ring-[#060097] ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-dar-slate"
                >
                  {t("country")}
                </label>
                <input
                  id="country"
                  type="text"
                  value={form.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  className={`mt-1 w-full rounded-lg border px-4 py-3 text-dar-slate outline-none transition-colors focus:border-[#060097] focus:ring-1 focus:ring-[#060097] ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dar-slate"
                >
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={`mt-1 w-full rounded-lg border px-4 py-3 text-dar-slate outline-none transition-colors focus:border-[#060097] focus:ring-1 focus:ring-[#060097] ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Divider */}
            <hr className="my-10 border-gray-200" />

            {/* Section: Mortgage */}
            <h2 className="text-xl font-semibold text-dar-slate">
              {t("sectionMortgage")}
            </h2>
            <div className="mt-6 space-y-6">
              {/* Purchase Type */}
              <div>
                <p className="text-sm font-medium text-dar-slate">
                  {t("purchaseType")}
                </p>
                <div className="mt-2 flex gap-3">
                  {(["alone", "together"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateField("purchaseType", option)}
                      className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                        form.purchaseType === option
                          ? "bg-[#060097] text-white"
                          : "border border-gray-300 bg-white text-dar-slate hover:border-gray-400"
                      }`}
                    >
                      {t(option)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Income */}
              <div>
                <label
                  htmlFor="income"
                  className="block text-sm font-medium text-dar-slate"
                >
                  {t("income")}
                </label>
                <select
                  id="income"
                  value={form.income}
                  onChange={(e) => updateField("income", e.target.value)}
                  className={`mt-1 w-full rounded-lg border px-4 py-3 text-dar-slate outline-none transition-colors focus:border-[#060097] focus:ring-1 focus:ring-[#060097] ${
                    errors.income ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" disabled>
                    --
                  </option>
                  <option value="50k-100k">&euro;50.000 - &euro;100.000</option>
                  <option value="100k-150k">
                    &euro;100.000 - &euro;150.000
                  </option>
                  <option value="150k-200k">
                    &euro;150.000 - &euro;200.000
                  </option>
                  <option value=">200k">&gt; &euro;200.000</option>
                </select>
                {errors.income && (
                  <p className="mt-1 text-sm text-red-600">{errors.income}</p>
                )}
              </div>

              {/* Financing Percentage */}
              <div>
                <label
                  htmlFor="financingPercentage"
                  className="block text-sm font-medium text-dar-slate"
                >
                  {t("financingPercentage")}
                </label>
                <select
                  id="financingPercentage"
                  value={form.financingPercentage}
                  onChange={(e) =>
                    updateField("financingPercentage", e.target.value)
                  }
                  className={`mt-1 w-full rounded-lg border px-4 py-3 text-dar-slate outline-none transition-colors focus:border-[#060097] focus:ring-1 focus:ring-[#060097] ${
                    errors.financingPercentage
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="" disabled>
                    --
                  </option>
                  <option value="100">100%</option>
                  <option value="90">90%</option>
                  <option value="80">80%</option>
                  <option value="70">70%</option>
                </select>
                {errors.financingPercentage && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.financingPercentage}
                  </p>
                )}
              </div>

              {/* Current Mortgage */}
              <div>
                <p className="text-sm font-medium text-dar-slate">
                  {t("currentMortgage")}
                </p>
                <div className="mt-2 flex gap-3">
                  {(["yes", "no"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateField("currentMortgage", option)}
                      className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                        form.currentMortgage === option
                          ? "bg-[#060097] text-white"
                          : "border border-gray-300 bg-white text-dar-slate hover:border-gray-400"
                      }`}
                    >
                      {t(option)}
                    </button>
                  ))}
                </div>
                {errors.currentMortgage && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.currentMortgage}
                  </p>
                )}
                <p className="mt-2 text-sm text-gray-500">
                  {t("currentMortgageHelp")}
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-10 border-gray-200" />

            {/* Section: Contact / Consent */}
            <h2 className="text-xl font-semibold text-dar-slate">
              {t("sectionContact")}
            </h2>
            <div className="mt-6 space-y-5">
              {/* Data Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.dataConsent}
                  onChange={(e) =>
                    updateField("dataConsent", e.target.checked)
                  }
                  className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 text-[#060097] accent-[#060097]"
                />
                <span className="text-sm text-dar-slate leading-relaxed">
                  {t("dataConsent")}
                </span>
              </label>
              {errors.dataConsent && (
                <p className="text-sm text-red-600">{errors.dataConsent}</p>
              )}

              {/* Email Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.emailConsent}
                  onChange={(e) =>
                    updateField("emailConsent", e.target.checked)
                  }
                  className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 text-[#060097] accent-[#060097]"
                />
                <span className="text-sm text-dar-slate leading-relaxed">
                  {t("emailConsent")}
                </span>
              </label>

              {/* Privacy link */}
              <p className="text-sm text-gray-500">
                {t("privacyNote")}{" "}
                <Link
                  href="/privacy"
                  className="text-[#060097] underline hover:text-[#060097]/80"
                >
                  {t("privacyLink")}
                </Link>
                .
              </p>
            </div>

            {/* Submit */}
            <div className="mt-10">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="inline-block rounded-full bg-dar-green px-10 py-4 font-semibold text-white transition-all hover:brightness-105 disabled:opacity-60 cursor-pointer text-base md:text-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? "..." : t("submit")}
              </motion.button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
