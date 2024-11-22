import styles from "./page.module.css";

export default function Japan() {
    return (
        <div className={styles.cityBackground}>
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
            <h1 className={styles.heading}>Japan</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/tokyo.jpg" alt="Tokyo" className={styles.cityImage} />
                    <h3>Tokyo</h3>
                    <p>The capital city blending tradition and modernity.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/kyoto.jpg" alt="Kyoto" className={styles.cityImage} />
                    <h3>Kyoto</h3>
                    <p>Known for its classical Buddhist temples and gardens.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/osaka.jpg" alt="Osaka" className={styles.cityImage} />
                    <h3>Osaka</h3>
                    <p>Famous for its modern architecture and street food scene.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
