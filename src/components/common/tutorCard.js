import React from 'react'
import { expe, rated, zikr_profile } from '../icons/icon'

const TutorCard = () => {
  return (
    <div className=" text-white p-3 rounded-xl max-w-sm mx-auto bg-[#00000033]">
    <div className='bg-[#00000033] p-4 rounded-xl'>

    <div className="flex items-center space-x-4">
      <img 
        className="w-24 h-2w-24 rounded-full" 
        src={zikr_profile} 

        alt="Nujam Binte Amin" 
      />
      <div className='flex flex-col gap-1'>
        <h2 className="text-xl font-bold mb-0">Nujam Binte Amin</h2>
        <button className="bg-white text-black px-2 py-[.25rem] rounded-full text-sm gilroy-bold w-fit m-0 ">Tutor</button>
        <div className="flex gap-4 items-center justify-between text-gray-400">
        <div className="flex flex-col   m-0">
          <span className='gilroy-light text-white text-sm'>Price</span>
          <span className="text-white text-sm  gilroy-light">$20/h</span>
        </div>
        <div className="flex flex-col  ">
          <span  className='gilroy-light text-white text-sm'>Rating</span>
          <span className="text-white  text-sm  gilroy-light ">4.8/5</span>
        </div>
        <div className="flex flex-col  ">
          <span  className='gilroy-light text-white text-sm'> Sessions</span>
          <span className="text-white  text-sm gilroy-light">10</span>
        </div>
      </div>
      </div>
      
    </div>
      <div className="flex items-center gap-2  mt-4">
      <div className='flex flex-row gap-2 bg-[#5D6A71] text-white px-2 py-1 rounded-full text-sm'>
<img style={{width:"1rem", height:"1rem"}}src={expe} alt='rating'/>
        <span className="">Experienced</span>
      </div>
      <div className='flex flex-row gap-2 bg-[#5D6A71] text-white px-2 py-1 rounded-full text-sm'>
<img style={{width:"1rem", height:"1rem"}} src={rated} alt='rating'/>
        <span className="">Top-rated</span>
      </div>
      </div>
    </div>
    <div className="mt-4">
      
      <p className="mt-4 text-gray-300">The Zikar is an application designed as a loyal guide on your spiritual journey, shedding light on every step, from the initiation of the ritual to its culmination.</p>
      <div className="flex mt-4 w-full gap-3">
        <button className="bg_secondary w-[50%] text-white px-4 py-2 ">Profile</button>
      <button
  style={{
    border: '0.85px solid',
    borderImageSource: 'linear-gradient(90deg, #867157 34%, #353430 100%)',
    borderImageSlice: 1,
    borderRadius: '0.5rem', 

  }}
  className="bg-black text-white w-[50%] px-4 py-2 "
>
  Book
</button>

      </div>
    </div>
  </div>
  )
}

export default TutorCard
