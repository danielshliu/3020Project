import Image from "next/image";
import styles from "./page.module.css";


import Homepage from "./homepage";
import CountryPage from "./countries";
import { useRouter } from 'react';

export default function Home() {
  return (
    // This is a rendering page so don't touch it
    // Only one render can go at a time
    <Homepage></Homepage>
    //<CountryPage></CountryPage>
  
  );
}
