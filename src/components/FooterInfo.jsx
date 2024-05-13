import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function FooterInfo() {
  return (
    <div className='max-w-[1240px] mx-auto flex flex-col-reverse space-y-4 text-center p-8 md:flex md:flex-row md:justify-between md:items-center md:space-y-0'>
        <div className='text-white dark:text-[rgb(209,233,225)]'>
          <h1>© 2024 Jhame Letigio • Philippines</h1>
        </div>
        <div className='space-x-4 pb-2 md:pb-0'>
          <SocialIcon url="https://github.com/jamltg"/>
          <SocialIcon url="https://linkedin.com/in/jhame-letigio"/>
          <SocialIcon url="mailto:letigio.njl@gmail.com"/>
        </div>
    </div>
  )
}
