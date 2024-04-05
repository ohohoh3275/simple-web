"use client"

import { useState } from 'react';
import './three.css';

export default function PageThree() {

    const [percent, setPercent] = useState(0);

    window.addEventListener("scroll", (e) => {
        const scrollY = window.scrollY;
        const innerHeight = document.body.scrollHeight - window.innerHeight;
        const per = (scrollY / innerHeight) * 100
        setPercent(per)
    })

    return (
        <>
        <div className="percent">
            {percent.toFixed() + "%"}
        </div>
        <div className="parallax"></div>
        <div
            style={{
                height: '1000px',
                backgroundColor: 'green',
                fontSize: '36px'
            }}
        >
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
        <div className="parallax"></div>
        </>
    )
}
