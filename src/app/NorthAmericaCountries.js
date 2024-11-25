import styles from "./page.module.css";

export default function NorthAmerica(props){

  return(
    <div className={styles.NorthAmericaBackground}>
      <h1 className={styles.heading}>North America</h1>
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
      {/* Canada */}
      <div className={styles.countryCard}>
        <img
          src="/CanadaFlag.png"
          alt="Canada Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Canada</p>
        <button onClick={() => props.setPage(20)} >Learn More</button>
      </div>

      {/* Mexico */}
      <div className={styles.countryCard}>
        <img
          src="/MexicoFlag.png"
          alt="Mexico Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Mexico | Estados Unidos Mexicanos</p>
        <button onClick={() => props.setPage(21)} >Learn More</button>
      </div>

      {/* United States of America */}
      <div className={styles.countryCard}>
        <img
          src="/UnitedStatesFlag.png"
          alt="United States Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>United States of America</p>
        <button onClick={() => props.setPage(22)} >Learn More</button>
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