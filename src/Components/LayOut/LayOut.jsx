import React from 'react'
import Header from'../Header/Header'
import CarouselEffect from '../Caraousel/CarouselEffect'
import Category from '../Category/Category'

function LayOut({children}) {
  return (
    <div>
        <Header/>
      {children}
    </div>
  )
}

export default LayOut