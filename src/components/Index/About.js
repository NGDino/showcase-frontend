import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'

const getAboutImages = graphql`
{
    image1: file(relativePath: {eq: "brooke.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
}
`
const About = ( {aboutInfo}) => {
    // const {about} = aboutInfo
    // const about = aboutInfo.aboutInfo;
    const data = useStaticQuery(getAboutImages)
    return (
        <div id="about" className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title text-center">
                            <h2>About Us</h2>
                            <p>{aboutInfo.smallDescription? aboutInfo.smallDescription : ''}</p>
                            <span className="section-title-bg">About</span>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h3>{aboutInfo.title}</h3>
                            <p> 
                                {aboutInfo.bio}
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 brooke">
                        <img src={data.image1.childImageSharp.fluid.src} alt="Brooke" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;