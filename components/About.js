
const About = () => {
  return (
    <div className="box">
      <h1>About</h1>
      <div className="about">
        <h2>We just a bunch of animals</h2>
      </div>
      <style jsx>
        {`
          .box {
            flex: 1;
            margin-right: 1.5rem;
          }
          .image {
            margin-top: 0.5rem;
            padding-top: 0.55005005005rem;
          }
          .about {
            min-width: 300px;
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-wrap: wrap;
          }
        `}
      </style>
    </div>
  );
};

export default About;
