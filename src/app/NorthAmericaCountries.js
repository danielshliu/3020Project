import styles from "./page.module.css";

export default function countries(){

    return(
        <div className={styles.NorthAmericaBackground}>
      <h1 className={styles.heading}>North America</h1>
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
      {/* Canada */}
      <div className={styles.countryCard}>
        <img
          src="/CanadaFlag.png"
          alt="Canada Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Canada</p>
        <button>Learn More</button>
      </div>

      {/* Mexico */}
      <div className={styles.countryCard}>
        <img
          src="/MexicoFlag.png"
          alt="Mexico Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Mexico | Estados Unidos Mexicanos</p>
        <button>Learn More</button>
      </div>

      {/* United States of America */}
      <div className={styles.countryCard}>
        <img
          src="/UnitedStatesFlag.png"
          alt="United States Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>United States of America</p>
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