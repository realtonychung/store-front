// Thanks https://github.com/jdnordy/joshuadavidnordstrom/blob/master/lib/api.ts
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

// join the current working director with _writings dir to to get path
const writingsDirectory = join(process.cwd(), "_writings");

export function getWritingSlugs() {
  return fs
    .readdirSync(writingsDirectory)
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export const getWritingBySlug = (slug, fields = []) => {
  const writingPath = join(writingsDirectory, `${slug}.md`);
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

export const getAllWritings = (fields = [], exclude = ["about"]) => {
  const slugs = getWritingSlugs().filter((slug) => !exclude.includes(slug));
  return slugs.map((slug) => getWritingBySlug(slug, fields));
};
