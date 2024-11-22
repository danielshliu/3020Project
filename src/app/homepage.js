
import styles from "./page.module.css";

export default function homepage(){
    return (
         <div className = {styles.homepageBackground}>
                <nav className={styles.navbar}>
        {/* Logo aligned to the left */}
        <label className={styles.logo}>WanderSphere</label>
  
           {/* Navigation links */}
        <ul className={styles.navLinks}>
          <li>
            <a href="aboutus.js" className={styles.navLink}>
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
            <h1 className = {styles.heading}>Travel the World with WanderSphere!</h1>
            <p className = {styles.subheading}>
                Click on a continent to start your adventure!
            </p>

            <div className={styles.continentGrid}>
        {/* Africa */}
        <div className={styles.continentCard}>
          <a href="/africa">
            
              <img src="/africa.jpg" alt="Africa" className={styles.continentImage} />
              <h3>Africa</h3>
          </a>
        </div>

        {/* Asia */}
        <div className={styles.continentCard}>
          <a href="/asia">
              <img src="/asia1.png" alt="Asia" className={styles.continentImage} />
              <h3>Asia</h3>
            </a>
        </div>

        {/* Europe */}
        <div className={styles.continentCard}>
          <a href="/europe">      
              <img src="/europe.png" alt="Europe" className={styles.continentImage} />
              <h3>Europe</h3>
            </a>
        </div>

        {/* North America */}
        <div className={styles.continentCard}>
          <a href="/north-america">
              <img src="/northamerica.png" alt="North America" className={styles.continentImage} />
              <h3>North America</h3>
            </a>
        </div>

        {/* South America */}
        <div className={styles.continentCard}>
          <a href="/south-america">
              <img src="/southamerica.png" alt="South America" className={styles.continentImage} />
              <h3>South America</h3>
            </a>
        </div>

        {/* Oceania */}
        <div className={styles.continentCard}>
          <a href="/oceania">
              <img src="/oceania.jpg" alt="Oceania" className={styles.continentImage} />
              <h3>Oceania</h3>
            </a>
        </div>
      </div>
   

      <footer className = {styles.footer}>
      <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
      </div>
    );
}