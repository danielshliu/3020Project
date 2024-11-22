import styles from "./page.module.css";

export default function Switzerland() {
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
            <h1 className={styles.heading}>Switzerland</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/zurich.jpg" alt="Zurich" className={styles.cityImage} />
                    <h3>Zurich</h3>
                    <p>Known for its stunning lakeside setting and vibrant cultural scene.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/geneva.jpg" alt="Geneva" className={styles.cityImage} />
                    <h3>Geneva</h3>
                    <p>Called the capital of peace, famous for its beautiful lakeside views.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/lucerne.jpg" alt="Lucerne" className={styles.cityImage} />
                    <h3>Lucerne</h3>
                    <p>A town surrounded by mountains and pristine lakes.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
