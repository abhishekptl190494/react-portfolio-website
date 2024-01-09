import React from 'react'
import './about.css'
import ME from '../../asset/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'




const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div> 
      

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>4+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Job Experience</h5>
            <small>2+ years</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>
        </div>

        <p>
        <b>
        Software development professional with experience in developing and designing web applications using HTML, CSS, JavaScript, Python, Django, React, Typescript. Adept at developing and deploying complex backend systems, web services and databases with basic cloud knowledge of Docker and Kubernetes. I have experience as a Software Development in process management industry.
        </b>
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>

    </section>
  )
}

export default About