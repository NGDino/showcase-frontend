import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

const Banner = ({heroImage}) => {
    const Background = styled.div`
    background-image: url(${heroImage.asset.url});
`
    return (
        <div className="hompage-slides-wrapper">
            <Background className="single-slider-item ">
                <div className="diplay-table">
                    <div className="display-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <span className="hero-text">
                                        {heroImage.descriptor}
                                    </span>
                                    <h1>{heroImage.headline}</h1>
                                    <p>{heroImage.tagline}</p>

                                    <div className="center-wrap">
                                        <div className="center-wrap">
                                            <AnchorLink
                                                offset={() => -10}
                                                className="btn-a"
                                                href="#contact"
                                            >
                                                <div className="button">

                                                    Contact Us
                                                    {` `}
                                                    <i className="fa fa-long-arrow-right"></i>
                                                <div className="mask" /></div>
                                            </AnchorLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Background>
        </div>
    )
}


export default Banner
