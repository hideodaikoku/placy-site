import React from "react";
import memberPageStyle from "../styles/memberpage.module.scss";
import Member from "./member";

<<<<<<< HEAD
import { useStaticQuery, graphql } from "gatsby";
=======
import { useStaticQuery, graphql } from "gatsby"
>>>>>>> parent of 958964e... internationalization implementation complete

const MemberSection = () => {
  const data = useStaticQuery(graphql`
    query {
      soma: file(relativePath: { eq: "soma.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kazu: file(relativePath: { eq: "kazu.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hideo: file(relativePath: { eq: "index.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marina: file(relativePath: { eq: "marina.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      minerva: file(relativePath: { eq: "minerva.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miki: file(relativePath: { eq: "miki.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
    `)
        
    return(
        <div className={memberPageStyle.container}>
            <div className={memberPageStyle.row}>
                <div className={memberPageStyle.left}>
                </div>
                <div className={memberPageStyle.rightContent}>
                    <h1 className={memberPageStyle.title}>
                        メンバー紹介
                    </h1>
                </div>
            </div>
            <div className={memberPageStyle.row}>
            <div className={memberPageStyle.leftContent}>
                <div className={memberPageStyle.memberContainer}>
                    <Member
                    image={data.soma.childImageSharp}
                    id={"soma"}
                    />
                    <Member
                    image={data.kazu.childImageSharp}
                    id={"kazu"}
                    />
                    <Member
                    image={data.hideo.childImageSharp}
                    id={"hideo"}
                    />
                    <Member
                    image={data.marina.childImageSharp}
                    id={"marina"}
                    />
                    <Member
                    image={data.minerva.childImageSharp}
                    id={"minerva"}
                    />
                    <Member
                    image={data.miki.childImageSharp}
                    id={"miki"}
                    />
                    <Member
                    image={data.stephen.childImageSharp}
                    id={"stephen"}
                    />
                    <Member
                    image={data.todd.childImageSharp}
                    id={"todd"}
                    />
                    <Member
                    image={data.sp4ghet.childImageSharp}
                    id={"sp4ghet"}
                    />
                </div>
            </div>
            <div className={memberPageStyle.right}>
            </div>
            </div>
        </div>
        <div className={memberPageStyle.right}></div>
      </div>
    </div>
  );
};

export default MemberSection;
