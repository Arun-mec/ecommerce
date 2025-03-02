import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Carousel from '../components/Carousel/Carousel'
import CategoryBanner from '../components/Banner/CategoryBanner'
import InterestCard from '../components/Card/InterestCard'
import StoryBanner from '../components/Banner/StoryBanner'
import SubCarousel from '../components/Carousel/SubCarousel'

const LandingPage = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Carousel />
        <StoryBanner />
        <CategoryBanner />
        <InterestCard />
        <SubCarousel />
    </div>
  )
}

export default LandingPage