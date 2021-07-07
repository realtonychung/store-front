import NavCard from "./NavCard";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <h1>More</h1>
      <div className="grid">
        <NavCard
          route="then"
          preText="background.get()"
          regText="For things I've done"
        />
        <NavCard
          route="now"
          preText="mind.reduce(priorities)"
          regText="Immediate concerns"
        />
        <NavCard
          route="still"
          preText="while (true) do(thing)"
          regText="Ongoing projects"
        />
        {/* <NavCard
          route="soon"
          disabled
          preText="yield projects.next()"
          regText="A neverending queue"
        /> */}
      </div>

      <style jsx>
        {`
          .navbar {
            flex: 1;
          }

          .descriptor {
            padding-left: 2rem;
          }
          .grid {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
