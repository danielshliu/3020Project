import styles from "./page.module.css";

export default function Argentina() {
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
            <h1 className={styles.heading}>Argentina</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/buenosaires.jpg" alt="Buenos Aires" className={styles.cityImage} />
                    <h3>Buenos Aires</h3>
                    <p>Argentina's capital, famous for its European-style architecture and music.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/cordoba.jpg" alt="Córdoba" className={styles.cityImage} />
                    <h3>Córdoba</h3>
                    <p>Known for its colonial buildings, universities, and vibrant student culture.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/mendoza.jpg" alt="Mendoza" className={styles.cityImage} />
                    <h3>Mendoza</h3>
                    <p>The center of Argentina's wine industry, surrounded by the Andes Mountains.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>   
    );
}
