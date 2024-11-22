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

        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {/* Australia Flag */}
      <div style={{ textAlign: 'center', flex: 1 }}>
        <img 
          src="/AustraliaFlag.png" 
          alt="Australia Flag" 
          style={{
            width: '40%',  // Adjust width to be 60% of the container's width
            height: 'auto', 
            marginBottom: '10px',
          }} 
        />
        <h3>Australia (Commonwealth of Australia)</h3>
        <button 
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Learn More
        </button>
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