import React from 'react'

export default function InProgressDeviceMockup({imagePath}) {
  return (
    <div>
        <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] w-[225px] md:w-[342px] md:h-[234px] lg:w-[372px]">
            <div class="flex justify-center items-center rounded-lg overflow-hidden h-[156px] md:h-[218px] dark:bg-gray-800">
                <h1 className='font-acorn text-[rgb(209,233,225)] text-2xl'>Under Development..</h1>
            </div>
        </div>
        <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] w-[252px] md:h-[21px] md:w-[382px] lg:w-[457px]">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
    </div>
  )
}
