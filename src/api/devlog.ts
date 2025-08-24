import type { Log } from "@/types/devlog";
import fs from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const logsDirectory = join(process.cwd(), "_logs");

export function getLogSlugs() {
  return fs.readdirSync(logsDirectory);
}

export function getLogBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(logsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as Log;
}

export function getAllLogs(): Log[] {
  const slugs = getLogSlugs();
  const logs = slugs
    .map((slug) => getLogBySlug(slug))
    .sort((log1, log2) => (log1.date > log2.date ? -1 : 1));
  return logs;
}
