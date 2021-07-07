const BoxContent = ({ children }) => {
  return (
    <div className="box">
      {children}
      <style jsx>
        {`
          .box {
            margin-top: 3rem;
            flex: 1;
          }
        `}
      </style>
    </div>
  );
};

export default BoxContent;
