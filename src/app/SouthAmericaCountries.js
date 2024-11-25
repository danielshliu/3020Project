import styles from "./page.module.css";

export default function SouthAmerica(props){

  return(
    <div className={styles.SouthAmericaBackground}>
      <h1 className={styles.heading}>South America</h1>
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
      {/* Argentina */}
      <div className={styles.countryCard}>
        <img
          src="/ArgentinaFlag.png"
          alt="Argentina Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Argentina | República Argentina</p>
        <button onClick={() => props.setPage(23)} >Learn More</button>
      </div>

      {/* Brazil */}
      <div className={styles.countryCard}>
        <img
          src="/BrazilFlag.png"
          alt="Brazil Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Brazil | República Federativa do Brasil</p>
        <button onClick={() => props.setPage(24)} >Learn More</button>
      </div>

      {/* Chile */}
      <div className={styles.countryCard}>
        <img
          src="/ChileFlag.png"
          alt="Chile Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Chile | República de Chile</p>
        <button onClick={() => props.setPage(25)} >Learn More</button>
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