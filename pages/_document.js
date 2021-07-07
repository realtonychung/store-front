import Document, { Html, Head, Main, NextScript } from "next/document";

const prod = process.env.NODE_ENV === "production";

class AnimeDocument extends Document {
  render() {
    return prod ? (
      <Html>
        <Head>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"
            integrity="sha256-hBMojZuWKocCflyaG8T19KBq9OlTlK39CTxb8AUWKhY="
            crossOrigin="anonymous"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-8WNXD2TEJ8"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments)}
                  gtag('js', new Date());
                  gtag('config', 'G-8WNXD2TEJ8');
                `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    ) : (
      <Html>
        <Head>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"
            integrity="sha256-hBMojZuWKocCflyaG8T19KBq9OlTlK39CTxb8AUWKhY="
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AnimeDocument;
