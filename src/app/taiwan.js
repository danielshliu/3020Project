import styles from "./page.module.css";

export default function Taiwan(props) {
  return (
    <div className={styles.cityBackground}>
      <Navigation setPage={props.setPage}/>
        <h1 className={styles.heading}>Taiwan</h1>
        <div className={styles.cityGrid}>
          <div 
            onClick={() => props.setPage(29)}
            className={styles.cityCard}>
            <img src="/taipei.jpg" alt="Taipei" className={styles.cityImage} />
            <h3>Taipei</h3>
            <p>The capital city, famous for its skyline including Taipei 101.</p>
          </div>
          <div 
            onClick={() => props.setPage(29)}
            className={styles.cityCard}>
            <img src="/kaohsiung.jpg" alt="Kaohsiung" className={styles.cityImage} />
            <h3>Kaohsiung</h3>
            <p>A city with a vibrant arts scene and night markets.</p>
          </div>
          <div 
            onClick={() => props.setPage(29)}
            className={styles.cityCard}>
            <img src="/taichung.jpg" alt="Taichung" className={styles.cityImage} />
            <h3>Taichung</h3>
            <p>Known for its cultural attractions, parks, and lively night markets.</p>
          </div>
        </div>
      <footer className = {styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
