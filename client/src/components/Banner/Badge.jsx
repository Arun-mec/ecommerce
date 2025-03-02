import React from 'react'

const Badge = ({
    className,
    content
}) => {
    const badgeClass = `bg-light text-dark max-w-fit font-adfont font-bold p-1 text-sm ${className}`;
  return (
    <div className={badgeClass}>{content}</div>
  )
}

export default Badge