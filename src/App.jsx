import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './pages/Hero'
import About from './pages/About'
import WhyChooseUs from './pages/WhyChooseUs'
import Process from './pages/Process'
import Impact from './pages/Impact'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      {isLoading && <Loader />}
      <NavBar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Process />
      <Impact />
      <Contact />
      <Footer />
    </div>
  )
}

export default App