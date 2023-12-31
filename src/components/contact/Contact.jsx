import React from 'react'
import'./contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kyd5499', 'template_7lu1bxv', form.current, '3zfinWnZqELnTvfH3')
    e.target.reset()
  };
  return (
    <section id='contact'>
      
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abhiptl369@gmail.com</h5>
            <a href="mailto:abhiptl369@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' className='input-field' required />
          <input type="email" name='email' placeholder='Your Email' className='input-field' required />
          <textarea type="message" rows="7" placeholder='Your Message' className='input-field' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact