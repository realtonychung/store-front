import React from "react";
import marked from "marked";
import Link from "next/link";

import Layout from "../../components/Layout";
import { getWritingBySlug, getAllWritings } from "../../api/writings";
import SmallHeader from "../../components/SmallHeader";
import BoxContent from "../../components/BoxContent";

// interface otherWriting {
//   slug: string;
//   date: string;
//   title: string;
// }

// type Props = {
//   title: string;
//   subtitle: string;
//   author: string;
//   date: string;
//   content: string;
//   coverImage: string;
//   prev: otherWriting | null;
//   next: otherWriting | null;
// };

const aWriting = ({
  title,
  subtitle,
  author,
  date,
  coverImage,
  content,
  prev,
  next,
}) => {
  const og = {
    ogTitle: title,
    ogDescription: subtitle,
    ogImage: coverImage ? coverImage : "",
    article: true,
  };
  return (
    <Layout>
      <SmallHeader />
      <BoxContent>
        <main>
          <section dangerouslySetInnerHTML={{ __html: content }}></section>
        </main>
      </BoxContent>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  // find previous and next writings
  // 1. get all writings
  const writings = getAllWritings(["slug", "date", "title"]).sort(
    // 2. sort writings by date
    (a, b) => Date.parse(a.date) - Date.parse(b.date)
  );
  // 3. find index of current writing by matching slug
  const i = writings.findIndex((item) => params?.slug === item.slug);
  // 4. set prev and next slugs
  const prev = i > 0 ? writings[i - 1] : null;
  const next = i < writings.length - 1 ? writings[i + 1] : null;
  const fields = [
    "title",
    "subtitle",
    "author",
    "date",
    "content",
    "coverImage",
  ];
  const writing = getWritingBySlug(params?.slug, fields);
  const content = marked(writing.content);
  return {
    props: {
      ...writing,
      content,
      prev,
      next,
    },
  };
};

export const getStaticPaths = async () => {
  const writings = getAllWritings(["slug"]);
  return {
    paths: writings.map((w) => {
      return { params: { slug: w.slug } };
    }),
    fallback: false,
  };
};

export default aWriting;
