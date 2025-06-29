import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Preload the hero background image
    const img = new Image()
    img.src = '/hero_bg.jpg'
    
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

return (
    <section id="home" className={`${styles.hero} ${isVisible ? styles.revealed : ''}`} style={{ color: 'white' }}>
        <div className={styles.heroBackground}>
            <img 
                src="/hero_bg.jpg" 
                className='heroBg' 
                alt="" 
                srcset="" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            
            <div className={styles.overlay}></div>
        </div>
        
        <div className="container">
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <div className={styles.heroSlogan}>
                        <span className={styles.sloganPart}>Build.</span>
                        <span className={styles.sloganPart}>Unbuild.</span>
                        <span className={styles.sloganPart}>Rebuild.</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Transforming <span className={styles.highlight}>Construction Waste</span> 
                        <br />Into Sustainable Solutions
                    </h1>
                    <p className={styles.heroSubtitle}>
                        We collect, transport, and recycle construction waste across India, 
                        turning demolished building materials into valuable resources for new construction projects.
                    </p>
                    <div className={styles.heroStats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>5,000+</span>
                            <span className={styles.statLabel}>Tons Recycled</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>95%</span>
                            <span className={styles.statLabel}>Waste Diverted</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>200+</span>
                            <span className={styles.statLabel}>Projects Completed</span>
                        </div>
                    </div>
                    <div className={styles.heroActions}>
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            Get Free Quote
                        </button>
                        <button className="btn btn-primary" onClick={scrollToAbout}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className={styles.scrollIndicator}>
            <div className={styles.mouse}>
                <div className={styles.wheel}></div>
            </div>
            <span>Scroll to explore</span>
        </div>
    </section>
)
}

export default Hero