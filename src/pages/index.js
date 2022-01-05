import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/App/Layout'
import SEO from "../components/App/seo"
import Banner from "../components/Index/Banner"
import Services from "../components/Index/Services"
import Works from "../components/Index/Works"
import About from "../components/Index/About"
import Testimonials from "../components/Index/Testimonials"
import Contact from "../components/Index/Contact"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    {
        sanityLandingPage{
          heroImage {
           asset{
            url
          },
            descriptor,
            tagline,
            headline
          },
          servicesOverview,
          servicesCards{
            serviceTitle,
            serviceDescription
          },
                reviews{
            reviewImage{
              asset{
                url
              }
            },
            reviewText
          },
          workImages{
            asset{
              url
            }
          },
          contactInfo{
            contactDescription,
            phoneNumber,
            email
          },
          _rawBio
        }
      }
      
`)
    console.log('data', data)
    const {contactInfo, heroImage, reviews, servicesCards, servicesOverview, workImages, _rawBio} = data.sanityLandingPage
    return(
    <Layout contactInfo={contactInfo}>
        <SEO title="Home" />
        <Banner heroImage={heroImage} />
        <Services servicesOverview={servicesOverview} servicesCards={servicesCards}/>
        <Works workImages={workImages}/>
        <About _rawBio={_rawBio}/>
        <Testimonials reviews={reviews}/>
        <Contact contactInfo={contactInfo}/>
    </Layout>
    )
}

export default IndexPage


