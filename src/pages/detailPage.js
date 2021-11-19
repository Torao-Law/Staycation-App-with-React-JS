import React, { Component } from 'react'
import Header from 'parts/Header'
import TitleDetailPage from 'parts/TitleDetailPage'
import itemDetails from '../json/itemDetails.json'
import FeaturedImage from 'parts/FeatureImage'
import DescDetailPage from 'parts/DescDetailPage'
import FormBooking from 'parts/FormBooking'
import Testimony from 'parts/Testimony'
import Categories from 'parts/Categories'
import Footer from 'parts/Footer'
import { Fade } from 'react-reveal'

export class detailPage extends Component {
    componentDidMount() {
        window.title = "Detail Page";
        window.scrollTo(0, 0);
    }

    render() {
        const breadcrumbList = [
            {pageTitle: "Home", pageHref:""},
            {pageTitle: "House Details", pageHref:""},
        ]

        return (
            <>
                <Header {...this.props} />
                <TitleDetailPage breadcrumb={breadcrumbList} data={itemDetails}/>
                <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
                <section className="container">
                    <div className="row">
                        <Fade bottom>
                        <div className="col-7 pr-5">
                            <DescDetailPage data={itemDetails}/>
                        </div>
                        <div className="col-5">
                            <FormBooking itemDetails={itemDetails}/>
                        </div>
                        </Fade>
                    </div>
                </section>

                <Categories data={itemDetails.categories} />
                <Testimony data={itemDetails.testimonial}/>

                <Footer />
            </>
        )
    }
}

export default detailPage
