import React from "react"

import Layout from '../components/App/Layout'
import SEO from "../components/App/seo"
import Banner from "../components/Index/Banner"
import Services from "../components/Index/Services"
import Works from "../components/Index/Works"
import About from "../components/Index/About"
import Testimonials from "../components/Index/Testimonials"
import Contact from "../components/Index/Contact"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Banner />
        <Services />
        <Works />
        <About />
        <Testimonials />
        <Contact />
    </Layout>
)

export default IndexPage
