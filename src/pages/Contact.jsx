import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z" />
        </svg>
      ),
      title: "Location",
      info: "Kochi, Kerala, India",
      details: "Serving all districts of Kerala",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
        </svg>
      ),
      title: "Phone",
      info: "+91 9876543210",
      details: "Available 24/7 for emergencies",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
        </svg>
      ),
      title: "Email",
      info: "conscrapin@gmail.com",
      details: "Response within 24 hours",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM4 20H20V22H4V20Z" />
        </svg>
      ),
      title: "Operating Hours",
      info: "Mon - Sat: 8AM - 8PM",
      details: "Sunday: Emergency only",
    },
  ];

  return (
    <section id="contact" className={`${styles.contact} section bg-light`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Ready to transform your construction waste into valuable resources?
            Contact us today!
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoSubtitle}>
              Reach out to us for a free consultation and quote for your
              construction waste management needs.
            </p>

            <div className={styles.infoList}>
              {contactInfo.map((item, index) => (
                <div key={index} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{item.icon}</div>
                  <div className={styles.infoContent}>
                    <h4 className={styles.infoItemTitle}>{item.title}</h4>
                    <p className={styles.infoItemInfo}>{item.info}</p>
                    <span className={styles.infoItemDetails}>
                      {item.details}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socialLinks}>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.instagram.com/conscrap_?igsh=MW51ZnJieXlzZmNmOQ=="
                  className={styles.socialIcon}
                >
                  <svg
                    width="800"
                    height="800"
                    viewBox="0 0 800 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M400 600C510.457 600 600 510.457 600 400C600 289.543 510.457 200 400 200C289.543 200 200 289.543 200 400C200 510.457 289.543 600 400 600ZM400 533.333C473.637 533.333 533.333 473.637 533.333 400C533.333 326.362 473.637 266.667 400 266.667C326.362 266.667 266.667 326.362 266.667 400C266.667 473.637 326.362 533.333 400 533.333Z"
                      fill="#0F0F0F"
                    />
                    <path
                      d="M600 166.667C581.59 166.667 566.667 181.591 566.667 200C566.667 218.409 581.59 233.333 600 233.333C618.41 233.333 633.333 218.409 633.333 200C633.333 181.591 618.41 166.667 600 166.667Z"
                      fill="#0F0F0F"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M55.132 142.535C33.3334 185.318 33.3334 241.323 33.3334 353.333V446.667C33.3334 558.677 33.3334 614.683 55.132 657.463C74.3067 695.097 104.903 725.693 142.535 744.867C185.318 766.667 241.323 766.667 353.333 766.667H446.667C558.677 766.667 614.683 766.667 657.463 744.867C695.097 725.693 725.693 695.097 744.867 657.463C766.667 614.683 766.667 558.677 766.667 446.667V353.333C766.667 241.323 766.667 185.318 744.867 142.535C725.693 104.903 695.097 74.3067 657.463 55.132C614.683 33.3334 558.677 33.3334 446.667 33.3334H353.333C241.323 33.3334 185.318 33.3334 142.535 55.132C104.903 74.3067 74.3067 104.903 55.132 142.535ZM446.667 100H353.333C296.228 100 257.408 100.052 227.403 102.503C198.175 104.891 183.228 109.22 172.801 114.532C147.713 127.316 127.316 147.713 114.532 172.801C109.22 183.228 104.891 198.175 102.503 227.403C100.052 257.408 100 296.228 100 353.333V446.667C100 503.773 100.052 542.59 102.503 572.597C104.891 601.827 109.22 616.773 114.532 627.2C127.316 652.287 147.713 672.683 172.801 685.467C183.228 690.78 198.175 695.11 227.403 697.497C257.408 699.947 296.228 700 353.333 700H446.667C503.773 700 542.59 699.947 572.597 697.497C601.827 695.11 616.773 690.78 627.2 685.467C652.287 672.683 672.683 652.287 685.467 627.2C690.78 616.773 695.11 601.827 697.497 572.597C699.947 542.59 700 503.773 700 446.667V353.333C700 296.228 699.947 257.408 697.497 227.403C695.11 198.175 690.78 183.228 685.467 172.801C672.683 147.713 652.287 127.316 627.2 114.532C616.773 109.22 601.827 104.891 572.597 102.503C542.59 100.052 503.773 100 446.667 100Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/conscrapin"
                  className={styles.socialIcon}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/con-scrap-130915371"
                  className={styles.socialIcon}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h3 className={styles.formTitle}>Send us a Message</h3>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="demolition">Demolition Project</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
