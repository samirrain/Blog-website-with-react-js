import React from 'react'
import Blogcardimg from './Blogcardimg'
import Blogcarddetail from './Blogcarddetail'

const Blogcard = () => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap gap-10 shadow-xl  px-4 rounded-md">
   <Blogcardimg />
   <Blogcarddetail />
  </div>
  )
}

export default Blogcard