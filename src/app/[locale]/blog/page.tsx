import { getTranslations } from "next-intl/server";
import { getAllPosts } from "@/sanity/queries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/blog/BlogCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: `${t("title")} — DAR Hypotheken`,
    description: t("description"),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <main className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-center text-3xl font-bold text-dar-slate md:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-dar-gray">
            {t("description")}
          </p>

          {posts.length > 0 ? (
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map(
                (post: {
                  _id: string;
                  title: string;
                  titleEn?: string;
                  excerpt?: string;
                  excerptEn?: string;
                  slug: { current: string };
                  mainImage?: { asset: { _ref: string }; alt?: string };
                  publishedAt?: string;
                  categories?: string[];
                }) => (
                  <BlogCard
                    key={post._id}
                    title={locale === "en" && post.titleEn ? post.titleEn : post.title}
                    excerpt={
                      locale === "en" && post.excerptEn
                        ? post.excerptEn
                        : post.excerpt || ""
                    }
                    slug={post.slug.current}
                    mainImage={post.mainImage}
                    publishedAt={post.publishedAt}
                    categories={post.categories}
                    locale={locale}
                  />
                )
              )}
            </div>
          ) : (
            <p className="mt-14 text-center text-dar-gray">{t("noPosts")}</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
