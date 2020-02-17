import React from "react"
import Layout from "../components/layout"

import AboutTopSection from "../components/about-top";
import MissionSection from "../components/mission";
import ProfileSection from "../components/profile";

const AboutPage = () => {
    return(
        <Layout>
            <AboutTopSection/>
            <MissionSection/>
            <ProfileSection/>
        </Layout>
    )
}

export default AboutPage