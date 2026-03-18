import Image from "next/image";
import { urlFor } from "@/sanity/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  publishedAt?: string;
  categories?: string[];
  locale: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  mainImage,
  publishedAt,
  categories,
  locale,
}: BlogCardProps) {
  const href =
    locale === "nl" ? `/blog/${slug}` : `/en/blog/${slug}`;

  return (
    <a href={href} className="group block">
      <article className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg">
        {mainImage?.asset && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={urlFor(mainImage).width(600).height(340).url()}
              alt={mainImage.alt || title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          {categories && categories.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-dar-blue/10 px-3 py-0.5 text-xs font-medium text-dar-blue"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          <h3 className="text-lg font-semibold text-dar-slate group-hover:text-dar-blue">
            {title}
          </h3>
          {excerpt && (
            <p className="mt-2 line-clamp-2 text-sm text-dar-gray">
              {excerpt}
            </p>
          )}
          {publishedAt && (
            <time className="mt-3 block text-xs text-dar-gray/60">
              {new Date(publishedAt).toLocaleDateString(
                locale === "nl" ? "nl-NL" : "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </time>
          )}
        </div>
      </article>
    </a>
  );
}
