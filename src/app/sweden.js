import styles from "./page.module.css";

export default function Sweden() {
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
            <h1 className={styles.heading}>Sweden</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/stockholm.jpg" alt="Stockholm" className={styles.cityImage} />
                    <h3>Stockholm</h3>
                    <p>The capital city known for its beautiful architecture and modern design.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/gothenburg.jpg" alt="Gothenburg" className={styles.cityImage} />
                    <h3>Gothenburg</h3>
                    <p>Second largest city in Sweden, famous for its lush green parks and vibrant cultural life.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/malmo.jpg" alt="Malmo" className={styles.cityImage} />
                    <h3>Malmo</h3>
                    <p>A modern city known for its sustainable architecture and multicultural atmosphere.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
