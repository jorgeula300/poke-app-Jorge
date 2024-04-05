import React from 'react'
import FormTranier from '../components/HomePage/FormTranier'
import Footer from '../components/General/Footer'

const HomePage = () => {
  return (
    <div className='w-full h-[100vh] px-2 flex flex-col justify-center items-center '>
      <div className=' flex flex-col justify-center items-center space-y-4'>
        <img className='w-auto max-h-[100px]' src="/imgPokedex.png" alt="imgPokedex.png" />
        <h2 className=' text-3xl font-bold text-[#FE1936]'>Hi trainer!</h2>
        <p className='text-lg font-medium'>To see the pokemon's information, tell me your trainer name.</p>
        <FormTranier/>
        
      </div>

      <Footer/>
     
    </div>
  )
}

export default HomePage