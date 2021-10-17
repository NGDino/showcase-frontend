import React from 'react'
import PropTypes from "prop-types";

const Services = (props) => {
    const servicedata = props.servicesData.map((service, index) => (
        <div className="col-md-6 col-lg-4 text-center" key={index}>
            <div className="service-item">
                <div className="glyph">
                    <i className={service.icon}></i>
                </div>
                <h3>{service.heading}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    ));
    return (
        <section id="services" className="services ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h2>{props.sectionTitle}</h2>
                            <p>{props.sectionDescription}</p>
                            <span className="section-title-bg">{props.SectionbgTitle}</span>
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

Services.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Services.defaultProps = {
    SectionbgTitle: "Services",
    sectionTitle: "Services",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",

    servicesData: [
     
        {
            icon: "glyph-icon flaticon-032-target",
            heading: "Picture Perfect Staging",
            description:
                "Not only do staged homes attract more visitors and excite clients, but they also sell faster."
        },
        {
            icon: "glyph-icon flaticon-012-management",
            heading: "Creative Designes",
            description:
                "Our beautiful designes will leave your guests speachless and make them feel at home."
        },
        {
            icon: "glyph-icon flaticon-024-user",
            heading: "Friendly Support",
            description:
                "We strive to provide top notch service and make every customer feel like family."
        },
    ]
}

export default Services
