import React from 'react'
import Menu from './Menu'
import Usermenu from './Usermenu'
import Logo from './Logo'

const Navbar = () => {
  return (
    // <div className='w-full p-3 flex rounded-xl justify-between items-center font-heading font-semibold text-sm bg-light sticky'>
    <div className='grid grid-cols-3 shadow-sm items-center p-2 px-10 font-mont text-sm bg-light '>
        <Logo logo="JUTE" />
        <Menu menu={["TRENDING"]} />
        <Usermenu />
    </div>
  )
}

export default Navbar