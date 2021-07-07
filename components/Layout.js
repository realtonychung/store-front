import Head from "next/head";
import colors from '../constants/colors';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>FHS</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="container">
        <main>
          {children}
          <style jsx>
            {`
              main {
                height: 100vh;
              }
              .container {
                min-height: 100vh;
                padding: 1 1.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }

              main {
                width: 100%;
                padding: 1.5rem 1.5rem;
                flex: 1;
                display: flex;
                flex-direction: column;
              }
          }
        `}
          </style>
          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: Inter, sans-serif;
              background-color: #040404;
              color: white;
            }

            * {
              box-sizing: border-box;
            }

            a {
              color: light-blue;
            }
            a:visited {
              color: pink;
            }

            h1 {
              color: ${colors.primary}
            }

            h2 {
              color: ${colors.secondary}
            }
          `}</style>
        </main>
      </div>
    </>
  );
}
