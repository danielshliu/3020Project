import styles from "./page.module.css";

export default function USA() {
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
            <h1 className={styles.heading}>United States</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/newyork.jpg" alt="New York" className={styles.cityImage} />
                    <h3>New York</h3>
                    <p>The city that never sleeps, famous for its skyline and diverse culture.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/losangeles.jpg" alt="Los Angeles" className={styles.cityImage} />
                    <h3>Los Angeles</h3>
                    <p>Known for Hollywood, beaches, and its iconic landmarks.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/chicago.jpg" alt="Chicago" className={styles.cityImage} />
                    <h3>Chicago</h3>
                    <p>Known as the Windy City, famous for its architecture, deep-dish pizza, and cultural institutions.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
