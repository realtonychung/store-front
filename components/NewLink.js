const NewLink = ({ url, children }) => {
  return (
    <a href={url} target="_blank">
      {children}
    </a>
  );
};

export default NewLink;
