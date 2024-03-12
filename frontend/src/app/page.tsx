"use client"

import NavBar from "@/components/NavBar";
import Main, { MainContext } from "@/components/Main";
import '../style/index.styles.css';
import { useState } from "react";

export default function Home() {

  const [selectedMenu, setSelectedMenu] = useState<any>('1');

  return (
    <>
    <MainContext.Provider value={ {selectedMenu, setSelectedMenu } }>
      <NavBar/>
      <Main/>
    </MainContext.Provider>
    </>
  );
}
