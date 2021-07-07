

const Header = () => {
  // useAnimatedLetters();

  return (
    <div className="header" id="large-header">
      <h1 className="title">
      </h1>
      <style jsx>{`
        .header {
          margin: 1 1rem;
          padding: 1 1rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .letter-name {
          color: #46a58f;
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          float: left;
          font-weight: 700;
          font-size: 3.5em;
          text-align: left;
          color: white;
        }

        .title .text-wrapper {
          position: relative;
          display: inline-block;
          padding-top: 0.1em;
          padding-right: 0.05em;
          padding-bottom: 0.15em;
        }

        .title .line {
          opacity: 0;
          position: absolute;
          left: 0;
          height: 100%;
          width: 3px;
          background-color: white;
          transform-origin: 0 50%;
        }

        .title .line1 {
          top: 0;
          left: 0;
        }

        .title .letter {
          display: inline-block;
          line-height: 1em;
        }

        .subtitle {
          margin: 2rem 0 0 0;
          text-align: right;
        }

        .description {
          margin: 2rem 0 0 0;
          line-height: 2rem;
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Header;
