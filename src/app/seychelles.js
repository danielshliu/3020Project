import styles from "./page.module.css";

export default function Seychelles(props) {
    return (
        <div className={styles.cityBackground}>
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
            <h1 className={styles.heading}>Seychelles</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/mahe.jpg" alt="Mahé" className={styles.cityImage} />
                    <h3>Mahé</h3>
                    <p>The largest island, home to Victoria and stunning beaches.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/praslin.jpg" alt="Praslin" className={styles.cityImage} />
                    <h3>Praslin</h3>
                    <p>Home to one of the most beautiful beaches in the world, Anse Source d'Argent.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/laDigue.jpg" alt="La Digue" className={styles.cityImage} />
                    <h3>La Digue</h3>
                    <p>A peaceful island with pink granite rock formations.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
