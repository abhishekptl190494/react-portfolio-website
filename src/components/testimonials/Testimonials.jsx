import React from 'react'
import './testimonials.css'
import AVTR1 from '../../asset/Tina.jpeg'
import AVTR2 from '../../asset/Ivis.jpeg'
import AVTR3 from '../../asset/Ricardo.jpeg'

import { Pagination } from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Hovhannisyan',
    review: 'I am thrilled to recommend Abhishek for any Software development team. During his time working alongside us, he showed an impressive commitment to learning and growth. Abhishek consistently demonstrated a strong grasp of coding principles and problem solving skills. One of his standout qualities is his eagerness to ask question and seek guidance when needed. This proactive approach not only accelerated learning but also improved contributions to our project. I am confident that Abhishek will continue to shine and make meaningful contributions in future endeavors.'
  },

  {
    avatar: AVTR2,
    name: 'Ivis Orea Cordero',
    review:'I am delighted to provide a strong recommendation for Abhishek Patel, based on our collaborative experience working together. Abhishek is an outstanding developer with a diverse skill set that includes TypeScript, React.js, Python, Django, and JavaScript. Throughout our projects, Abhishek consistently demonstrated a remarkable ability to tackle complex challenges with creativity and precision. Abhishek has proficiency in TypeScript and React.js was evident in the development of captivating user interfaces that provided an exceptional user experience. His knowledge of Python contributed to the efficient implementation of robust back-end systems and the seamless integration of various functionalities. I wholeheartedly recommend Abhishek Patel to any team looking for a highly skilled and motivated developer. His contributions have been invaluable to our projects, and I am confident he will continue to excel in any future endeavors.'  
  },

  {
    avatar: AVTR3,
    name: 'Ricardo Rieckhof',
    review: 'I worked with Abhishek at Aiio GmbH for nine months. Abhishek is a friendly, skilful and creative developer. He has command of many programming languages and accomplished several tasks with me. Abishek is a reliable and competent developer. He can take any programming challenge and can provide solutions to complex problems. During my time with him, he completed many demanding tasks on-time and would even add pertinent improvements to the designs. Abhishek would make a great Fullstack Developer for any software company. It was a pleasure to work with him, and I genuinely hope to have the opportunity to work with him again.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from teammate</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >

        {
          data.map(({avatar, name, review}, index) => {

            return (
              <>
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
              </SwiperSlide>
            </>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials