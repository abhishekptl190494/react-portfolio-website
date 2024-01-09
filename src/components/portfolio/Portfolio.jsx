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
import IMG10 from '../../asset/ch.png'
import IMG11 from '../../asset/galaxy.png'
import IMG12 from '../../asset/3D text - Copy.png'
import IMG13 from '../../asset/nike-clone.png'
import IMG14 from '../../asset/banner-bg.png'



const data = [
  {
    id: 1,
    image: IMG10,
    title: '3D - Christmas_House website',
    github: 'https://github.com/abhishekptl190494/Project-Christmas-House',
  },
  {
    id: 2,
    image: IMG11,
    title: 'Miky Galaxy',
    github: 'https://github.com/abhishekptl190494/Particles---Milky-Galaxy',
  },
  {
    id: 3,
    image: IMG12,
    title: '3D Text',
    github: 'https://github.com/abhishekptl190494/3D-text-using-three.js',
  },
  {
    id: 4,
    image: IMG13,
    title: 'Nike-clone',
    github: 'https://github.com/abhishekptl190494/nike',
  },
  {
    id: 5,
    image: IMG14,
    title: 'Portfolio',
    github: 'https://github.com/abhishekptl190494/web-design-react-portfolio',
  },

  {
    id: 6,
    image: IMG2,
    title: 'React.js Searchbar',
    github: 'https://github.com/abhishekptl190494/Lintra_searchbar_ReactJS',
  },

  {
    id: 7,
    image: IMG3,
    title: 'Stonks_database upgradation',
    github: 'https://github.com/abhishekptl190494/stonks_database_upgradation',
  },

  {
    id: 8,
    image: IMG4,
    title: 'eccom',
    github: 'https://github.com/abhishekptl190494/ecomm',
  },

  {
    id: 9,
    image: IMG5,
    title: 'Multiple app linking',
    github: 'https://github.com/abhishekptl190494/Multiple-apps-linking-',
  },

  {
    id: 10,
    image: IMG6,
    title: 'YouTube Downloader with Python',
    github: 'https://github.com/abhishekptl190494/Youtube_downloader_wih_Python',
  },

  {
    id:11,
    image: IMG7,
    title: 'Django-View-Tables',
    github: 'https://github.com/abhishekptl190494/django-View-tables',
  },

  {
    id: 12,
    image: IMG8,
    title: 'Django Portfolio',
    github: 'https://github.com/abhishekptl190494/portfolio',
  },

  {
    id: 13,
    image: IMG9,
    title: 'React Portfolio website',
    github: 'https://github.com/abhishekptl190494/react-portfolio-website',
  },

 { 
  id: 14,
  image: IMG1,
  title: 'Full-Stack app',
  github: 'https://github.com/abhishekptl190494/Full-stack-app',
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