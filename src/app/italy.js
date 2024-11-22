import styles from "./page.module.css";

export default function Italy() {
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
            <h1 className={styles.heading}>Italy</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/rome.jpg" alt="Rome" className={styles.cityImage} />
                    <h3>Rome</h3>
                    <p>The capital city known for its ancient ruins, like the Colosseum and Roman Forum.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/milan.jpg" alt="Milan" className={styles.cityImage} />
                    <h3>Milan</h3>
                    <p>Known for its fashion, art, and the iconic cathedral, Duomo di Milano.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/florence.jpg" alt="Florence" className={styles.cityImage} />
                    <h3>Florence</h3>
                    <p>A city of Renaissance art and architecture.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
