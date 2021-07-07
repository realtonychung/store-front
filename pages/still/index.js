import Link from "next/link";
import { getAllWritings } from "../../api/writings";
import BoxContent from "../../components/BoxContent";
import Layout from "../../components/Layout";
import NewLink from "../../components/NewLink";
import SmallHeader from "../../components/SmallHeader";



const BorderedSection = ({ children }) => (
  <>
    <div className="bordered">
      {children}
      <style jsx>
        {`
          .bordered {
            border-bottom: 1px solid black;
          }
        `}
      </style>
    </div>
  </>
);

function Still({ writings }) {
  return (
    <Layout>
      <SmallHeader />
      <BoxContent>
        <BorderedSection>
          <h1>Saddleback Grocery Distribution</h1>
          <h2>
            I volunteer{" "}
            <NewLink url="https://saddleback.com/connect/ministry/food-pantry#giveHelpSection">
              here
            </NewLink>
          </h2>
        </BorderedSection>
        <BorderedSection>
          <h1>Hamabe Dojo</h1>
          <h2>
            I train{" "}
            <NewLink url="https://www.instagram.com/hamabe_dojo/?hl=en">
              here
            </NewLink>
          </h2>
        </BorderedSection>
        <BorderedSection>
          <h1>I (am starting to) write here</h1>
          <ol reversed>
            {writings
              .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
              .map((w, i) => (
                <Link href="/still/[slug]" as={`/still/${w.slug}`} key={i}>
                  <a className="writing_link">
                    <li>
                      <div>
                        <span>{w.title}: </span>
                        <b>{w.date}</b>
                      </div>
                    </li>
                  </a>
                </Link>
              ))}
          </ol>
        </BorderedSection>
      </BoxContent>
      <style jsx>
        {`
          h2 {
            margin-left: 2rem;
          }
          a {
            color: silver;
          }
          a:visited {
            color: pink;
          }
        `}
      </style>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const fields = ["title", "author", "date", "slug"];
  return {
    props: {
      writings: getAllWritings(fields),
    },
  };
};

export default Still;
