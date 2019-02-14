import React from "react";
import BackgroundImage from "gatsby-background-image";

export default function BackgroundHeader({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-upercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  );
}

BackgroundHeader.defaultProps = {
  title: "default title",
  styleClass: "default-background"
};
