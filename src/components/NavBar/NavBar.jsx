import React, { useState, useEffect } from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Trigger navbar reveal animation after component mounts
    const timer = setTimeout(() => {
      setIsRevealed(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isRevealed ? styles.revealed : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoImage}>
            {/* Placeholder for logo.jpg - replace with actual image */}
            <img className='logoImg' src="/logo.png" alt="Conscrap Logo" />
          </div>
          
        </div>
        
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#why-choose-us" onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</a>
          <a href="#process" onClick={() => scrollToSection('process')}>Process</a>
          <a href="#impact" onClick={() => scrollToSection('impact')}>Impact</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>

        <div className={styles.navActions}>
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Get Quote
          </button>
          <button 
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar