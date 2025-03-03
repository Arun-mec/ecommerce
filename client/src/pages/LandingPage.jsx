import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Carousel from '../components/Carousel/Carousel'
import CategoryBanner from '../components/Banner/CategoryBanner'
import InterestCard from '../components/Card/InterestCard'
import StoryBanner from '../components/Banner/StoryBanner'
import SubCarousel from '../components/Carousel/SubCarousel'
import ContCardCarousel from '../components/Carousel/ContCardCarousel'
import AdCarousel from '../components/Carousel/AdCarousel'


const LandingPage = () => {
  return (
    <div className=''>
        <Header />
        <Banner />
        <section className='flex flex-col gap-4'>
          <Carousel />
          <AdCarousel />
          <ContCardCarousel />
          <StoryBanner />
          <CategoryBanner />
          <InterestCard />
          <SubCarousel />
        </section>
    </div>
  )
}

export default LandingPage