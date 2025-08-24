import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllLogs, getLogBySlug } from "@/api/devlog";
import markdownToHtml from "@/utils/devlog_utils";

export default async function Log(props: Params) {
  const params = await props.params;
  const log = getLogBySlug(params.slug);

  if (!log) {
    return notFound();
  }

  const content = await markdownToHtml(log.content || "");

  return (
    <div>
      <Link href="/devlog">&larr; Back to All Logs</Link>
      <article className="mb-32">
        <h1>{log.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>

  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const log = getLogBySlug(params.slug);

  if (!log) {
    return notFound();
  }

  return {
    title: log.title,
    openGraph: {
      title: log.title,
    },
  };
}

export async function generateStaticParams() {
  const logs = getAllLogs();

  return logs.map(log => ({
    slug: log.slug,
  }));
}
