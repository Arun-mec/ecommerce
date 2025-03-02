

const Button = ({
    onclick,
    children,
    tag,
    type = 'Button',
    varient = 'Primary',
    disabled = false,
    className
}) => {
    const buttonClass = `w-fit p-4 px-8 font-adfont font-semibold text-sm hover:cursor-pointer 
    relative bottom-1 right-1 flex items-center gap-2
    ${varient} ${disabled ? 'disabled':''} ${className}`;
    
  return (
    <div className='relative border-[0.1rem] max-w-fit'>
      <button  
          className={buttonClass}
          type={type}
          onClick={onclick}
          disabled={disabled} >
          {children}
          {tag}
      </button>
    </div>
  )
}

export default Button