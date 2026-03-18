"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <>
      <Header />
      <main className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-dar-slate md:text-5xl">
            {t("title")}
          </h1>

          <div className="mt-10 space-y-8 text-dar-gray leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s1heading")}</h2>
              <p className="mt-3">{t("s1intro")}</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>{t("s1item1")}</li>
                <li>{t("s1item2")}</li>
                <li>{t("s1item3")}</li>
                <li>{t("s1item4")}</li>
                <li>{t("s1item5")}</li>
                <li>{t("s1item6")}</li>
                <li>{t("s1item7")}</li>
                <li>{t("s1item8")}</li>
                <li>{t("s1item9")}</li>
                <li>{t("s1item10")}</li>
                <li>{t("s1item11")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s2heading")}</h2>
              <p className="mt-3">{t("s2intro")}</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>{t("s2item1")}</li>
                <li>{t("s2item2")}</li>
                <li>{t("s2item3")}</li>
                <li>{t("s2item4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s3heading")}</h2>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>{t("s3item1")}</li>
                <li>{t("s3item2")}</li>
                <li>{t("s3item3")}</li>
                <li>{t("s3item4")}</li>
                <li>{t("s3item5")}</li>
                <li>{t("s3item6")}</li>
                <li>{t("s3item7")}</li>
                <li>{t("s3item8")}</li>
                <li>{t("s3item9")}</li>
                <li>{t("s3item10")}</li>
              </ul>
              <p className="mt-3">{t("s3outro")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s4heading")}</h2>
              <p className="mt-3">{t("s4intro")}</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>{t("s4item1")}</li>
                <li>{t("s4item2")}</li>
                <li>{t("s4item3")}</li>
                <li>{t("s4item4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s5heading")}</h2>
              <p className="mt-3">{t("s5text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s6heading")}</h2>
              <p className="mt-3">{t("s6text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s7heading")}</h2>
              <p className="mt-3">{t("s7text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s8heading")}</h2>
              <p className="mt-3">{t("s8text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s9heading")}</h2>
              <p className="mt-3">{t("s9text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s10heading")}</h2>
              <p className="mt-3">{t("s10intro")}</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>{t("s10item1")}</li>
                <li>{t("s10item2")}</li>
                <li>{t("s10item3")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s11heading")}</h2>
              <p className="mt-3">{t("s11text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s12heading")}</h2>
              <p className="mt-3">{t("s12text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dar-slate">{t("s13heading")}</h2>
              <p className="mt-3">{t("s13text")}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
