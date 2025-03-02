import React from 'react'

const OfferNavbar = ({
    content,
    tag,
    className 
}) => {
    const offerNavbarClass = `flex justify-center items-center gap-2 ${className}` ;
  return (
    <section className={offerNavbarClass}>
        {content}
        {tag}
    </section>
  )
}

export default OfferNavbar