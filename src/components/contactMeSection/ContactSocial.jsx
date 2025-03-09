import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link='https://www.facebook.com/profile.php?id=100014303449135&locale=th_TH' Icon={FaFacebook}/>
      <SingleContactSocial link='https://line.me/ti/p/Gy9-VUvRoU' Icon={FaLine}/>
      <SingleContactSocial link='https://www.instagram.com/prn_nine?igsh=bGJlaHR5dTM5em5h' Icon={FaInstagram}/>
    </div>
  )
}

export default ContactSocial
