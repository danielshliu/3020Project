import styles from "./page.module.css";

export default function NewZealand() {
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
            <h1 className={styles.heading}>New Zealand</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/auckland.jpg" alt="Auckland" className={styles.cityImage} />
                    <h3>Auckland</h3>
                    <p>The largest city, known for its harbors and vibrant culture.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/wellington.jpg" alt="Wellington" className={styles.cityImage} />
                    <h3>Wellington</h3>
                    <p>The capital city, famous for its film industry and stunning natural scenery.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/christchurch.jpg" alt="Christchurch" className={styles.cityImage} />
                    <h3>Christchurch</h3>
                    <p>Known as the “Garden City,” offering beautiful parks and botanical gardens.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
