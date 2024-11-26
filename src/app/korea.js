import styles from "./page.module.css";

export default function Korea(props) {
    return (
        <div className={styles.cityBackground}>
           <Navigation setPage={props.setPage}/>
            <h1 className={styles.heading}>Korea</h1>
            <div className={styles.cityGrid}>
                  <div 
                  onClick={() => props.setPage(29)}
                  className={styles.cityCard}>
                  <img src="/seoul.jpg" alt="Seoul" className={styles.cityImage} />
                  <h3>Seoul</h3>
                  <p>The capital city known for its historical landmarks and modern culture.</p>
                </div>
                <div 
                  onClick={() => props.setPage(29)}
                  className={styles.cityCard}>
                  <img src="/busan.jpg" alt="Busan" className={styles.cityImage} />
                  <h3>Busan</h3>
                  <p>A city famous for its beaches and seafood.</p>
                </div>
                <div 
                  onClick={() => props.setPage(29)}
                  className={styles.cityCard}>
                  <img src="/incheon.jpg" alt="Incheon" className={styles.cityImage} />
                  <h3>Incheon</h3>
                  <p>Known for its international airport and beautiful waterfront.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
