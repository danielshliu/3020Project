"use client";


import Image from "next/image";
import styles from "./page.module.css";

import aboutuspage from './aboutus';
import Homepage from "./homepage";
import CountryPage from "./countries";
import DestinationSelection from "./destinationSelection";


import { useRouter } from 'react';

export default function Home() {
  return (
    // This is a rendering page so don't touch it
    // Only one render can go at a time
    // <CountryPage></CountryPage>
    
    <div> 
      <DestinationSelection/>
      {/* <Homepage/> */}
    </div>

  );
}
