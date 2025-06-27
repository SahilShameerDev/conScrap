import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={`${styles.about} section bg-light`}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>
              About <span className="text-primary">Us</span>
            </h2>
            <p className={styles.description}>
              With a strong foundation in sustainable construction and circular economy practices, 
              Conscrap is transforming how India handles demolition waste. Our experienced team of 
              demolition specialists, environmental engineers, and project coordinators work together 
              to recover, recycle, and repurpose materials — reducing landfill burden and supporting 
              green building initiatives. We ensure every project is executed responsibly, efficiently, 
              and in compliance with environmental standards.
            </p>
            
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                  </svg>
                </div>
                <div className={styles.highlightText}>
                  <h3>Sustainable Practices</h3>
                  <p>Committed to environmentally responsible demolition and recycling methods.</p>
                </div>
              </div>
              
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                  </svg>
                </div>
                <div className={styles.highlightText}>
                  <h3>Expert Team</h3>
                  <p>Experienced demolition specialists and environmental engineers.</p>
                </div>
              </div>
              
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7V9H9V11ZM13 15H11V13H13V15ZM15 11H13V9H15V11ZM17 15H15V13H17V15ZM19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"/>
                  </svg>
                </div>
                <div className={styles.highlightText}>
                  <h3>Compliance Focused</h3>
                  <p>All projects executed in compliance with environmental standards.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.aboutImage}>
            <div className={styles.imageCard}>
              <div className={styles.circularEconomy}>
                <svg viewBox="0 0 200 200" className={styles.circularGraphic}>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary-color)" />
                      <stop offset="100%" stopColor="var(--gray-600)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Circular arrow representing circular economy */}
                  <path d="M100 30 A70 70 0 1 1 99 30" stroke="url(#gradient1)" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <path d="M85 25 L100 30 L90 40" stroke="url(#gradient1)" strokeWidth="4" fill="none" strokeLinecap="round" />
                  
                  {/* Icons in circle */}
                  <circle cx="100" cy="50" r="8" fill="var(--primary-color)" />
                  <circle cx="150" cy="100" r="8" fill="var(--gray-600)" />
                  <circle cx="100" cy="150" r="8" fill="var(--primary-color)" />
                  <circle cx="50" cy="100" r="8" fill="var(--gray-600)" />
                  
                  {/* Center icon */}
                  <circle cx="100" cy="100" r="20" fill="var(--primary-color)" />
                  <text x="100" y="107" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">♻</text>
                </svg>
              </div>
              
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>100%</span>
                  <span className={styles.statLabel}>Compliance</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>Kerala</span>
                  <span className={styles.statLabel}>Wide Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About