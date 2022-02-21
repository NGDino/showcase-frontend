import React from 'react'

const Services = ({servicesOverview, servicesCards}) => {
    const  servicesIcons=  [
     
        "glyph-icon flaticon-032-target", "glyph-icon flaticon-012-management","glyph-icon flaticon-024-user"
    ]

    const servicedata = servicesCards.map((service, index) => (
        <div className="col-md-6 col-lg-4 text-center" key={index}>
            <div className="service-item">
                <div className="glyph">
                    <i className={servicesIcons[index]}></i>
                </div>
                <h3>{service.serviceTitle}</h3>
                <p>{service.serviceDescription}</p>
            </div>
        </div>
    ));
    return (
        <section id="services" className="services ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h2>Services</h2>
                            <p>{servicesOverview}</p>
                            <span className="section-title-bg">Services</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {servicedata}
                </div>
            </div>
        </section>
    )
}


export default Services
