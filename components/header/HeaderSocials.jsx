import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a
        href='https://in.linkedin.com/in/hari-om-ojha-0ba62419b'
        alt='linkedin'
        target='_blank'
        rel='noreferrer'
      >
        <FaLinkedinIn className='social-icon' />
      </a>
      <a
        href='https://github.com/hariom-ojha23'
        alt='github'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub className='social-icon' />
      </a>
      <a
        href='https://www.instagram.com/hariom_ojha/'
        alt='instagram'
        target='_blank'
        rel='noreferrer'
      >
        <FaInstagram className='social-icon' />
      </a>
    </div>
  )
}

export default HeaderSocials
