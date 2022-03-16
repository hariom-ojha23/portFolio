import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { IoGridOutline } from 'react-icons/io5'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a
        href='#'
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => setActiveNav('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experiences'
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}
      >
        <BiBook />
      </a>
      <a
        href='#projects'
        className={activeNav === '#project' ? 'active' : ''}
        onClick={() => setActiveNav('#project')}
      >
        <IoGridOutline />
      </a>
      <a
        href='#contact'
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav
