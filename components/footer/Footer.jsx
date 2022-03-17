import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>
        Hari om Ojha
      </a>

      <ul className='footer_links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experiences'>Experience</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.facebook.com/hari.om.18659/'>
          <FaFacebookF />
        </a>
        <a href='https://www.instagram.com/hariom_ojha/'>
          <BsInstagram />
        </a>
      </div>
    </footer>
  )
}

export default Footer
