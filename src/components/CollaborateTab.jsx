import React, { useState } from 'react'
import CollaborateEducation from './CollaborateEducation';
import CollaborateInterests from './CollaborateInterests';
import "../index.css";

export default function CollaborateTab() {
  const [educationIsClicked,setEducationIsClicked] = useState(true);
  const [interestsIsClicked,setInterestsIsClicked] = useState(false);

  return (
    <div className='w-full h-auto'>
        <div className='max-w-[1240px] mx-auto w-full px-8 py-14'>
          <div className='flex justify-center'>
            <div className='flex-grow text-center mb-4'>
              <button>
                <h1
                  onClick={()=>{
                    setEducationIsClicked(true);
                    setInterestsIsClicked(false);
                  }}
                  className={`${educationIsClicked ? 'active cursor-pointer font-acorn text-2xl text-[rgb(2,90,78)] md:text-3xl lg:text-4xl' : 'cursor-pointer font-acorn text-2xl text-[rgb(2,90,78)] md:text-3xl lg:text-4xl'}`}
                >
                  Education
                </h1>
              </button>
            </div>
            <div className='flex-grow text-center mb-4'>
              <button>
                <h1 
                  onClick={()=>{
                    setInterestsIsClicked(true);
                    setEducationIsClicked(false);
                  }}
                  className={`${interestsIsClicked ? 'active cursor-pointer font-acorn text-2xl text-[rgb(2,90,78)] md:text-3xl lg:text-4xl' : 'cursor-pointer font-acorn text-2xl text-[rgb(2,90,78)] md:text-3xl lg:text-4xl'}`}
                >
                  Interests
                </h1>
              </button>
            </div>
          </div>
          <div className='bg-[rgb(246,243,239)] rounded-lg p-8 lg:w-[80%] mx-auto box-shadow-bottom'>
            <div>
              {educationIsClicked && <CollaborateEducation/>}
              {interestsIsClicked && <CollaborateInterests/>}
            </div>
          </div>
        </div>
    </div>
  )
}
