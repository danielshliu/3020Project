import styles from "./page.module.css";

export default function countries(){

    return(
        <div className={styles.EuropeBackground}>
      <h1 className={styles.heading}>Europe</h1>
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
      {/* Italy */}
      <div className={styles.countryCard}>
        <img
          src="/ItalyFlag.png"
          alt="Italy Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Italy | Repubblica Italiana</p>
        <button>Learn More</button>
      </div>

      {/* Sweden */}
      <div className={styles.countryCard}>
        <img
          src="/SwedenFlag.png"
          alt="Sweden Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Sweden | Konungariket Sverige</p>
        <button>Learn More</button>
      </div>

      {/* Switzerland */}
      <div className={styles.countryCard}>
        <img
          src="/SwitzerlandFlag.png"
          alt="Switzerland Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Switzerland</p>
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