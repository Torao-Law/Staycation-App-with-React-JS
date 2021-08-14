import React, { Component } from 'react'

import Hero from 'parts/Hero'
import Header from 'parts/Header'
import landingPage from 'json/landingPage.json'
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero data={landingPage.hero} />
                <MostPicked data={landingPage.mostPicked}/>
                <Categories data={landingPage.categories}/>
                <Testimoni></Testimoni>
            </>
        );
    }
}