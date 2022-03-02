import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Content from "../components/content";

import Head from "next/head";
import Header from "../components/header";


export default function Index({ page }) {
  return (
    <>
      <Head>
        <title>{page.title ? `${page.title} |` : ''} Grantham Swimming Club</title>
      </Head>
      <Header title={page.title}></Header>
      <article className="main">
        {page?.content?.map((item, index) => {
          return <Content key={index} type={item.type} item={item} />
        })}
      </article>
    </>
  );

}

function getBySlug(dir, slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return data;
}

export async function getStaticProps({ params }) {
  const data = getBySlug("content/pages", 'home');
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page: data
    }
  }
}