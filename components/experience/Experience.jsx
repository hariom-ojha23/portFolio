import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { DiJavascript1, DiMongodb } from 'react-icons/di'
import { BsBootstrap } from 'react-icons/bs'
import { SiPostgresql } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

const Experience = () => {
  return (
    <section id='experiences'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <AiOutlineHtml5 className='experience_details_icon' />
              <div>
                <h4>HTML</h4>
                <smal className='text-light'>Experienced</smal>
              </div>
            </article>
            <article className='experience_details'>
              <FaCss3Alt className='experience_details_icon' />
              <div>
                <h4>CSS</h4>
                <smal className='text-light'>Intermediate</smal>
              </div>
            </article>
            <article className='experience_details'>
              <DiJavascript1 className='experience_details_icon' />
              <div>
                <h4>JavaScript</h4>
                <smal className='text-light'>Experienced</smal>
              </div>
            </article>
            <article className='experience_details'>
              <BsBootstrap className='experience_details_icon' />
              <div>
                <h4>Bootstrap</h4>
                <smal className='text-light'>Experienced</smal>
              </div>
            </article>
            <article className='experience_details'>
              <FaReact className='experience_details_icon' />
              <div>
                <h4>ReactJS</h4>
                <smal className='text-light'>Experienced</smal>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND AND START OF BACKEND DEVELOPMENT */}

        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <FaNodeJs className='experience_details_icon' />
              <div>
                <h4>NodeJS</h4>
                <smal className='text-light'>Experienced</smal>
              </div>
            </article>
            <article className='experience_details'>
              <DiMongodb className='experience_details_icon' />
              <div>
                <h4>MongoDB</h4>
                <smal className='text-light'>Intermediate</smal>
              </div>
            </article>
            <article className='experience_details'>
              <GrMysql className='experience_details_icon' />
              <div>
                <h4>MySQL</h4>
                <smal className='text-light'>Basic</smal>
              </div>
            </article>
            <article className='experience_details'>
              <SiPostgresql className='experience_details_icon' />
              <div>
                <h4>PostgreSQL</h4>
                <smal className='text-light'>Basic</smal>
              </div>
            </article>
            <article className='experience_details'>
              <FaPython className='experience_details_icon' />
              <div>
                <h4>Python</h4>
                <smal className='text-light'>Basic</smal>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
