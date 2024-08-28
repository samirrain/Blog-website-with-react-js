import React from 'react'
import Blogcard from './Blogcard'
import Blogcard2 from './Blogcard2'

const Home = () => {
  return (
 
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 pb-24 pt-16 mx-auto">
          
   
  <div className="main-bl pb-10">
  <Blogcard />
  </div>

    
   
    <h1 className='text-3xl font-bold py-8'>Recent News</h1>
 <div className="blog flex justify-center space-x-5 flex-wrap">
 <Blogcard2 />
 <Blogcard2 />
 <Blogcard2 />
 <Blogcard2 />
 </div>
  </div>
</section>

  )
}

export default Home