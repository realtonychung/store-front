
function iframe() {
  return {
      __html: '<iframe src="./index.html" width="100%" height="100%"></iframe>'
  }
}

export default function Home() {
  return (
    <div style={{width: "100%", height: "100vh"}} dangerouslySetInnerHTML={iframe()} />
    
    // <Layout>
    //   <Header />
    //   <div className="content">
    //     <div className="hero">
    //       <Image
    //         src="/farmhouse.jpg"
    //         alt="farmhouse-society"
    //         width={800}
    //         height={500}
    //       />
    //     </div>
    //   </div>

    //   <footer>
    //     <div className="footer-bottom">
    //       <div className="footer-left">
    //         <div className="text-input">
    //           <input name="email" type="email" />
    //           <button>-></button>
    //         </div>
    //       </div>
    //       <div className="footer-right">
    //         <div className="contact">
    //           <ContactIcon
    //             link="https://discord.gg/yKK7JbwU"
    //             Icon={FaDiscord}
    //           />
    //         </div>
    //         <p>&copy; FHS 2021</p>
    //       </div>
    //     </div>
    //     <div className="bottom-accent"></div>
    //   </footer>

    //   <style jsx>{`
    //     .footer-bottom {
    //       width: 100%;
    //       flex: 1;
    //       flex-direction: row;
    //       display: flex;
    //       justify-content: space-between;
    //     }
    //     .text-input {
    //       align-self: center;
    //     }
    //     .hero {
    //       align-self: center;
    //     }
    //     .bottom-accent {
    //       width: 100%;
    //       height: 25px;
    //       background-color: ${colors.secondary};
    //       border-radius: 5px;
    //     }
    //     .contact {
    //       display: flex;
    //       justify-content: space-around;
    //     }

    //     .content {
    //       height: 100%;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //     }

    //     footer {
    //       margin-top: 2rem;
    //       width: 100%;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: flex-end;
    //       align-items: flex-end;
    //     }

    //     footer img {
    //       margin-left: 0.5rem;
    //     }

    //     footer a {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     a {
    //       color: inherit;
    //       text-decoration: none;
    //     }

    //     .logo {
    //       height: 1em;
    //     }
    //   `}</style>
    // </Layout>
  );
}
