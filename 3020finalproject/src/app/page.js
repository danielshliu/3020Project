import Image from "next/image";
import styles from "./page.module.css";

import Homepage from "./homepage";
import CountryPage from "./countries";

export default function Home() {
  return (
    //Only one render can go at a time
    //<Homepage></Homepage>
     <CountryPage></CountryPage>


  );
}
