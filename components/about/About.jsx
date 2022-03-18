import React from 'react'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/social-app-9923d.appspot.com/o/user%2FWTc4MP7gMQQYGBE3Y3xCM90N7793%2FprofilePhoto?alt=media&token=0d12aaeb-6411-4193-a6b0-33df74f139ee'
              alt='hari om ojha'
            />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Years of Working</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
            Hello! My name is Hari om Ojha. I lived in Delhi and currently
            pursuing B.Tech in Computer Science and Engineering from Galgotias
            University. I am a Full Stack Developer. I have hands on experience
            designing, building and implementing applications using a range of
            technologies like React, Node, Express, MongoDB, React-Native, MySQL
            etc. I am very passionate about learning new technologies and
            applying my kowledge to develop real world applications.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
