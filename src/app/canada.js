import styles from "./page.module.css";

export default function Canada() {
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
            <h1 className={styles.heading}>Canada</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/toronto.jpg" alt="Toronto" className={styles.cityImage} />
                    <h3>Toronto</h3>
                    <p>The largest city in Canada, known for its iconic CN Tower and multiculturalism.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/vancouver.jpg" alt="Vancouver" className={styles.cityImage} />
                    <h3>Vancouver</h3>
                    <p>A coastal city famous for its scenic beauty and outdoor activities.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/montreal.jpg" alt="Montreal" className={styles.cityImage} />
                    <h3>Montreal</h3>
                    <p>Known for its French heritage, festivals, and vibrant arts scene.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
