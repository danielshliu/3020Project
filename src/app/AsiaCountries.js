import styles from "./page.module.css";

export default function Asia(props){

    return(
        <div className={styles.AsiaBackground}>
      <h1 className={styles.heading}>Asia</h1>
      <nav className={styles.navbar}>
          {/* Logo aligned to the left */}
          <label className={styles.logo}>WanderSphere</label>

          {/* Navigation links */}
          <ul className={styles.navLinks}>
        
          <li>
            <a onClick={() => props.setPage(2)} className={styles.navLink}>
              About us
            </a>
          
          </li>
          
          <li>
            <a onClick={() => props.setPage(1)} className={styles.navLink}>
              HomePage
            </a>
          </li>
          <li>
            <a onClick={() => props.setPage(3)} className={styles.navLink}>
              Countries
            </a>
          </li>
          <li>
            <a onClick={() => props.setPage(4)} className={styles.navLink}>
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
        <button onClick={() => props.setPage(14)} >Learn More</button>
      </div>

      {/* South Korea */}
      <div className={styles.countryCard}>
        <img
          src="/SouthKoreaFlag.png"
          alt="South Korea Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>South Korea | 대한민국</p>
        <button onClick={() => props.setPage(15)} >Learn More</button>
      </div>

      {/* Taiwan */}
      <div className={styles.countryCard}>
        <img
          src="/TaiwanFlag.png"
          alt="Taiwan Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Taiwan | 中華民國</p>
        <button onClick={() => props.setPage(16)} >Learn More</button>
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