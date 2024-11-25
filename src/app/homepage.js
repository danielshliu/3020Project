
import styles from "./page.module.css";
import Link from 'react';

import AboutUs from '/aboutus';

export default function homepage(){

    const Component = () = <a>AboutUs</a>




    return (
         <div className = {styles.homepageBackground}>
                <nav className={styles.navbar}>
        {/* Logo aligned to the left */}
        <label className={styles.logo}>WanderSphere</label>
  
           {/* Navigation links */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="aboutus.js" className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="homepage.js" className={styles.navLink}>
              HomePage
            </Link>
          </li>
          <li>
            <Link href="countries.js" className={styles.navLink}>
              Countries
            </Link>
          </li>
          <li>
            <a href="contactUs.js" className={styles.navLink}>
              Contact Us
            </a>
          </li>
          </ul>
        </nav>
            <h1 className = {styles.heading}>Travel the World with WanderSphere!</h1>
            <p className = {styles.subheading}>
                Click on a continent to start your adventure!
            </p>

            <div className={styles.continentGrid}>
        {/* Africa */}
        <div className={styles.continentCard}>
          <Link href="/africa">
            
              <img src="/africa.jpg" alt="Africa" className={styles.continentImage} />
              <h3>Africa</h3>
          </Link>
        </div>

        {/* Asia */}
        <div className={styles.continentCard}>
          <Link href="/asia">
              <img src="/asia1.png" alt="Asia" className={styles.continentImage} />
              <h3>Asia</h3>
            </Link>
        </div>

        {/* Europe */}
        <div className={styles.continentCard}>
          <Link href="/europe">      
              <img src="/europe.png" alt="Europe" className={styles.continentImage} />
              <h3>Europe</h3>
            </Link>
        </div>

        {/* North America */}
        <div className={styles.continentCard}>
          <Link href="/north-america">
              <img src="/northamerica.png" alt="North America" className={styles.continentImage} />
              <h3>North America</h3>
            </Link>
        </div>

        {/* South America */}
        <div className={styles.continentCard}>
          <Link href="/south-america">
              <img src="/southamerica.png" alt="South America" className={styles.continentImage} />
              <h3>South America</h3>
            </Link>
        </div>

        {/* Oceania */}
        <div className={styles.continentCard}>
          <Link href="/oceania">
              <img src="/oceania.jpg" alt="Oceania" className={styles.continentImage} />
              <h3>Oceania</h3>
            </Link>
        </div>
      </div>
   

      <footer className = {styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
      </div>
    );
}