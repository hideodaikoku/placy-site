import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/header.module.scss";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import note from "../images/note.svg";

const languageName = {
  en: "EN",
  ja: "JA",
}


const Header = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "placy-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  let colorClass = headerStyles.header;
  switch (props.color) {
    case "white":
      colorClass = headerStyles.headerWhite;
      break;
    case "placelist":
      colorClass = headerStyles.headerPlacelist;
      break;
    default:
      break;
  }

  return (
    <div className={colorClass}>
      <div className={headerStyles.logoArea}>
        <Link className={headerStyles.title} to="/">
          <Img
            fluid={data.file.childImageSharp.fluid}
            className={headerStyles.topImg}
          />
        </Link>
      </div>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <span className={headerStyles.divider}>/</span>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/careers"
            >
              Careers
            </Link>
          </li>
          <span className={headerStyles.divider}>/</span>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              activeClassName={headerStyles.activeNavItem}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <span className={headerStyles.divider}>/</span>
          <li className={headerStyles.listItem}>
            <a
              className={headerStyles.link}
              href="https://placy.typeform.com/to/lfzKCU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
          <span className={headerStyles.divider}>/</span>
          <li className={headerStyles.listItem}>
            <Link
              className={headerStyles.link}
              id={headerStyles.note}
              activeClassName={headerStyles.activeNavItem}
              to="/placelist"
            >
              <img alt="placelist" style={{height:"22px", minWidth:"22px"}} src={note}/>
            </Link>
          </li>
          <span className={headerStyles.divider}>/</span>
          <li className={headerStyles.listItem}>
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
              languages.map(language => (
              language!==currentLocale?
                <span
                  key={language}
                  onClick={() => changeLocale(language)}
                  onKeyDown={(e)=>{if(e.key==="Enter"){changeLocale(language)}}}
                  className={headerStyles.link}
                  role = "button"
                  tabIndex={0}
                  style={{
                    color: currentLocale === language ? `gray` : `black`,
                    cursor: `pointer`,
                  }}
                >
                  {languageName[language]}
                </span>
              :null
              ))
            }
          </IntlContextConsumer>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
