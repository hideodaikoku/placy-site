import React from "react"
import Layout from "../components/layout"

import CareerTopSection from "../components/career-top";
import PositionsSection from  "../components/positions";
import MemberSection from "../components/members";
import Head from "../components/head";

const CareersPage = () => {
    return(
        <Layout>
            <Head/>
            <CareerTopSection/>
            <PositionsSection/>
            <MemberSection/>
        </Layout>
    )
}

export default CareersPage