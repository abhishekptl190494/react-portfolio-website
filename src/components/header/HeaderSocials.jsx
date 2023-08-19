import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiXing} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

        <a href="https://www.linkedin.com/in/abhishekpatel1994/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/abhishekptl190494" target='_blank'><FaGithub /></a>
        <a href="https://www.xing.com/profile/ABHISHEK_PATEL8/cv" target='_blank'><SiXing /></a>

    </div>
  )
}

export default HeaderSocials