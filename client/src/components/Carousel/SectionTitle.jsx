import React from 'react'

const SectionTitle = ({
    content
}) => {
  return (
    <div className='flex flex-row justify-between items-end p-3'>
        <span className='text-dark max-w-fit font-adfont font-bold text-2xl'>{content}</span>
        <span className='text-dark max-w-fit font-adfont font-bold text-md underline underline-offset-2 cursor-pointer'>SEE ALL</span>
    </div>
  )
}   

export default SectionTitle