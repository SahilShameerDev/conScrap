import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <h3>Conscrap</h3>
              <p className={styles.tagline}>Build • Destroy • Rebuild</p>
            </div>
            <p className={styles.description}>
              Transforming construction waste into sustainable solutions across Kerala. 
              We're committed to creating a cleaner, greener future through innovative 
              recycling practices.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://x.com/conscrapin" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557C23.117 4.949 22.168 5.213 21.172 5.332C22.189 4.723 22.97 3.758 23.337 2.608C22.386 3.172 21.332 3.582 20.21 3.803C19.313 2.846 18.032 2.248 16.616 2.248C13.437 2.248 11.101 5.214 11.819 8.293C7.728 8.088 4.1 6.128 1.671 3.149C0.381 5.362 1.002 8.257 3.194 9.723C2.388 9.697 1.628 9.476 0.965 9.107C0.911 11.388 2.546 13.522 4.914 13.997C4.221 14.185 3.462 14.229 2.69 14.081C3.316 16.037 5.134 17.46 7.29 17.5C5.22 19.123 2.612 19.848 0 19.54C2.179 20.937 4.768 21.752 7.548 21.752C16.69 21.752 21.855 14.031 21.543 7.106C22.505 6.411 23.34 5.544 24 4.557Z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/con-scrap-130915371" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/conscrap_?igsh=MW51ZnJieXlzZmNmOQ==" className={styles.socialLink}>
                <svg width="734" height="734" viewBox="0 0 734 734" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M367 567C477.457 567 567 477.457 567 367C567 256.543 477.457 167 367 167C256.543 167 167 256.543 167 367C167 477.457 256.543 567 367 567ZM367 500.333C440.637 500.333 500.333 440.637 500.333 367C500.333 293.362 440.637 233.667 367 233.667C293.362 233.667 233.667 293.362 233.667 367C233.667 440.637 293.362 500.333 367 500.333Z" fill="white"/>
<path d="M567 133.667C548.59 133.667 533.667 148.591 533.667 167C533.667 185.409 548.59 200.333 567 200.333C585.41 200.333 600.333 185.409 600.333 167C600.333 148.591 585.41 133.667 567 133.667Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.132 109.535C0.333374 152.318 0.333374 208.323 0.333374 320.333V413.667C0.333374 525.677 0.333374 581.683 22.132 624.463C41.3067 662.097 71.9027 692.693 109.535 711.867C152.318 733.667 208.323 733.667 320.333 733.667H413.667C525.677 733.667 581.683 733.667 624.463 711.867C662.097 692.693 692.693 662.097 711.867 624.463C733.667 581.683 733.667 525.677 733.667 413.667V320.333C733.667 208.323 733.667 152.318 711.867 109.535C692.693 71.9027 662.097 41.3067 624.463 22.132C581.683 0.333374 525.677 0.333374 413.667 0.333374H320.333C208.323 0.333374 152.318 0.333374 109.535 22.132C71.9027 41.3067 41.3067 71.9027 22.132 109.535ZM413.667 67H320.333C263.228 67 224.408 67.052 194.403 69.5034C165.175 71.8914 150.228 76.2197 139.801 81.5324C114.713 94.3157 94.3157 114.713 81.5324 139.801C76.2197 150.228 71.8914 165.175 69.5034 194.403C67.052 224.408 67 263.228 67 320.333V413.667C67 470.773 67.052 509.59 69.5034 539.597C71.8914 568.827 76.2197 583.773 81.5324 594.2C94.3157 619.287 114.713 639.683 139.801 652.467C150.228 657.78 165.175 662.11 194.403 664.497C224.408 666.947 263.228 667 320.333 667H413.667C470.773 667 509.59 666.947 539.597 664.497C568.827 662.11 583.773 657.78 594.2 652.467C619.287 639.683 639.683 619.287 652.467 594.2C657.78 583.773 662.11 568.827 664.497 539.597C666.947 509.59 667 470.773 667 413.667V320.333C667 263.228 666.947 224.408 664.497 194.403C662.11 165.175 657.78 150.228 652.467 139.801C639.683 114.713 619.287 94.3157 594.2 81.5324C583.773 76.2197 568.827 71.8914 539.597 69.5034C509.59 67.052 470.773 67 413.667 67Z" fill="white"/>
</svg>

              </a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a href="#why-choose-us" onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</a></li>
              <li><a href="#process" onClick={() => scrollToSection('process')}>Our Process</a></li>
              <li><a href="#impact" onClick={() => scrollToSection('impact')}>Impact</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Our Process</h4>
            <ul className={styles.linkList}>
              <li><a href="#process">Demolition</a></li>
              <li><a href="#process">Collection</a></li>
              <li><a href="#process">Crushing</a></li>
              <li><a href="#process">Recycling</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                </svg>
                <span>Kochi, Kerala, India</span>
              </div>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                </svg>
                <span>+91 9876543210</span>
              </div>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
                <span>info@conscarp.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; 2024 Conscrap. All rights reserved.</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
