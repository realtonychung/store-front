import { useCallback, useState } from "react";
import colors from "../constants/colors";

const ContactIcon = ({ Icon, link }) => {
  const [hovered, setHovered] = useState(false);

  const onMouseOver = useCallback(() => {
    setHovered(true);
  }, [setHovered]);

  const onMouseOut = useCallback(() => {
    setHovered(false);
  }, [setHovered]);

  return (
    <div
      className="contact-icon"
      onMouseEnter={onMouseOver}
      onTouchStart={onMouseOver}
      onMouseLeave={onMouseOut}
      onTouchEnd={onMouseOut}
    >
      <a href={link} target="_blank">
        <Icon
          color={hovered ? colors.primary : "white"}
          size={30}
        />
      </a>
      <style jsx>
        {`
        .contact-icon {
          height: 40px;
          width: 30px
      `}
      </style>
    </div>
  );
};

export default ContactIcon