import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header_container'>
        <h5>Hello I am</h5>
        <h1>Hari om Ojha</h1>
        <h5 className='text-light'>FULL STACK DEVELOPER</h5>
        <CTA />

        <HeaderSocials />

        <div className='me'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/evencloud-26d32.appspot.com/o/nativeTrackerApp%2F1234567890%2FprofilePicture?alt=media&token=30e5291c-3e71-445e-a4e9-51346da0d862'
            alt='Hari om Ojha'
          />
        </div>
        <a href='#contact' className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
