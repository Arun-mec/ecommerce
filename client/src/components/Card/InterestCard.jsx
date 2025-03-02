import React from 'react'
import SectionTitle from '../Carousel/SectionTitle'
import Card from './Card'

const InterestCard = () => {
  return (
    <section className='container flex flex-col gap-5 '>
        <span className='max-w-fit font-bold text-2xl p-3'>STILL INTERESTED?</span>
        <Card />
    </section>
  )
}

export default InterestCard