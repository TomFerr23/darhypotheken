import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getPostBySlug, getAllSlugs } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortableTextRenderer from "@/components/blog/PortableTextRenderer";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title =
    locale === "en" && post.seoTitleEn
      ? post.seoTitleEn
      : post.seoTitle || post.title;
  const description =
    locale === "en" && post.seoDescriptionEn
      ? post.seoDescriptionEn
      : post.seoDescription || post.excerpt || "";

  return {
    title: `${title} — DAR Hypotheken`,
    description,
    openGraph: {
      title,
      description,
      images: post.mainImage
        ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }]
        : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });
  const title =
    locale === "en" && post.titleEn ? post.titleEn : post.title;
  const body =
    locale === "en" && post.bodyEn ? post.bodyEn : post.body;
  const backHref = locale === "nl" ? "/blog" : "/en/blog";

  return (
    <>
      <Header />
      <main className="bg-white py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6">
          <a
            href={backHref}
            className="mb-8 inline-flex items-center gap-1 text-sm text-dar-gray hover:text-dar-slate"
          >
            &larr; {t("backToList")}
          </a>

          {post.categories && post.categories.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories.map((cat: string) => (
                <span
                  key={cat}
                  className="rounded-full bg-dar-blue/10 px-3 py-0.5 text-xs font-medium text-dar-blue"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl font-bold text-dar-slate md:text-5xl">
            {title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-dar-gray/70">
            {post.author && <span>{post.author}</span>}
            {post.publishedAt && (
              <time>
                {new Date(post.publishedAt).toLocaleDateString(
                  locale === "nl" ? "nl-NL" : "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </time>
            )}
          </div>

          {post.mainImage?.asset && (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.mainImage.alt || title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {body && (
            <div className="mt-10">
              <PortableTextRenderer value={body} />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
