import { OPTIONS_DATA_LIST } from '@/utils/helper'
import React from 'react'

const ManyOptions = () => {
  return (
    <div className='bg-[#E8E2DA] z-[2] relative pt-22 pb-0'>
      <div className='container px-4 max-w-[1180px] mx-auto'>
        <div className='flex items-center gap-2.5 flex-wrap justify-center'>
          {OPTIONS_DATA_LIST.map((obj, i) => (
            <div key={i}>
              <p className='text-[#2e2a27] sm:text-6xl text-4xl leading-[70%] font-normal border border-solid border-[#2E2A27]/35 rounded-full w-fit px-5 py-3'>{obj}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ManyOptions