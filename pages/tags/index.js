import Head from "next/head";
import Link from "next/link";

export default function Tags(props) {
  const url = "https://jkgan.com/tags";
  const title = "Tags - Gan Jun Kai";
  const description =
    "Jun Kai writes about software engineering and programming";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>Tags - Gan Jun Kai</title>

        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://jkgan.com/bg.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="flex container mx-auto mt-16 w-11/12 2xl:w-8/12 xl:w-8/12 lg:w-10/12 md:w-10/12">
        <div className="divide-y-2 w-full">
          <div>
            <h1 className="text-left font-bold text-4xl mb-3">Tags</h1>
          </div>
          <div>
            <ul className="mt-8">
              {props.tags.map((tag, _index) => {
                return (
                  <li className="mb-4" key={tag}>
                    <Link href={`/tags/${tag}`}>
                      <a className="text-2xl mb-2 font-semibold hover:text-cyan-400">
                        #{tag}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");

  const files = fs.readdirSync(`${process.cwd()}/posts`, "utf-8");

  const tags = files
    .filter((fn) => fn.endsWith(".md"))
    .flatMap((fn) => {
      const path = `${process.cwd()}/posts/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);
      const { tags } = data;

      return tags || [];
    })
    .filter((item, i, arr) => arr.indexOf(item) === i);

  return {
    props: { tags },
  };
}
