import styles from "./page.module.css";

export default function SouthAfrica(props) {
    return (
        <div className = {styles.cityBackground}>
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
            <h1 className = {styles.heading}>South Africa</h1>
            <div className = {styles.cityGrid}>
                <div className = {styles.cityCard}>
                    <img src = "/capeTown.jpg" alt = "Cape Town" className = {styles.cityImage}/>
                    <h3>Cape Town</h3>
                    <p>Famous city in South Africa known for its natural beauty and rich history</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/johannesburg.jpg" alt="Johannesburg" className={styles.cityImage} />
                    <h3>Johannesburg</h3>
                    <p>A city known as the financial capital and was the former residence of Nelson Mandela!</p>
                </div>
                <div className={styles.cityCard}>
                    <img src="/durban.jpg" alt="Durban" className={styles.cityImage} />
                    <h3>Durban</h3>
                    <p>Known for its pristine beaches!</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    )
}