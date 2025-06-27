import React from 'react'
import styles from './Process.module.css'

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Demolition",
      description: "Safe and efficient demolition of structures using advanced techniques and equipment, ensuring minimal environmental impact and maximum material recovery.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H17V17H7V15Z"/>
        </svg>
      )
    },
    {
      number: "02", 
      title: "Collection",
      description: "Systematic collection and sorting of demolition waste materials using specialized vehicles and trained personnel to ensure proper categorization.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 18.5C18.83 18.5 19.5 17.83 19.5 17S18.83 15.5 18 15.5 16.5 16.17 16.5 17 17.17 18.5 18 18.5ZM19.5 9.5H17V12H21.46L19.5 9.5ZM6 18.5C6.83 18.5 7.5 17.83 7.5 17S6.83 15.5 6 15.5 4.5 16.17 4.5 17 5.17 18.5 6 18.5ZM20 8L23 12V17H21C21 18.66 19.66 20 18 20S15 18.66 15 17H9C9 18.66 7.66 20 6 20S3 18.66 3 17H1V15C1 13.89 1.89 13 3 13H4V8C4 6.89 4.89 6 6 6H17C18.11 6 19 6.89 19 8H20Z"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Crushing",
      description: "High-powered crushing and processing of collected materials using state-of-the-art machinery to transform waste into reusable construction materials.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
        </svg>
      )
    },
    {
      number: "04",
      title: "Recycling",
      description: "Final processing and quality control of crushed materials to produce certified recycled construction materials ready for distribution and reuse.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="process" className={`${styles.process} section bg-light`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our <span className="text-primary">Process</span></h2>
          <p className={styles.sectionSubtitle}>
            A systematic approach to transforming construction waste into valuable resources
          </p>
        </div>
        
        <div className={styles.processFlow}>
          {processSteps.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>
                {step.icon}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className={styles.stepConnector}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className={styles.processStats}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
              </svg>
            </div>
            <div className={styles.statContent}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Processing Operation</span>
            </div>
          </div>
          
          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11H7V9H9V11ZM13 15H11V13H13V15ZM15 11H13V9H15V11ZM17 15H15V13H17V15ZM19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"/>
              </svg>
            </div>
            <div className={styles.statContent}>
              <span className={styles.statNumber}>3-5</span>
              <span className={styles.statLabel}>Days Processing Time</span>
            </div>
          </div>
          
          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
              </svg>
            </div>
            <div className={styles.statContent}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Quality Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
