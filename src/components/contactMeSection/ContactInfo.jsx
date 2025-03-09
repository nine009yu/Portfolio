import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white '>
      <SingleInfo text='peeranat4614@gmail.com' Image={HiOutlineMail}/>
      <SingleInfo text='062 842 5264' Image={FiPhone}/>
      <SingleInfo text='Donmanora, BangKhonthi, SamutSongkhram' Image={SlLocationPin}/>
      
    </div>
  )
}

export default ContactInfo
