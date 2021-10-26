import React, { Component } from 'react'
import Header from 'parts/Header'
import TitleDetailPage from 'parts/TitleDetailPage'
import itemDetails from '../json/itemDetails.json'
import FeaturedImage from 'parts/FeatureImage'

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
                <TitleDetailPage breadcrumb={breadcrumbList} data={itemDetails}></TitleDetailPage>
                <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
            </>
        )
    }
}

export default detailPage
