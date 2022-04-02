import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/App/Layout'
import Seo from "../components/App/seo"
import Banner from "../components/Index/Banner"
import Services from "../components/Index/Services"
import Works from "../components/Index/Works"
import About from "../components/Index/About"
import Testimonials from "../components/Index/Testimonials"
import Contact from "../components/Index/Contact"
import '../components/App/fonts/QwitcherGrypen-Bold.ttf'

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
            reviewText,
            name
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
          about{
            smallDescription,
            title,
            bio
          },
          workDescription
        }
      }
      
`)
  const { contactInfo, heroImage, reviews, servicesCards, servicesOverview, workImages, about, workDescription } = data.sanityLandingPage
  return (
    <Layout contactInfo={contactInfo}>
      <Seo title="Home" />
      <Banner heroImage={heroImage} />
      <Services servicesOverview={servicesOverview} servicesCards={servicesCards} />
      <Works workImages={workImages} workDescription={workDescription} />
      <About aboutInfo={about} />
      <Testimonials reviews={reviews} />
      <Contact contactInfo={contactInfo} />
    </Layout>
  )
}

export default IndexPage


