import styles from "./page.module.css";

export default function FrenchPolynesia() {
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
            <h1 className={styles.heading}>French Polynesia</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/papeete.jpg" alt="Papeete" className={styles.cityImage} />
                    <h3>Papeete</h3>
                    <p>The capital city, known for its markets and tropical vibe.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/moorea.jpg" alt="Moorea" className={styles.cityImage} />
                    <h3>Moorea</h3>
                    <p>A picturesque island known for its lagoons and volcanic mountains.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/bora-bora.jpg" alt="Bora Bora" className={styles.cityImage} />
                    <h3>Bora Bora</h3>
                    <p>Famous for its crystal-clear lagoons, coral reefs, and overwater bungalows.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
