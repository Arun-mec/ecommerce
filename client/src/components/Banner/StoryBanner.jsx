import React from 'react'
import SectionTitle from '../Carousel/SectionTitle'
import Logo from '../Navbar/Logo'

const StoryBanner = () => {
  return (
    <section className='strycontainer flex flex-col justify-center items-center bg-dark text-white font-adfont'>
        <span className='max-w-fit font-bold text-2xl p-3'>STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</span>
        <span className='pb-5 text-lg font-light'>Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance. Beat your PB. adidas offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads the moves. The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you focused before that whistle blows. During the race. And at the finish lines. We’re here to support creators. Improve their game. Their lives. And change the world.
        adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sports apparel and style that match their athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.</span>
        <Logo />
    </section>
  )
}

export default StoryBanner