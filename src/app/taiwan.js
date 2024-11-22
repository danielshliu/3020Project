import styles from "../../page.module.css";

export default function Taiwan() {
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
            <h1 className={styles.heading}>Taiwan</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/taipei.jpg" alt="Taipei" className={styles.cityImage} />
                    <h3>Taipei</h3>
                    <p>The capital city, famous for its skyline including Taipei 101.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/kaohsiung.jpg" alt="Kaohsiung" className={styles.cityImage} />
                    <h3>Kaohsiung</h3>
                    <p>A city with a vibrant arts scene and night markets.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/taichung.jpg" alt="Taichung" className={styles.cityImage} />
                    <h3>Taichung</h3>
                    <p>Known for its cultural attractions, parks, and lively night markets.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
