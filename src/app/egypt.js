import styles from "./page.module.css";

export default function Egypt() {
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
            <h1 className={styles.heading}>Egypt</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/cairo.jpg" alt="Cairo" className={styles.cityImage} />
                    <h3>Cairo</h3>
                    <p>Home to the famous Pyramids of Giza.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/alexandria.jpg" alt="Alexandria" className={styles.cityImage} />
                    <h3>Alexandria</h3>
                    <p>Known for its Mediterranean coastline and ancient history.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/luxor.jpg" alt="Luxor" className={styles.cityImage} />
                    <h3>Luxor</h3>
                    <p>Known for its oldest and most ancient Egyption sites.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}