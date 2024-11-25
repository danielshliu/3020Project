import styles from "./page.module.css";

export default function countries(){

    return(
        <div className={styles.AsiaBackground}>
      <h1 className={styles.heading}>Asia</h1>
      <nav className={styles.navbar}>
        {/* Logo aligned to the left */}
        <label className={styles.logo}>WanderSphere</label>
  
           {/* Navigation links */}
        <ul className={styles.navLinks}>
          <li>
            <a href="homepage.js" className={styles.navLink}>
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

        <div className={styles.countryDisplay}>
      {/* Japan */}
      <div className={styles.countryCard}>
        <img
          src="/JapanFlag.png"
          alt="Japan Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Japan | 日本</p>
        <button>Learn More</button>
      </div>

      {/* South Korea */}
      <div className={styles.countryCard}>
        <img
          src="/SouthKoreaFlag.png"
          alt="South Korea Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>South Korea | 대한민국</p>
        <button>Learn More</button>
      </div>

      {/* Taiwan */}
      <div className={styles.countryCard}>
        <img
          src="/TaiwanFlag.png"
          alt="Taiwan Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Taiwan | 中華民國</p>
        <button>Learn More</button>
      </div>
    </div>

        <div className={styles.selectDestinationMessageBox}>
        <h2>Select a destination.</h2>
      </div>

        {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
        </div>
    );

}