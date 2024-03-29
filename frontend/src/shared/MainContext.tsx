"use client"

import { createContext, useState } from "react";

export interface IMainContext {
    selectedMenu: any
    setSelectedMenu: any
}

export const MainContext = createContext<IMainContext>({
    selectedMenu: null,
    setSelectedMenu: null,
});

export default function MainContextWrap() {

    const [selectedMenu, setSelectedMenu] = useState<IMainContext>();

    return(
        <MainContext.Provider value={{selectedMenu, setSelectedMenu}} >

        </MainContext.Provider>
    )

}

