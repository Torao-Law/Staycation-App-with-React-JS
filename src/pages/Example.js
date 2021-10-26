import React, { Component } from 'react'

import Breadcrumb from "../elements/Breadcrumb/index"

export default class Example extends Component{
    render() {
        const breadcrumbList = [
            {pageTitle: "Home", pageHref:""},
            {pageTitle: "House Details", pageHref:""},
        ]

        return(
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: "70vh" }}>
                    <div className="col-auto">
                        <Breadcrumb data={breadcrumbList} />
                    </div>
                </div>
            </div>
        );
    }
}