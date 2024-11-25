import styles from "./page.module.css";

export default function countries(){

    return(
        <div className={styles.AfricaBackground}>
      <h1 className={styles.heading}>Africa</h1>
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
      {/* Egypt */}
      <div className={styles.countryCard}>
        <img
          src="/EgyptFlag.png"
          alt="Egypt Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Egypt | جمهورية مصر العربية</p>
        <button>Learn More</button>
      </div>

      {/* Seychelles */}
      <div className={styles.countryCard}>
        <img
          src="/SeychellesFlag.png"
          alt="Seychelles Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Seychelles | République des Seychelles, Repiblik Sesel</p>
        <button>Learn More</button>
      </div>

      {/* South Africa */}
      <div className={styles.countryCard}>
        <img
          src="/SouthAfricaFlag.png"
          alt="South Africa Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>South Africa</p>
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