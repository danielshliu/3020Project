import styles from "./page.module.css";

export default function countries(){

    return(
        <div className={styles.OceaniaBackground}>
      <h1 className={styles.heading}>Oceania</h1>
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
      {/* Australia */}
      <div className={styles.countryCard}>
        <img
          src="/AustraliaFlag.png"
          alt="Australia Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Australia</p>
        <button>Learn More</button>
      </div>

      {/* French Polynesia */}
      <div className={styles.countryCard}>
        <img
          src="/FrenchPolynesiaFlag.png"
          alt="French Polynesia Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>French Polynesia | Polynésie Française</p>
        <button>Learn More</button>
      </div>

      {/* New Zealand */}
      <div className={styles.countryCard}>
        <img
          src="/NewZealandFlag.png"
          alt="New Zealand Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>New Zealand | Aotearoa</p>
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