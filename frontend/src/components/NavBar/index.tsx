import { useContext } from "react";
import C from "./index.module.css";
import Link from "next/link";
import { MainContext } from "../Main";

export default function NavBar() {

  const { selectedMenu, setSelectedMenu } = useContext<any>(MainContext);

  return (
    <header className="w-full bg-amber-300 h-100 border-2 border-stone-600	">
      Navbar
      <ul className="flex flex-row m-8 bg-sky-400 space-x-5 hover:space-x-8 justify-between">
        <li className={C.menu}>
            <Link href="/one">
              <button onClick={() => setSelectedMenu('1')}>1</button>
            </Link>
          </li>
          <li className={C.menu}>
          <Link href="/two">
              <button onClick={() => setSelectedMenu('2')}>2</button>
          </Link>
          </li>
          <li className={C.menu}>
            <Link href="/three">
            <button onClick={() => setSelectedMenu('3')}>3</button>
            </Link>
          </li>
          <li className={C.menu}>
          <Link href="/four">
          <button onClick={() => setSelectedMenu('4')}>4</button>
          </Link>
          </li>
          <li className={C.menu}>
            <Link href="/five">
              <button onClick={() => setSelectedMenu('5')}>5</button>
            </Link>
          </li>
      </ul>
    </header>
    
  );
}
