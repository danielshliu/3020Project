import styles from "./page.module.css";

export default function Brazil() {
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
            <h1 className={styles.heading}>Brazil</h1>
            <div className={styles.cityGrid}>
                <div className={styles.cityCard}>
                    <img src="/rio.jpg" alt="Rio de Janeiro" className={styles.cityImage} />
                    <h3>Rio de Janeiro</h3>
                    <p>Famous for its beaches, Carnival, and the iconic Christ the Redeemer statue.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/sao-paulo.jpg" alt="São Paulo" className={styles.cityImage} />
                    <h3>São Paulo</h3>
                    <p>Brazil's financial powerhouse, known for its art, food, and culture.</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/salvador.jpg" alt="Salvador" className={styles.cityImage} />
                    <h3>Salvador</h3>
                    <p>Known for its colonial architecture, and vibrant festivals.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
