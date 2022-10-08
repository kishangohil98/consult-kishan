import React from 'react'
import homeImg from '../assets/home.png'

export const Home = () => {
  return (
    <div className='flex flex-col md:flex-row content-center mb-9'>
        <div className='w-full md:w-1/2 flex justify-center flex-col items-start'>
            <div className='container px-9 mx-4'>
                <h1 className='mb-9 font-black text-5xl leading-snug text-[#262626]'>Get your business challenges solved</h1>
                <p className='mb-9 text-base font-medium leading-7 text-[#262626]' style={{
                    letterSpacing: '-1px'
                }}>We provide solutions through our consulting, marketing and web development skills for long-term profitability.</p>
                <a href='#' className='bg-[#214462] text-[#02CFAA] px-6 py-3 font-bold rounded-lg'>Get in Touch</a>
            </div>
        </div>
        <div className='w-full md:w-1/2 mx-auto w-[250px] md:w-[500px]' >
            <img src={homeImg} className="h-full" alt="Home" />
        </div>
    </div>
  )
}

export default Home