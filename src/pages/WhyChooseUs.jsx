import React from 'react'
import styles from './WhyChooseUs.module.css'

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Environmentally Responsible & Government-Aligned",
      description: "Our practices align with government environmental policies and sustainability goals, ensuring compliance and contributing to national green initiatives.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.5 9 6.5C4 7.5 2 11.5 2 13.5C2 15.5 3.75 16.25 4.5 16.5C5.25 16.75 6 16.5 6.5 16C7 15.5 7.5 15 7.5 14C7.5 13 8 12.5 8.5 12.5S9.5 13 9.5 14C9.5 15 10 15.5 10.5 16C11 16.5 11.75 16.75 12.5 16.5C13.25 16.25 15 15.5 15 13.5C15 11.5 13 7.5 8 6.5C13 5.5 20 5 21 3C21 3 18 20 7 20C6.64 20 6.14 19.87 5.66 19.7L4.71 22L2.82 21.34C4.9 16.17 7 10 16 8H17Z"/>
        </svg>
      )
    },
    {
      title: "End to End Waste Management Demolition to Recycling",
      description: "Complete lifecycle management from initial demolition planning through final material recycling, providing seamless service continuity.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM8 21L9.5 16.5L14 18L9.5 19.5L8 21ZM16 3L17 7L21 8L17 9L16 13L15 9L11 8L15 7L16 3Z"/>
        </svg>
      )
    },
    {
      title: "Cost-Efficient Solutions with Measurable Impact",
      description: "Proven cost savings through efficient processes and measurable environmental impact metrics that demonstrate real value to your projects.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 15H9C9 16.08 10.37 17 12 17C13.63 17 15 16.08 15 15C15 13.9 13.96 13.5 11.76 12.97C9.64 12.44 7 11.78 7 9C7 7.21 8.47 5.69 10.5 5.18V3H13.5V5.18C15.53 5.69 17 7.21 17 9H15C15 7.92 13.63 7 12 7C10.37 7 9 7.92 9 9C9 10.1 10.04 10.5 12.24 11.03C14.36 11.56 17 12.22 17 15C17 16.79 15.53 18.31 13.5 18.82V21H10.5V18.82C8.47 18.31 7 16.79 7 15Z"/>
        </svg>
      )
    },
    {
      title: "Committed to Safety, Compliance & Circular Innovation",
      description: "Unwavering commitment to safety standards, regulatory compliance, and innovative circular economy solutions that drive industry transformation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="why-choose-us" className={`${styles.whyChooseUs} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Why Choose <span className="text-primary">Us?</span></h2>
          <p className={styles.sectionSubtitle}>
            Discover what sets Conscrap apart in the construction waste management industry
          </p>
        </div>
        
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.cardHeader}>
                <div className={styles.reasonIcon}>
                  {reason.icon}
                </div>
                <div className={styles.cardNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.bottomCta}>
          <div className={styles.ctaContent}>
            <h3>Ready to make a sustainable choice?</h3>
            <p>Join the circular economy revolution with Conscrap's comprehensive waste management solutions.</p>
            <a href="#contact"><button className="btn btn-primary">Get Started Today</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
