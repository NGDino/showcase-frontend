import React from 'react';

const About = ({ aboutInfo }) => {
    return (
        <div id="about" className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title text-center">
                            <h2>About Us</h2>
                            <p>{aboutInfo.smallDescription ? aboutInfo.smallDescription : ''}</p>
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
                        <img src={aboutInfo.photo.asset.url} alt="Brooke" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;