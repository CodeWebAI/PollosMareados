import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
