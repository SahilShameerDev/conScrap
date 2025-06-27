import React from 'react'
import styles from './Impact.module.css'

const Impact = () => {
  const impactData = [
    {
      number: "2,500+",
      label: "Tons of Waste Recycled",
      description: "Construction waste diverted from landfills",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM8 21L9.5 16.5L14 18L9.5 19.5L8 21ZM16 3L17 7L21 8L17 9L16 13L15 9L11 8L15 7L16 3Z"/>
        </svg>
      )
    },
    {
      number: "85%",
      label: "Carbon Footprint Reduction",
      description: "Compared to traditional disposal methods",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.5 9 6.5C4 7.5 2 11.5 2 13.5C2 15.5 3.75 16.25 4.5 16.5C5.25 16.75 6 16.5 6.5 16C7 15.5 7.5 15 7.5 14C7.5 13 8 12.5 8.5 12.5S9.5 13 9.5 14C9.5 15 10 15.5 10.5 16C11 16.5 11.75 16.75 12.5 16.5C13.25 16.25 15 15.5 15 13.5C15 11.5 13 7.5 8 6.5C13 5.5 20 5 21 3C21 3 18 20 7 20C6.64 20 6.14 19.87 5.66 19.7L4.71 22L2.82 21.34C4.9 16.17 7 10 16 8H17Z"/>
        </svg>
      )
    },
    {
      number: "150+",
      label: "Projects Completed",
      description: "Successful waste management solutions delivered",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
        </svg>
      )
    },
    {
      number: "₹50L+",
      label: "Cost Savings Generated",
      description: "For clients through recycled materials",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 15H9C9 16.08 10.37 17 12 17C13.63 17 15 16.08 15 15C15 13.9 13.96 13.5 11.76 12.97C9.64 12.44 7 11.78 7 9C7 7.21 8.47 5.69 10.5 5.18V3H13.5V5.18C15.53 5.69 17 7.21 17 9H15C15 7.92 13.63 7 12 7C10.37 7 9 7.92 9 9C9 10.1 10.04 10.5 12.24 11.03C14.36 11.56 17 12.22 17 15C17 16.79 15.53 18.31 13.5 18.82V21H10.5V18.82C8.47 18.31 7 16.79 7 15Z"/>
        </svg>
      )
    }
  ]

  const benefits = [
    {
      title: "Environmental Protection",
      description: "Reducing landfill waste and protecting Kerala's natural beauty",
      icon: (
        <img style={{width:'60px'}} src="/leaf.png" alt="" />
      )
    },
    {
      title: "Economic Growth", 
      description: "Creating jobs and supporting local circular economy",
      icon: (
        <img style={{width:'60px'}} src="/case.png" alt="" />
      )
    },
    {
      title: "Resource Conservation",
      description: "Preserving natural resources by reusing construction materials",
      icon: (
        <img style={{width:'60px'}} src="/recycle.png" alt="" />
      )
    },
    {
      title: "Community Health",
      description: "Reducing pollution and improving air quality in Kerala",
      icon: (
        <img style={{width:'60px'}} src="/health.png" alt="" />
      )
    }
  ]

  return (
    <section id="impact" className={`${styles.impact} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our <span className="text-primary">Impact</span></h2>
          <p className={styles.sectionSubtitle}>
            Making a real difference in Kerala's construction industry and environment
          </p>
        </div>
        
        <div className={styles.impactGrid}>
          {impactData.map((item, index) => (
            <div key={index} className={styles.impactCard}>
              <div className={styles.impactIcon}>
                {item.icon}
              </div>
              <div className={styles.impactNumber}>{item.number}</div>
              <h3 className={styles.impactLabel}>{item.label}</h3>
              <p className={styles.impactDescription}>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.benefitsSection}>
          <h3 className={styles.benefitsTitle}>Why Conscrap Matters for Kerala</h3>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.testimonial}>
          <div className={styles.testimonialContent}>
            <div className={styles.quote}>
              "Conscrap has revolutionized how we handle construction waste in our projects. 
              Not only are we saving costs, but we're also contributing to a cleaner Kerala. 
              Their recycled materials are of excellent quality."
            </div>
            <div className={styles.author}>
              <div className={styles.authorInfo}>
                <strong>Rajesh Kumar</strong>
                <span>Construction Manager, Kochi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
