import React from "react"
import Layout from "../components/layout"

import CareerTopSection from "../components/career-top";
import WorkSection from "../components/work";
import PositionsSection from  "../components/positions";
import MemberSection from "../components/members";

const CareersPage = () => {
    return(
        <Layout>
            <CareerTopSection/>
            <WorkSection/>
            <PositionsSection/>
            <MemberSection/>
        </Layout>
    )
}

export default CareersPage