import { useContext, useState } from "react";
import C from "./index.module.css";
import { MainContext } from "@/app/page";

export default function NavBar() {

  const {selectedMenu, setSelectedMenu} = useContext(MainContext);

  return (
    <header className="w-full bg-amber-300 h-100 border-2 border-stone-600	">
      Navbar
      <ul className="flex flex-row m-8 bg-sky-400 space-x-5 hover:space-x-8 justify-between">
        <li className={C.menu}>
          <button onClick={() => setSelectedMenu('1')}>1</button>
        </li>
        <li className={C.menu}>
          <button onClick={() => setSelectedMenu('2')}>2</button>
        </li>
        <li className={C.menu}>
          <button onClick={() => setSelectedMenu('3')}>3</button>
        </li>
        <li className={C.menu}>
          <button onClick={() => setSelectedMenu('4')}>4</button>
        </li>
        <li className={C.menu}>
          <button onClick={() => setSelectedMenu('5')}>5</button>
        </li>
      </ul>
    </header>
    
  );
}
