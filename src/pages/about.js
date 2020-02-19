import React from "react"
import Layout from "../components/layout"

import AboutTopSection from "../components/about-top";
import MissionSection from "../components/mission";
import ProfileSection from "../components/profile";
import Head from "../components/head";

const AboutPage = () => {
    return(
        <Layout>
            <Head/>
            <AboutTopSection/>
            <MissionSection/>
            <ProfileSection/>
        </Layout>
    )
}

export default AboutPage