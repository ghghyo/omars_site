import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="logo.jpg" />
          <link rel="shortcut icon" href="logo.jpg" type="image/jpg" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="logo.jpg"
          />
          <link
            rel="icon"
            type="image/jpg"
            sizes="32x32"
            href="logo.jpg"
          />
          <link
            rel="icon"
            type="image/jpg"
            sizes="16x16"
            href="logo.jpg"
          />
          <link rel="manifest" href="manifest.json" />
          <meta
            name="description"
            content="Crsine NextJs Template For Car Services"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&family=Kumbh+Sans:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
