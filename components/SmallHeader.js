import { useRouter } from "next/router";
import colors from "../constants/colors";

const SmallHeader = ({ date }) => {
  const { pathname, back } = useRouter();
  const curr = pathname.split("/")[1];

  return (
    <div className="header">
      <div className="top">
        <h3 className="home" onClick={() => back()}>
          @chung {curr}
        </h3>
        {date && <h4>Updated: {date}</h4>}
      </div>
      <style jsx>{`
        .header {
          background-color: ${colors.secondary};
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4rem;
        }

        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin: 0 0.5rem;
          padding: 0 0.5rem;
        }

        .home:hover,
        .home:focus,
        .home:active {
          color: ${colors.primary};
          border-color: ${colors.primary};
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default SmallHeader;
