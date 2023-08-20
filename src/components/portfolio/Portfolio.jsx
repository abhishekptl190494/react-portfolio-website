import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/11.jpg'
import IMG2 from '../../asset/5.jpg'
import IMG3 from '../../asset/7.jpg'
import IMG4 from '../../asset/8.jpg'
import IMG5 from '../../asset/9.jpg'
import IMG6 from '../../asset/10.jpg'
import IMG7 from '../../asset/13.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Full-Stack app',
    github: '',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map(({id,image,title,github}) => {
          return (
              <>
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={IMG1} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
             </article>
             
             <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG2} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                  <a href="https://github.com" className='btn' target='_blank'>Github</a>
                 
                </div>
              </article><article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG3} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                  <a href="https://github.com" className='btn' target='_blank'>Github</a>
                 
                </div>
              </article><article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG4} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                  <a href="https://github.com" className='btn' target='_blank'>Github</a>
                 
                </div>
              </article><article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG5} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                  <a href="https://github.com" className='btn' target='_blank'>Github</a>
                 
                </div>
              </article><article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG6} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                  <a href="https://github.com" className='btn' target='_blank'>Github</a>
                
                </div>
              </article><article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG7} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio__item-cta'>
                  <a href="https://github.com" className='btn' target='_blank'>Github</a>
                 
                </div>
              </article>
              </>
           )


        })
      }







      </div>
    </section>
  )
}

export default Portfolio