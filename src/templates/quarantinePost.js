import React from 'react';
import SEO from "../components/seo"
import Layout from '../components/layout';
import { graphql } from "gatsby";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import quarantineBlogStyle from "../styles/quarantineblog.module.scss"
export const query = graphql`
    query($slug: String!){
        markdownRemark(frontmatter:{slug: {eq: $slug}}){
            frontmatter{
                title
                medium
                ogp
                slug
            }
            html
        }
    }
`
const BlogTemplate = (props) =>{
    const slug = props.data.markdownRemark.frontmatter.slug;
    const title = props.data.markdownRemark.frontmatter.title;
    const disqusConfig = {
        url: `http://placy.city/post-quarantine-urbanism/${slug}`,
        identifier: slug,
        title: title,
    }

    return(
        <Layout color={"white"}>
            <SEO title={props.data.markdownRemark.frontmatter.title} quarantine={true} image={props.data.markdownRemark.frontmatter.ogp}/>
            <div className={quarantineBlogStyle.container}>
                <div id="textContainer" dangerouslySetInnerHTML={{ __html : props.data.markdownRemark.html }}></div>
                <a className={quarantineBlogStyle.mediumButton} href={props.data.markdownRemark.frontmatter.medium} target="_blank" rel="noopener noreferrer">
                    <span>
                        <img 
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEUSEA7///8AAAA0NDO6urqIiIjr6+vb29sHBACWlZUPDQugoKDn5+cMCQb8/PxycnLJycg8OzoeHBt8fHwhISDx8fGpqakpKSiysrJFRUVbWlqQj49mZmbR0dFOTk5BQD/EGkEyAAAELUlEQVRoge2b23qrIBCFyWiiwVPOp6bt+7/lVokRZJFU48jFdl21fpW/ozCsQRALXZuk2O4Ej3bbItkYNNH+GO0lEWWSiS2zsnWxjwA7LUouE7ZVyS/SLjvcEVfApiQdQpO9nCDmRjEtdfaeJiNXon3LXk6LLuHLhh1OjS7hoWKnh3hydnxIa3Yxfdhl4EXFjiYaXKYkRSV74j7eqOzrIpc+wi4Dl7nY+Am7DHwjEm/sRHjp5TW7EL/TJXJT2a/gsgrv5Y88a9as/1Dk0Nv8mzlu7IFeh1CX8xt4Flzgjfe/w8ms2Vqt37TRuP6uenijOMhxG8fX3k5SCm+7xD28Ed0cgb8OgO4Y3a/goi/MTl+zQ3TPpa8Rxs0sFrcX8GyHXtWptwev/DPSK2sJH1YywP7T4Qjhv244gTvejQxHSz+ws7sLR9RBh7rgR5XcUb51VY6oi2wHsiUlCO4KJT6DPw6GlrgS5rejI7HSeky2oCsKHK9SSIkGxnC2JMTGiRXntOFsAdk4seL5Z3R2BNh0hSNydDZKrHhMMLDtxCppxcIGmdJamaqWbtBffsqOLlaTl27g9F1dtkf4p+zV1moyP5j5ReW0yE7CH7NVUIY605PqaUsOdmG1uTICl/XsmQOn+DkbWEAjv6icFvKw7YeZ6olV5bQ7C1tKO3BtfSoOqgsRsbCRE9MSK52qC0smdna208YzsWaHKqcdg5iH/QjN0DOxqmFQ+jgmNjJE50e7avjf2NjICJ5U4MrPRmXJxcVGgathpl7HF8EqdBQ28iV1YpVx3Q1Fxsm2nf9KyMbF1xUDG1uAAq1KrOryjZltJ9aIZFxPsEf1aNjYyBbdSfW0NTMbNf1NVA2wXJUqjGyVOw3lP/WLeKQ4RjbywWE98gp+dgxmlOqRN3M5J1uQ7VgrJe4OMR4bltiL/NpMKpxsvPrUTqa8bFSQ36dho8SaisY1crNtq96uvzCzhW3Vz8/m2dndGUWrh0dmq9ShXbFmlIKVbcTdteq53hnGZD+8yk5voGPVT0zsZi05NBa1DKue/zCxn+nbqLZV9fWQseQ0Ilt7s2bFq80oex62nkbMR9uugax2+hIAYg9bPr/qfcrY89Ra9ZM5/GwLP2iHWBabCexb62+tVdcfhwT1ovnA/iorBmMwpfY/BNElvMcnwaZ125rpCeyRWLWeJh2epv82MTBdGauoKrEe256WOT9jqjKxBxp+pjkGndmyXV2MX6D7faaKA/xZM3q6hGxXBf78ECOFvfqnq8fnOeera59e1R/anIa7maa/v3Mq1ljtG8/O+m+URC+V9uhvrs/+WguZ8Zvzhv7f/WfNmjVr1jD53J/qc1+uz/3IPvdh+9x/7nPfvc/zBl7PWfg8X+L1XI3P80Rez1F5PT/m9dyc1/OCXs9JLqY5Hyrh+dBa056L/QeVozHQlBNjegAAAABJRU5ErkJggg==" 
                            className={quarantineBlogStyle.mediumImage}
                            />
                    </span>
                    <span>|</span>
                    <span>
                        Read on Medium
                    </span>
                </a>
            </div>
            <div className={quarantineBlogStyle.disqusContainer}>
                <Disqus config={disqusConfig}/>
            </div>
        </Layout>
    )
}

export default BlogTemplate;