import styles from "./page.module.css";

export default function Australia() {
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
            <h1 className={styles.heading}>Australia</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/sydney.jpg" alt="Sydney" className={styles.cityImage} />
                    <h3>Sydney</h3>
                    <p>Known for its iconic Opera House and stunning harbor views.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/melbourne.jpg" alt="Melbourne" className={styles.cityImage} />
                    <h3>Melbourne</h3>
                    <p>Famous for its vibrant arts scene, coffee culture, and laneways.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/brisbane.jpg" alt="Brisbane" className={styles.cityImage} />
                    <h3>Brisbane</h3>
                    <p>A sunny city known for its outdoor lifestyle and nearby beaches.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
