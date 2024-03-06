"use client"
import NavBar from "@/components/NavBar";
import Main from "@/components/Main";
import '../style/index.styles.css';
import { createContext, useState } from "react";

export const MainContext = createContext({});

export default function Home() {

  const [selectedMenu, setSelectedMenu] = useState('1');

  return (
    <MainContext.Provider value={ {selectedMenu, setSelectedMenu} }>
    <div className="w-full h-screen border-2 border-red-700">
      <NavBar/>
      <Main/>
    </div>
    </MainContext.Provider>
  );
}
