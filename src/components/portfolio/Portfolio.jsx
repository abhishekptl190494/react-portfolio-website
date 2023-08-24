import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/Full-stack.jpg'
import IMG2 from '../../asset/Searchbar.jpg'
import IMG3 from '../../asset/Stonkesdatabase.jpg'
import IMG4 from '../../asset/ecomm.png'
import IMG5 from '../../asset/multipleapp.png'
import IMG6 from '../../asset/yt_dn.png'
import IMG7 from '../../asset/djangotable.png'
import IMG8 from '../../asset/port.webp'
import IMG9 from '../../asset/reactport.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Full-Stack app',
    github: 'https://github.com/abhishekptl190494/Full-stack-app',
  },

  {
    id: 2,
    image: IMG2,
    title: 'React.js Searchbar',
    github: 'https://github.com/abhishekptl190494/Lintra_searchbar_ReactJS',
  },

  {
    id: 3,
    image: IMG3,
    title: 'Stonks_database upgradation',
    github: 'https://github.com/abhishekptl190494/stonks_database_upgradation',
  },

  {
    id: 4,
    image: IMG4,
    title: 'eccom',
    github: 'https://github.com/abhishekptl190494/ecomm',
  },

  {
    id: 5,
    image: IMG5,
    title: 'Multiple app linking',
    github: 'https://github.com/abhishekptl190494/Multiple-apps-linking-',
  },

  {
    id: 6,
    image: IMG6,
    title: 'YouTube Downloader with Python',
    github: 'https://github.com/abhishekptl190494/Youtube_downloader_wih_Python',
  },

  {
    id:7,
    image: IMG7,
    title: 'Django-View-Tables',
    github: 'https://github.com/abhishekptl190494/django-View-tables',
  },

  {
    id: 8,
    image: IMG8,
    title: 'Django Portfolio',
    github: 'https://github.com/abhishekptl190494/portfolio',
  },

  {
    id: 9,
    image: IMG9,
    title: 'React Portfolio website',
    github: 'https://github.com/abhishekptl190494/react-portfolio-website',
  },


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
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
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