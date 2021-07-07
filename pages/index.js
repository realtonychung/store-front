import Image from "next/image";
import { FaDiscord } from 'react-icons/fa';
import ContactIcon from "../components/ContactIcon";
import Header from "../components/Header";
import Layout from "../components/Layout";
import colors from "../constants/colors";

export default function Home() {
  return (
    <Layout>
      <Header />
      <div className="content">
        <Image src="/farmhouse.jpg" alt="picture of me" width={1000} height={700} />
      </div>

      <footer>
        <p>Powered by &#10084;&#65039; and &#9749;</p>
        <div className="contact">
          <ContactIcon
            link="https://discord.gg/yKK7JbwU"
            Icon={FaDiscord}
          />
        </div>
        <p>&copy; FHS 2021</p>
        <div className="bottom-accent">

        </div>
      </footer>

      <style jsx>{`
        .bottom-accent {
          width: 100%;
          height: 25px;
          background-color: ${colors.secondary};
          border-radius: 5px;
        }
        .contact {
          height: 30px;
          display: flex;
          justify-content: space-around;
        }

        .content {
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }

        footer {
          margin-top: 2rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          
          align-items: flex-end;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .logo {
          height: 1em;
        }
      `}</style>
    </Layout>
  );
}
