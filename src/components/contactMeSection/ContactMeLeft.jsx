import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h2 className='text-orange text-3xl '>Get In Touch</h2>

      </div>
      <ContactForm/>
    </div>
  )
}

export default ContactMeLeft
