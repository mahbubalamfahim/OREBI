import React from 'react'

const Badge = ({badgeName , className}) => {
  return (
    <div className={`px-8 py-3 bg-black text-white font-dm font-bold ${className}`} >
        {badgeName}
    </div>
  )
}

export default Badge