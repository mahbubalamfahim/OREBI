import React from 'react'

const Button = ({btnName,className}) => {
  return (
    <button className={`${className} text-center font-bold font-dm`}>
      {btnName}
    </button>
  )
}

export default Button