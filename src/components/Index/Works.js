import React from 'react'
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby'

const Works = ({ workImages, workDescription }) => {
  const [photoIndex, setPhotoIndex] = React.useState(0)
  return (
    <React.Fragment>
      <section id="works" className="our-works ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h2>Our Works</h2>
                <p>{workDescription}</p>
                <span className="section-title-bg">Works</span>
              </div>
            </div>
          </div>

          <div id="Portfolio" className="row">
            {workImages.map((image, index) => (
              <div className="col-sm-6 col-lg-4" key={index}>
                <div className="work-details">
                  <img src={image.asset.url} alt="sample" />

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Works
