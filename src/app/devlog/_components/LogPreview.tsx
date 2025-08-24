import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
};

function LogPreview({
  title,
  excerpt,
  slug,
}: Props) {
  return (
    <div>
      <h2 className="text-3xl mb-3 leading-snug">
        <Link href={`/devlog/logs/${slug}`} className="text-yellow-900 hover:underline hover:underline-offset-4">
          {title}
        </Link>
      </h2>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}

export default LogPreview;
