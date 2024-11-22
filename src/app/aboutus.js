"use client";

import styles from "./page.module.css";

export default function aboutuspage(){

  return(
    <div className={styles.aboutUsBackground}>
    <h1 className={styles.heading}>About Us</h1>
      <nav className={styles.navbar}>

        {/* Logo aligned to the left */}
        <label className={styles.logo}>WanderSphere</label>
  
          {/* Navigation links */}
        <ul className={styles.navLinks}>
          <li>
            <a href="homepage.js" className={styles.navLink}>
              About Us
            </a>
          </li>
          <li>
            <a href="homepage.js" className={styles.navLink}>
              HomePage
            </a>
          </li>
          <li>
            <a href="countries.js" className={styles.navLink}>
              Countries
            </a>
          </li>
          <li>
            <a href="contactUs.js" className={styles.navLink}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

        {/* Company Intro Section */}
      <section>
          <div className={styles.introBox}>
            <h2>We are a company that prioritizes you.</h2>
              <p>
                Our mission at WanderSphere is to ensure we help you to the fullest in getting you to where you want to be. Whether that is going to
                the beatuful beaches in Bora Bora, hiking in New Zealand or exploring the fascinating culture of Japan, we have the services and expertise
                needed to get you to your destination with ease. We put high and our utomost value to our customers with our services and offering them a
                reasonably priced vacation plan. We also put emphasis in the enviornment by ensuring that we connect with airlines that have a commitment
                to protecting the enviornment, as well as using renewable technology for all operations at WanderSphere. We ensure to
                keep WanderSphere committed to these practices currently and into the future.
              </p>
          </div>

          <div className={styles.introBox}>
            <h2>Began in 2024.</h2>
            <p>
              Founded in November 2024 by a team of 3 enthusiasts, the company began as a advisory agent for travellers by helping direct them to
              vacation websites according to their needs. Over the years, the team has thought of a way to reach all target audiences that are looking
              to travel more broadly within North America and beyond and in a way that offers better alternatives compared to current offerings. The
              company formed to ensure customers get value for what they pay for and to have a better vacation experience.
            </p>
          </div>

          <div className={styles.introBox}>
            <h2>Our services stand out against competitors.</h2>
            <p>
              Compared to what other providers offer, our services ensure that you are able to book a vacation to your destination with a simple and
              customized process for you while ensuring you also save money financially with us. Our website ensures we find the best and fasest flight route
              connecting you to your destination at a very reasonable price compared to what other brands are charging their consumers. We also use
              this strategy in finding highly rated hotels and residences by connecting with other hotel and booking services. 
            </p>
          </div>

          <div className={styles.introBox}>
            <h2>Our team.</h2>
            <p>
              WanderSphere was founded in November 2024 by Daniel, Gurvir and Mel. They are 3 enthusiasts who are offering our customers better vacation
              travelling services by finding the lowest and most reasonbly priced flights and residencies at the destation. These ensure that customers
              have a memorable vacation experience where ever they go without the financial burders other companies place upon their customers.
            </p>
          </div>

          <div className={styles.introBox}>
            <h2>High customer satisfaction.</h2>
            <p>
              Because of our dedication and desire to help our customers, we have been rated as one of the best emerging sites
              for booking a vacation by RetireHappy and National Post.
            </p>
          </div>

      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>

  </div>

  );
}