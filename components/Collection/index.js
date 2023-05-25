import React from 'react'
import Card from '../Product/Card'
import Slider from '../Common/Slider'

function Collection() {
    let products=[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5}]
  return (
    <>
        <Slider data={products} />
    </>
  )
}

export default Collection
