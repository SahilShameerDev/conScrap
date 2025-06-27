import React from 'react'
import styles from './Services.module.css'

const Services = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 15L13 9L15 7L21 13V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V4C3 2.9 3.9 2 5 2H19C20.1 2 21 2.9 21 4V11H19V15ZM15 9L13 7L7 13L9 15L15 9Z"/>
        </svg>
      ),
      title: "Waste Collection & Transport",
      description: "Professional collection and transportation of construction and demolition waste from your site to our processing facility.",
      features: ["On-site pickup", "Specialized vehicles", "Scheduled collections", "Safe handling"]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 6L14.5 11H9.5L12 6ZM6 14H18V16H6V14ZM6 17H18V19H6V17Z"/>
        </svg>
      ),
      title: "Material Sorting & Processing",
      description: "Advanced sorting and processing techniques to separate and prepare materials for recycling into new construction products.",
      features: ["Automated sorting", "Quality control", "Material testing", "Contamination removal"]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM8 21L9.5 16.5L14 18L9.5 19.5L8 21ZM16 3L17 7L21 8L17 9L16 13L15 9L11 8L15 7L16 3Z"/>
        </svg>
      ),
      title: "Recycled Material Supply",
      description: "High-quality recycled construction materials including aggregates, bricks, and concrete blocks for your new projects.",
      features: ["Certified quality", "Competitive pricing", "Bulk supply", "Custom specifications"]
    }
  ]

  return (
    <section id="services" className={`${styles.services} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our <span className="text-primary">Services</span></h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive construction waste management solutions for a sustainable future
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h3>Ready to Transform Your Construction Waste?</h3>
            <p>Join the sustainable construction revolution in Kerala. Get started with ConsCarp today!</p>
            <button className="btn btn-primary">Get Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
