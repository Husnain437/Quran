import React from 'react'

const TimeCard = (props) => {
  return (
    <div className='mx-auto lg:w-auto md:w-[600px] sm:w-[500px] xs:w-[400px] xss:w-auto'>
      <div className='time_card bg-[#1F1E1A] rounded-lg h-[161px] px-5 w-100 flex justify-center items-center'>
      <div className='flex flex-row justify-center items-center gap-3'>
      <img src={props.icon} width="70px" height="50px" alt='fajar'/>
      <div className='flex flex-col gap-2'>
        <p className='text-white gilroy-bold text-md'>
{props.name}
        </p>  
        <p className='text-white gilroy-bold text-md text-nowrap'>
{props.time}
        </p>  

      </div>

      </div>




      </div>
    </div>
  )
}

export default TimeCard
