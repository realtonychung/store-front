import Link from "next/link";
import React, { useCallback } from "react";

const NavCard = ({ route, preText, regText }) => {
  const text = route.charAt(0).toUpperCase() + route.slice(1);
  const [hovered, setHovered] = React.useState(false);

  const onMouseOver = useCallback(() => {
    setHovered(true);
  }, [setHovered]);

  const onMouseOut = useCallback(() => {
    setHovered(false);
  }, [setHovered]);

  return (
    <Link href={route}>
      <div
        className="card"
        onMouseEnter={onMouseOver}
        onTouchStart={onMouseOver}
        onMouseLeave={onMouseOut}
        onTouchEnd={onMouseOut}
      >
        <h3>{text} &rarr;</h3>
        <div className="text">
          {hovered ? (
            <pre className="descriptor pre">{preText}</pre>
          ) : (
            <p className="descriptor">{regText}</p>
          )}
        </div>
        <style jsx>
          {`
            .descriptor {
              padding-left: 2rem;
            }

            .pre {
              font-size: 1.1rem;
            }
            .card {
              margin: 1rem;
              padding: 1.5rem;
              min-width: 300px;
              box-shadow: 2px 5px;
              width: 90%;
              flex: 1;
              flex-direction: row;
              flex-basis: 45%;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }

            .card:hover,
            .card:focus,
            .card:active {
              color: #9176e3;
              border-color: #9176e3;
              cursor: pointer;
            }

            .card h3 {
              margin: 0 0 1rem 0;
              font-size: 1.5rem;
            }

            .card p {
              margin: 0;
              font-size: 1.25rem;
              line-height: 1.5;
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
    </Link>
  );
};

export default NavCard;
