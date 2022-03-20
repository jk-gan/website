import Head from "next/head"

export default function Home() {
  const url = "https://jkgan.com"
  const title = "Gan Jun Kai"
  const description =
    "Jun Kai writes about software engineering and programming"

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{`Gan Jun Kai's website`}</title>

        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://jkgan.com/bg.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="flex container mx-auto mt-16 w-11/12 2xl:w-8/12 xl:w-8/12 lg:w-10/12 md:w-10/12">
        <div>
          <h1 className="text-left font-bold text-3xl mb-10">
            {`Hey, I'm Jun Kai.`}
          </h1>
          <p className="text-left text-xl text-blueGray-800 mb-3">
            {`I'm building the world's most advanced education platform at `}
            <a
              className="link"
              href="https://mindvalley.com"
              target="_blank"
              rel="noreferrer"
            >
              Mindvalley
            </a>
            .
          </p>
          <p className="text-left text-xl text-blueGray-800 mb-3">
            {`I writes Elixir at work and Rust in my free time. Currently, I'm
            reading `}
            <a
              className="link"
              href="https://www.amazon.com/Foundations-Game-Engine-Development-Rendering/dp/0985811757/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Foundations of Game Engine Development, Volume 2: Rendering
            </a>{" "}
            to learn more about Game Engine Development.
          </p>
          <p className="text-left text-xl text-blueGray-800 mb-3">
            You can also find me on{" "}
            <a
              className="link"
              href="https://twitter.com/jk_gan"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            ,{" "}
            <a
              className="link"
              href="https://github.com/jk-gan"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/ganjk"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}
