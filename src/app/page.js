"use client";


import Image from "next/image";
import styles from "./page.module.css";

import Homepage from "./homepage";
import Oceania from "./OceaniaCountries";
import DestinationSelection from "./destinationSelection";
import Argentina from "./argentina";
import USA from "./usa";
import Canada from "./canada";
import Body from "./body";

import { useRouter } from 'react';


export default function Home() {
  return (
    //Comment this out if you want to just render the page your working on
    <Body/>
    
    // This is a rendering page so don't touch it
    // Only one render can go at a time
    // <CountryPage></CountryPage>
    //  {/* <Oceania></Oceania> */}
    //   {/* <AboutUs></AboutUs> */}
    //   {/* <DestinationSelection/> */}
    //   {/* <Homepage></Homepage> */}
    //   {/* <Argentina></Argentina> */}
    //   {/* <USA></USA> */}
    //   {/* <Canada></Canada> */}
  
  );
}
