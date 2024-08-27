import React from 'react'
import { useNavigate } from 'react-router-dom'
const LearningCard = () => {
    const navigate = useNavigate()
  return (
    <div className='cursor-pointer' onClick={()=> navigate('/learn-Quran')}>
       <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-[#caa472]">1. Al-Fatiha</h3>
        <p className="text-sm gilroy-medium text-black">The Opening</p>
        <p className="text-green-600 mt-2">MECCAN</p>
      </div>
      <div className="text-right">
        <p className="text-[#caa472] text-3xl">الفاتحة</p>
        <p className="text-sm text-gray-500">7 Ayat</p>
      </div>
    </div>
    </div>
  )
}

export default LearningCard
