import Head from 'next/head'

import Header from '../components/header/Header'
import About from '../components/about/About'
import Nav from '../components/nav/Nav'
import Experience from '../components/experience/Experience'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hari om Ojha</title>
        <meta name='description' content='Hari om Ojha Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
