import styles from "./page.module.css";

export default function Mexico() {
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
            <h1 className={styles.heading}>Mexico</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/mexicocity.jpg" alt="Mexico City" className={styles.cityImage} />
                    <h3>Mexico City</h3>
                    <p>The capital city, known for its vibrant culture, history, and delicious cuisine.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/guadalajara.jpg" alt="Guadalajara" className={styles.cityImage} />
                    <h3>Guadalajara</h3>
                    <p>Known for its mariachi music, tequila, and historic architecture.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/cancun.jpg" alt="Cancun" className={styles.cityImage} />
                    <h3>Cancun</h3>
                    <p>A popular resort city, famous for its beaches and vibrant nightlife.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
