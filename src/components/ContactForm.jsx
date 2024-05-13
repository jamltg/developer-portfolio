import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset();
    };

  return (
    <div className='max-w-[1240px] mx-auto px-8 bg-[rgb(246,243,239)] dark:bg-[rgb(35,56,49)] rounded-lg' id="contact">
        <div className='text-center py-6 space-y-2'>
            <h1 className='font-acorn text-4xl text-[rgb(2,90,78)] dark:text-[rgb(143,220,194)] md:text-5xl lg:text-7xl'>CONTACT</h1>
            <p className='text-[rgb(76,103,99)] dark:text-[rgb(176,200,191)] font-medium md:text-lg'>Feel free to contact me by submitting the form below and I will get back to you as soon as possible.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className='space-y-4'>
            <div>
                <div className='flex lg:justify-center'>
                    <h2 className='text-lg text-[rgb(2,90,78)] dark:text-[rgb(176,200,191)] lg:w-[85%]'>Name</h2>
                </div>
                <div className='flex justify-center'>
                    <input type="text" name="user_name" className='w-[100%] p-2 rounded-lg lg:w-[85%]'/>
                </div>
            </div>
            <div>
                <div className='flex lg:justify-center'>
                    <h2 className='text-lg text-[rgb(2,90,78)] dark:text-[rgb(176,200,191)] lg:w-[85%]'>Email</h2>
                </div>
                <div className='flex justify-center'>  
                    <input type="email" name="user_email" className='w-[100%] p-2 rounded-lg lg:w-[85%]'/>
                </div>
            </div>
            <div>
                <div className='flex lg:justify-center'>
                    <h2 className='text-lg text-[rgb(2,90,78)] dark:text-[rgb(176,200,191)] lg:w-[85%]'>Message</h2>
                </div>
                <div className='flex justify-center'>
                    <textarea name="message" className='w-[100%] p-2 rounded-lg lg:w-[85%]'/>
                </div>
            </div>
            <div className='text-center'>
                <input type="submit" value="Send" className='border-2 bg-[rgb(2,90,78)] dark:bg-[rgb(35,56,49)] text-white text-lg rounded-lg py-2 px-6' />
            </div>
        </form>
    </div>
  )
}
