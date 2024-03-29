"use client"

import { createContext, useContext } from "react";
import "./index.styles.css";
import MainContext from "@/shared/MainContext";
// import { MainContext } from "@/app/page";

// export interface IMainContext {
//     selectedMenu: any
//     setSelectedMenu: any
// }

// export const MainContext = createContext<IMainContext>({
//     selectedMenu: null,
//     setSelectedMenu: () => {},
// });

export default function Main() {
  const { selectedMenu, setSelectedMenu } = useContext<any>(MainContext);

  return (
    <main>
      Main
      {selectedMenu}
    </main>
    
  );
}
