import styles from "./page.module.css";

export default function Chile() {
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
            <h1 className={styles.heading}>Chile</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/santiago.jpg" alt="Santiago" className={styles.cityImage} />
                    <h3>Santiago</h3>
                    <p>The capital, known for its stunning mountain backdrop and vibrant culture.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/valparaiso.jpg" alt="Valparaíso" className={styles.cityImage} />
                    <h3>Valparaíso</h3>
                    <p>A coastal city famous for its colorful hillside houses and artistic vibe.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/puertomontt.jpg" alt="Puerto Montt" className={styles.cityImage} />
                    <h3>Puerto Montt</h3>
                    <p>Known for its seafood, and beautiful lakes.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
