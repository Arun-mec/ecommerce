import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Badge from '../Banner/Badge'
import OfferNavbar from '../Navbar/OfferNavbar'
import SupportNavbar from '../Navbar/Supportnavbar'

const Header = () => {
  const supportNavbarContents = ["help", "orders and returns", "signup","login"]
  const supportNavbarClass = `flex p-1`
  const allofferNavbarContent = `FREE DELIVERY, RETURN AND EXCHANGE`
  const allOfferNavbarTag = <i className="material-icons cursor-pointer">chevron_right</i> 
  const allofferNavbarClass = `bg-dark text-light text-xs font-semibold p-2 cursor-pointer`
  const dayOFferNavbarContent = `Pick2 and get 50%! Exclusive offer Card Picks for February!`
  const dayOFferNavbarTag = <i className="material-icons cursor-pointer">arrow_forward</i>
  const dayOfferNavbarClass = `bg-offer-navbar-onlight-bg text-dark font-moto font-thin text-sm p-3 cursor-pointer`
  return (
    // <div className='flex flex-col gap-5'>
    //     <Navbar />
    //     <Banner />
    // </div>
    <div className=''>
      <OfferNavbar content={allofferNavbarContent} className={allofferNavbarClass} tag={allOfferNavbarTag} />
      <SupportNavbar contents={supportNavbarContents} className={supportNavbarClass}/>
      <Navbar/>
      <OfferNavbar content={dayOFferNavbarContent} className={dayOfferNavbarClass} tag={dayOFferNavbarTag} />
    </div>
  )
}

export default Header