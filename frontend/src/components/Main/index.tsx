import { useContext } from "react";
import "./index.styles.css";
import { MainContext } from "@/app/page";

export default function Main() {
  const { selectedMenu, setSelectedMenu } = useContext(MainContext);

  return (
    <main>
      Main
      {selectedMenu}
    </main>
    
  );
}
