import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'

const Home = () => {

  return (
    <Layout>
   <div className='flex flex-wrap justify-center space-x-5 mt-6'>
     {/* {
       blogs.length > 0 && blogs.map((blog)=>{
         console.log(blog)
         return (
           <Card blog={blog} />
         )
       })
     } */}
   </div>
    </Layout>
   )
}

export default Home