import React from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Environmentally Responsible & Government-Aligned",
      description:
        "Our practices align with government environmental policies and sustainability goals, ensuring compliance and contributing to national green initiatives.",
      icon: (
        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7042 0.422033C23.4612 -0.120501 22.7667 -0.142203 22.4759 0.36995C21.1304 2.70936 18.7216 4.16769 15.9698 4.16769H12.4976C7.89693 4.16769 4.16429 7.90033 4.16429 12.501C4.16429 12.8048 4.19901 13.0956 4.2294 13.3908C6.99849 11.4073 10.9959 9.72325 16.6643 9.72325C17.0462 9.72325 17.3587 10.0357 17.3587 10.4177C17.3587 10.7996 17.0462 11.1121 16.6643 11.1121C5.75283 11.1121 1.1261 17.8005 0.101792 20.3135C-0.184666 21.021 0.153875 21.8283 0.86134 22.1191C1.57315 22.4142 2.38044 22.0713 2.67558 21.3682C2.74068 21.212 3.58269 19.2892 5.79624 17.4359C7.20249 19.3413 9.8761 21.1599 13.3874 20.7866C20.2016 20.2918 24.9976 14.1807 24.9976 6.69808C24.9976 4.51926 24.5289 2.26231 23.7042 0.422033Z" fill="white"/>
</svg>

      ),
    },
    {
      title: "End to End Waste Management Demolition to Recycling",
      description:
        "Complete lifecycle management from initial demolition planning through final material recycling, providing seamless service continuity.",
      icon: (
        <svg width="101" height="98" viewBox="0 0 101 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.1244 0C32.9994 0.304688 29.3822 2.11719 27.3744 5.4375L14.1869 28.3125L22.9994 33.375L0.311868 36.1875L7.24937 40.1875L1.18687 50.5C-0.0865698 52.7031 -0.820944 57.6406 1.56187 61.25C2.50718 62.6797 5.55406 68.1328 8.24937 72.9375C10.5775 77.0859 12.7572 80.9922 13.7494 82.625C14.9056 84.1953 16.0462 85.7422 16.1869 85.9375C16.1947 85.9375 13.6322 81.6328 18.1869 73.75L29.9994 53.3125L36.9369 57.3125L28.0619 36.3125L36.8744 41.375L55.7494 8.6875C59.5697 1.55469 62.6244 0.320312 63.3119 0.125C63.6556 0.125 63.9369 0.125 64.2494 0.125C63.9837 0.117188 63.7103 0.054688 63.4369 0.0625C63.2728 0.0625 63.1009 0.054688 62.9369 0.0625C60.1478 0.117188 55.3275 0.101562 49.4994 0.0625C46.0384 0.039062 42.2416 0.007812 38.1244 0ZM65.9369 0.3125C64.7416 0.890626 62.1556 2.78906 58.9994 8.6875L51.7494 21.25L55.9994 28.6875L49.0619 32.75L71.6869 35.5L62.8744 40.5625L74.3119 60.375H89.1869C95.4447 60.375 98.5541 58.3594 99.8744 57.0625C100.242 54.6094 99.8666 52.3359 98.7494 50.3125L85.5619 27.5L76.7494 32.5625L85.6869 11.5625L78.7494 15.5625L72.8119 5.1875C71.8041 3.4375 69.1556 1.07031 65.9369 0.3125ZM64.3119 55.4375L50.5619 73.6875V63.5H27.6869L20.2494 76.375C17.1244 81.7969 17.3509 85.5156 17.8119 87.3125C19.7572 88.8594 21.8744 89.7031 24.1869 89.75H50.5619V79.5L64.3119 97.75V89.75L76.2494 89.8125C78.7962 89.8125 83.4369 88.0625 85.3744 84.1875C86.14 82.6562 89.3744 77.2344 92.1869 72.5C94.6166 68.4062 96.89 64.5547 97.8119 62.875C98.6009 61.0859 99.3353 59.3438 99.4369 59.125C99.4369 59.125 97.0384 63.5 87.9369 63.5H64.3119V55.4375Z" fill="white"/>
</svg>

      ),
    },
    {
      title: "Cost-Efficient Solutions with Measurable Impact",
      description:
        "Proven cost savings through efficient processes and measurable environmental impact metrics that demonstrate real value to your projects.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 15H9C9 16.08 10.37 17 12 17C13.63 17 15 16.08 15 15C15 13.9 13.96 13.5 11.76 12.97C9.64 12.44 7 11.78 7 9C7 7.21 8.47 5.69 10.5 5.18V3H13.5V5.18C15.53 5.69 17 7.21 17 9H15C15 7.92 13.63 7 12 7C10.37 7 9 7.92 9 9C9 10.1 10.04 10.5 12.24 11.03C14.36 11.56 17 12.22 17 15C17 16.79 15.53 18.31 13.5 18.82V21H10.5V18.82C8.47 18.31 7 16.79 7 15Z" />
        </svg>
      ),
    },
    {
      title: "Committed to Safety, Compliance & Circular Innovation",
      description:
        "Unwavering commitment to safety standards, regulatory compliance, and innovative circular economy solutions that drive industry transformation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-choose-us" className={`${styles.whyChooseUs} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Why Choose <span className="text-primary">Us?</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Discover what sets Conscrap apart in the construction waste
            management industry
          </p>
        </div>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.cardHeader}>
                <div className={styles.reasonIcon}>{reason.icon}</div>
                <div className={styles.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
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
            <p>
              Join the circular economy revolution with Conscrap's comprehensive
              waste management solutions.
            </p>
            <a href="#contact">
              <button className="btn btn-primary">Get Started Today</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
