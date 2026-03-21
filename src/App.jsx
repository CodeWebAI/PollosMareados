import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Experience from './components/Experience'
import Contact from './components/Contact'
import MembershipTerms from './components/MembershipTerms'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function App() {
  const path = window.location.pathname
  const normalizedPath = path.length > 1 ? path.replace(/\/+$/, '') : path
  const isHomeRoute = normalizedPath === '/'

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash) return

      const id = hash.replace('#', '')
      const target = document.getElementById(id)
      if (!target) return

      const headerOffset = 96
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: 'smooth',
      })
    }

    const rafId = window.requestAnimationFrame(scrollToHash)
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  if (!isHomeRoute) {
    return <NotFound />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Contact />
        <MembershipTerms />
      </main>

      <Footer />
    </div>
  )
}

export default App
