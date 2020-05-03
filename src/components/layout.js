import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss";
import layoutStyles from "../styles/layout.module.scss";

const Layout = (props) => {
  let colorClass = layoutStyles.container;
  switch (props.color) {
    case "white":
      colorClass = layoutStyles.containerWhite;
      break;
    case "placelist":
      colorClass = layoutStyles.containerPlacelist;
      break;
    default:
      break;
  }

  return (
    <div className={colorClass}>
      <Header color={props.color} />
      <div className={layoutStyles.content}>{props.children}</div>
      <div className={layoutStyles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
