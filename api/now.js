// Thanks https://github.com/jdnordy/joshuadavidnordstrom/blob/master/lib/api.ts
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import { join } from "path";

// join the current working director with _writings dir to to get path
const nowDirectory = join(process.cwd(), "_now");

export function getWritingSlugs() {
  return fs
    .readdirSync(nowDirectory)
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export const getWritingBySlug = (slug, fields = []) => {
  const writingPath = join(nowDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(writingPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((f) => {
    if (f === "slug") items[f] = slug;
    else if (f === "content") items[f] = content;
    else if (data[f]) items[f] = data[f];
  });

  return items;
};

export const getAllNowEntries = (fields = [], exclude = ["about"]) => {
  const slugs = getWritingSlugs().filter((slug) => !exclude.includes(slug));
  const entries = slugs.map((slug) => getWritingBySlug(slug, fields));
  const current = entries.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  )[0];

  return {
    ...current,
    content: current.content ? marked(current.content) : "",
    entries,
  };
};
