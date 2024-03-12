"use client"

import { useLayoutEffect, useState } from "react"
import './one.css';

export const PageOne = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useLayoutEffect(() => {
        window.addEventListener("mousemove", (e: any) => {
            setX(e.clientX);
            setY(e.clientY);
        })
    }, [])
        
    return (<>
        <div 
            className="mouse"
            style={{ position: 'fixed', left: `${x}px`, top: `${y}px` }}
        >
            <img 
                src={'https://github.com/ohohoh3275/simple-web/assets/75511229/e9f39102-29c2-4ea4-aa1e-f82a40fdda1b'}/>
            hi
        </div>
    </>)
}