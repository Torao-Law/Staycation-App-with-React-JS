import React from 'react'

import Button from 'elements/Button'
import TestimonialAcent from '../assets/images/testimonial-landingpage-frame.jpg'
import Star from 'elements/Star'

export default function Testimony ({ data }) {
    return (
        <section className="container">
           <div className="row align-items-center">
                <div className="col-auto" style={{ marginRight: 70}}>
                    <div className="testimonial-hero" style={{ margin: '30px 0 0 30px'}}>
                        <img src={data.imageUrl} className="position-absolute" alt="Testimonial" style={{ zIndex: 2}} />
                        <img src={TestimonialAcent} className="position-absolute" alt="Testimonial-frame" style={{margin:'-30px 0 0 -30px'}}/>
                    </div>
                </div>

                <div className="col">
                    <h4 style={{ marginBottom: 40}}>
                        {data.name}
                    </h4>

                    <Star value={data.rate} height={35} width={35} spacing={4} />

                    <h5 className="h2 font-weight-light line-height-2 my-3">
                        {data.content}
                    </h5>

                    <span className="text-gray-500">
                        {data.familyName}, {data.familyOccupation}
                    </span>

                    <div>
                        <Button className="btn px-3" style={{ marginTop: 40}} type="link" hasShadow isPrimary href={`/testimonial/${data._id}`}>
                            Read Their Story
                        </Button>
                    </div>
                </div>
           </div>
        </section>
    )
}