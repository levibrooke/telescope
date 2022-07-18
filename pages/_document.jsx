import Document, { Head, Main, NextScript } from 'next/document';

const UA_ID = "UA-75105818-3";

export default class TelescopeDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Telescope - Circa Victor</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          <meta property="og:title" content="Telescope" />
          <meta property="og:description" content="A Stock Ticker for the Political Economy" />
          <meta property="og:image" content="https://telescope.circavictor.com/static/img/thumbnail.jpg" />
          <meta property="og:url" content="https://telescope.circavictor.com" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src={"https://www.googletagmanager.com/gtag/js?id=" + UA_ID} />
          <script 
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${UA_ID}');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}