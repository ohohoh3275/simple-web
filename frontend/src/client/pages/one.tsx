"use client"

import { useLayoutEffect, useState } from "react"
import './one.css';
import Image from "next/image";

export const PageOne = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useLayoutEffect(() => {
        window.addEventListener("mousemove", (e: any) => {
            setX(e.clientX);
            setY(e.clientY);
        })
    }, [])
        
    return (
        <>
        <div 
            className="mouse"
            style={{ left: `${x}px`, top: `${y}px` }}
        >
            <Image
                alt={'me'} 
                width={40}
                height={40}
                src={'https://github.com/ohohoh3275/simple-web/assets/75511229/e9f39102-29c2-4ea4-aa1e-f82a40fdda1b'}/>
        </div>

        <div className={"yearlyBox"}>
            <button>
                1994~2013
            </button>

            <button>
                2013~2018
            </button>

            <button>
                2018~2019
            </button>

            <button>
                2019~2020
            </button>
            <button>
                2020~2021
            </button>
            <button>
                2021~2024
            </button>
        </div>
        </>
    )
}