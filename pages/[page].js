import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Builder from "../components/builder";

import Head from "next/head";
import Header from "../components/header";


export default function BuilderPage({ page }) {
  return (
    <>
      <Head>
        <title>{page.title} | Grantham Swimming Club</title>
      </Head>
      <Header title={page.title}></Header>
      <article className="main">
        {page.builder.map((item, index) => {
          return <Builder key={index} type={item.type} item={item} />
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

export async function getStaticPaths() {
  const dirents = fs.readdirSync("content/pages", { withFileTypes: true });
  const paths = dirents.filter(dirent => dirent.isFile()).map(dirent => ({ params: { page: dirent.name.replace(/\.md$/, "") }}));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = getBySlug("content/pages", params.page);
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