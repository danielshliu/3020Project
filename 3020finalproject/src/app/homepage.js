"use client";
import styles from "./page.module.css";

export default function homapage(){
    return(
        
         <div>
            {/* This is the body of the HTML */}
            <h1 className={styles.h1temp}>Welcome to Our website</h1>
            <p>This is a paragraph</p>
            {/* I did work here */}

            <img src="/drog.jpeg" className={styles.drog}/>

         </div>
    );
}