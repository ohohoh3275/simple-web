
import NavBar from "@/components/NavBar";
import Main, { IMainContext, MainContext } from "@/components/Main";
import '../style/index.styles.css';
import { useState } from "react";
import MainContextWrap from "@/shared/MainContext";

export default function Home() {

  return (
    <>
    <MainContextWrap>
      <NavBar/>
      <Main/>
      </MainContextWrap>
    </>
  );
}
