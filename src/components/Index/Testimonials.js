import React from 'react'
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const Testimonials = ({reviews}) => {
    console.log('reviews', reviews)
    const [display, setDisplay] = React.useState(false)

    React.useEffect(() => {
        setDisplay(true)
    }, [])

    const testimonialsitem = reviews.map((review, index) => (
        <div className="single-testimonial-item text-center" key={index}>
            <i className="fa fa-quote-left"></i>
            <p>{review.reviewText}</p>

            <div className="client-profile">
                <img src={review.reviewImage.asset.url} alt={review.name} />
            </div>

            <div className="client-info">
                <h3>{review.name}</h3>
            </div>
        </div>
    ))

    return (
        <div>
            {reviews.length < 1 ? <div> </div> :
                <div className="testimonials ptb-100">
                    <div className="container">
                        {display ? <OwlCarousel
                            className="owl-theme testimonial-slides"
                            items={1}
                            nav={true}
                            dots={false}
                            autoplay={false}
                            loop={true}
                            autoplayHoverPause={true}
                            smartSpeed={1000}
                            navText={[
                                "<i class='fa fa-chevron-left'></i>",
                                "<i class='fa fa-chevron-right'></i>"
                            ]}
                        >
                            {testimonialsitem}
                        </OwlCarousel> : ''}
                    </div>
                </div>
            }


        </div>
    )
}


export default Testimonials
