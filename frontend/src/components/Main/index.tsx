import { createContext, useContext } from "react";
import "./index.styles.css";
// import { MainContext } from "@/app/page";

export const MainContext = createContext({});

export default function Main() {
  const { selectedMenu, setSelectedMenu } = useContext<any>(MainContext);

  return (
    <main>
      Main
      {selectedMenu}
    </main>
    
  );
}
