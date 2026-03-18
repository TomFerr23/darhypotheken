import { getTranslations } from "next-intl/server";
import { getRecentPosts } from "@/sanity/queries";
import BlogCard from "@/components/blog/BlogCard";

export default async function BlogPreviewSection({ locale }: { locale: string }) {
  const posts = await getRecentPosts(3);
  const t = await getTranslations({ locale, namespace: "blog" });

  if (!posts || posts.length === 0) return null;

  const blogHref = locale === "nl" ? "/blog" : "/en/blog";

  return (
    <section className="bg-[#f4f9ff] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-dar-slate md:text-5xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-dar-gray">
          {t("description")}
        </p>

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

        <div className="mt-10 text-center">
          <a
            href={blogHref}
            className="inline-flex items-center gap-2 text-dar-blue font-semibold hover:opacity-80 transition-opacity"
          >
            {t("viewAll")} &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
