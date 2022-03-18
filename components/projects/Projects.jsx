import React from 'react'

const data = [
  {
    id: 0,
    img: '/images/codesplit.png',
    alt: '',
    title: 'CodeSplit: Realtime Collaborative App',
    github: 'https://github.com/hariom-ojha23/CodeSplit',
    demo: 'https://github.com/hariom-ojha23/CodeSplit',
  },
  {
    id: 1,
    img: '/images/ecommerce.png',
    alt: '',
    title: 'MyShop: E-commerce Application',
    github: 'https://github.com/hariom-ojha23/e-commerce',
    demo: 'https://github.com/hariom-ojha23/e-commerce',
  },
  {
    id: 2,
    img: '/images/felix.png',
    alt: '',
    title: 'Felix: Social Media App',
    github: 'https://github.com/hariom-ojha23/social-media-app-felix',
    demo: 'https://felix-hr.herokuapp.com/',
  },
  {
    id: 3,
    img: '/images/rqm.png',
    alt: '',
    title: 'Random-Quote-Machine',
    github: 'https://github.com/hariom-ojha23/random-quote-machine',
    demo: 'http://random-quote-machine23.herokuapp.com/home',
  },
  {
    id: 4,
    img: '/images/eduease.png',
    alt: '',
    title: 'Eduease: Group Video Call Application',
    github: 'https://github.com/hariom-ojha23/eduease',
    demo: 'https://github.com/hariom-ojha23/eduease',
  },
  {
    id: 5,
    img: '/images/pixel.png',
    alt: '',
    title: 'Pixel Art Maker',
    github: 'https://github.com/hariom-ojha23/Pixel-art-maker-',
    demo: 'https://hariom-ojha23.github.io/Pixel-art-maker-/',
  },
]

const Article = (props) => {
  return (
    <article className='project_item'>
      <div className='project_item_image'>
        <img src={props.img} alt={props.alt} />
      </div>
      <h3>{props.title}</h3>
      <div className='project_item_cta'>
        <a href={props.github} className='btn' target='_blank' rel='noreferrer'>
          Github
        </a>
        <a
          href={props.demo}
          className='btn btn-primary'
          target='_blank'
          rel='noreferrer'
        >
          Live Demo
        </a>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container project_container'>
        {data.map((item) => (
          <Article
            key={item.id}
            img={item.img}
            alt={item.alt}
            title={item.title}
            github={item.github}
            demo={item.demo}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
