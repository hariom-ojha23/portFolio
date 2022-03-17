import React, { useRef } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_9ekc0ws',
        'template_rd86l4b',
        form.current,
        'G5ErCdIZIJCVRpanx'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>hariomojha2301@gmail.com</h5>
            <a href='mailto:hariomojha2301@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsTelephone className='contact_option_icon' />
            <h4>Phone Number</h4>
            <h5>+91 9318436420</h5>
            <a href='tel:+919318436420'>Call Me</a>
          </article>
          <article className='contact_option'>
            <FaWhatsapp className='contact_option_icon' />
            <h4>WhatsApp Number</h4>
            <h5>+91 9318436420</h5>
            <a href='https://api.whatsapp.com/send?phone=+919318436420'>
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <div className='contact_form'>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Enter Your Email'
              required
            />
            <textarea
              name='message'
              rows='7'
              placeholder='Enter Your Message'
              required
            />
            <button type='submit' className='btn btn-primary'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
