import React from 'react';

const NameCard = ({ img, subtitle, description }) => {
  return (
    <div className=" border-0 dark:bg-gray-800 shadow-md rounded-tl-3xl rounded-tr-3xl m-2 flex flex-col items-center">
      <div className="">
        <img className=' rounded-tl-3xl rounded-tr-3xl'  alt='rehman' src={img}/>
        <div className='flex flex-col justify-start items-start px-3 bg-[#0B0C0D] py-3 text-white rounded-br-3xl rounded-bl-3xl border-0'>
        <p className="text-sm mb-1">{subtitle}</p>
        <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
