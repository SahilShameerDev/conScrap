import React, { useState, useEffect } from 'react'
import styles from './Impact.module.css'

const Impact = () => {
  const impactData = [
    {
      number: "2,500+",
      label: "Tons of Waste Recycled",
      description: "Construction waste diverted from landfills",
      icon: (
        <svg width="367" height="367" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="83.5" cy="83.5" r="83.5" fill="#1B1B1B"/>
<path d="M72.1244 34C66.9994 34.3047 63.3822 36.1172 61.3744 39.4375L48.1869 62.3125L56.9994 67.375L34.3119 70.1875L41.2494 74.1875L35.1869 84.5C33.9134 86.7031 33.1791 91.6406 35.5619 95.25C36.5072 96.6797 39.5541 102.133 42.2494 106.938C44.5775 111.086 46.7572 114.992 47.7494 116.625C48.9056 118.195 50.0462 119.742 50.1869 119.938C50.1947 119.938 47.6322 115.633 52.1869 107.75L63.9994 87.3125L70.9369 91.3125L62.0619 70.3125L70.8744 75.375L89.7494 42.6875C93.5697 35.5547 96.6244 34.3203 97.3119 34.125C97.6556 34.125 97.9369 34.125 98.2494 34.125C97.9837 34.1172 97.7103 34.0547 97.4369 34.0625C97.2728 34.0625 97.1009 34.0547 96.9369 34.0625C94.1478 34.1172 89.3275 34.1016 83.4994 34.0625C80.0384 34.0391 76.2416 34.0078 72.1244 34ZM99.9369 34.3125C98.7416 34.8906 96.1556 36.7891 92.9994 42.6875L85.7494 55.25L89.9994 62.6875L83.0619 66.75L105.687 69.5L96.8744 74.5625L108.312 94.375H123.187C129.445 94.375 132.554 92.3594 133.874 91.0625C134.242 88.6094 133.867 86.3359 132.749 84.3125L119.562 61.5L110.749 66.5625L119.687 45.5625L112.749 49.5625L106.812 39.1875C105.804 37.4375 103.156 35.0703 99.9369 34.3125ZM98.3119 89.4375L84.5619 107.688V97.5H61.6869L54.2494 110.375C51.1244 115.797 51.3509 119.516 51.8119 121.312C53.7572 122.859 55.8744 123.703 58.1869 123.75H84.5619V113.5L98.3119 131.75V123.75L110.249 123.812C112.796 123.812 117.437 122.062 119.374 118.188C120.14 116.656 123.374 111.234 126.187 106.5C128.617 102.406 130.89 98.5547 131.812 96.875C132.601 95.0859 133.335 93.3438 133.437 93.125C133.437 93.125 131.038 97.5 121.937 97.5H98.3119V89.4375Z" fill="white"/>
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

  const testimonials = [
    {
      quote: "Conscrap has revolutionized how we handle construction waste in our projects. Not only are we saving costs, but we're also contributing to a cleaner Kerala. Their recycled materials are of excellent quality.",
      author: "Rajesh Kumar",
      position: "Construction Manager, Kochi",
      company: "Metro Construction Ltd."
    },
    {
      quote: "Working with Conscrap has been a game-changer for our sustainability goals. They've helped us achieve zero waste to landfill on three major projects. Highly professional team!",
      author: "Priya Nair",
      position: "Project Director",
      company: "Green Build Solutions"
    },
    {
      quote: "The quality of recycled aggregates from Conscrap exceeds our expectations. We've saved over ₹15 lakhs on our last project while meeting all environmental compliance requirements.",
      author: "Mohammed Ashraf",
      position: "Site Engineer",
      company: "Skyline Developers"
    },
    {
      quote: "Conscrap's waste management solutions are top-notch. Their team is responsive, professional, and truly committed to environmental sustainability. A reliable partner for any construction project.",
      author: "Dr. Sunitha Menon",
      position: "Environmental Consultant",
      company: "EcoVision Kerala"
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

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
        
        <div className={styles.testimonialSection}>
          <h3 className={styles.testimonialsTitle}>What Our Clients Say</h3>
          <div className={styles.testimonialCarousel}>
            <button 
              className={`${styles.carouselBtn} ${styles.prevBtn}`}
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"/>
              </svg>
            </button>
            
            <div className={styles.testimonialWrapper}>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <div className={styles.quote}>
                    "{testimonials[currentTestimonial].quote}"
                  </div>
                  <div className={styles.author}>
                    <div className={styles.authorInfo}>
                      <strong>{testimonials[currentTestimonial].author}</strong>
                      <span>{testimonials[currentTestimonial].position}</span>
                      <span className={styles.company}>{testimonials[currentTestimonial].company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className={`${styles.carouselBtn} ${styles.nextBtn}`}
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
              </svg>
            </button>
          </div>
          
          <div className={styles.carouselDots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentTestimonial ? styles.activeDot : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
