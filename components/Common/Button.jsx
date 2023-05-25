import React from 'react'

function Button({data}) {
  return (
    <div>
      <button className='bg-orange-500 py-3 px-6 text-white rounded hover:bg-white hover:text-black hover:border-orange-500 hover:border-2 hover:text-orange-500'>{data}</button>
    </div>
  )
}

export default Button
