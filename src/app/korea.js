import styles from "./page.module.css";

export default function Korea() {
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
            <h1 className={styles.heading}>Korea</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/seoul.jpg" alt="Seoul" className={styles.cityImage} />
                    <h3>Seoul</h3>
                    <p>The capital city known for its historical landmarks and modern culture.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/busan.jpg" alt="Busan" className={styles.cityImage} />
                    <h3>Busan</h3>
                    <p>A city famous for its beaches and seafood.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/incheon.jpg" alt="Incheon" className={styles.cityImage} />
                    <h3>Incheon</h3>
                    <p>Known for its international airport and beautiful waterfront.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
