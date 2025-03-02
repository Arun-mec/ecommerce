import React from 'react'

const SupportNavbar = ({
  className,
  contents
}) => {
  const supportNavbarClass = `flex justify-end gap-5 px-5 ${className}`
  const navbarItemClass = `text-dark text-sm font-moto cursor-pointer italic underline hover:font-semibold`
  return (
    <section className={supportNavbarClass}>
      {
        contents.map((content, index)=>{
          return (
            <div className={navbarItemClass}>{content}</div>
          )
        })
      }
    </section>
  )
}

export default SupportNavbar