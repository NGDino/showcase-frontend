import React from 'react'
import { Link as a } from 'gatsby'

const TopHeader = () => {
    return (
        <div id="home" className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-8">
                        <div className="address-bar">
                            <ul className="list-inline">
                                <li>
                                    <a href="mailto:brookegbsn@yahoo.com">
                                        <i className="fa fa-envelope"></i> brookegbsn@yahoo.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:925-699-2758">
                                        <i className="fa fa-volume-control-phone"></i> (925)699-2758
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-5 col-md-4">
                        <div className="social-icons">
                            <ul className="list-inline">
                                <li>
                                    <a href="https://www.facebook.com/duartefamilyrealestate" target="_blank">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a to="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/showcasestaginganddesign/" target="_blank">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a to="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
