import React from 'react'
import { Helmet } from 'react-helmet'

import './assets/animate.css'
import './assets/bootstrap.min.css'
import './assets/flaticon.css'
import './assets/font-awesome.min.css'
import 'react-image-lightbox/style.css'
import "react-modal-video/css/modal-video.min.css"
import 'react-accessible-accordion/dist/fancy-example.css';
import './assets/style.css'
import './assets/responsive.css'
import './assets/default-color.css'
import Navigationbar from './Navigationbar'
import Footer from './Footer'
import GoTop from './GoTop'
import Preloader from './Preloader'

const Layout = ({children}) => {
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, [])

    return (
        <React.Fragment>
            <Helmet title="Showcase Staging" defer={false} />
            {loader ? <Preloader /> : null}
            <Navigationbar />
            {children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            <Footer />
        </React.Fragment>
    )
}

export default Layout
