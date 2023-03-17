import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            src="https://unpkg.com/@tinybirdco/flock.js"
            data-host="https://api.tinybird.co"
            data-token="p.eyJ1IjogIjk5MDFiODY3LWVmNzQtNGIwYy05MGVkLTgwNThlYWY0ZjcwYSIsICJpZCI6ICJlYjY2NjAxZi1mMTM0LTQ4ZjQtYjFkOS0wMzZkMjUwNTY1MjAifQ.V1Fgon6MDDTA1yG1TPS9oi6C4Sr7Vmjv2BblDOY-CDY"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
