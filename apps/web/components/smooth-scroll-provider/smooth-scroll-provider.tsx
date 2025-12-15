"use client"

import React from 'react';
import Lenis from 'lenis';

export function SmoothScrollProvider({children}:{children: React.ReactNode}){
    // when component mounted...
    React.useEffect(()=>{
        // lenis wheel event setup
        // same as => window.addEventListener('wheel', handleWheel)

        const lenis = new Lenis({
            duration: 1.2,
            // easing scroll effect: make fast at start slow at end
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true
        })

        /** raf: Request Animation Frame */
        function raf(time: number){
            lenis.raf(time); // update scroll pos smoothly
            requestAnimationFrame(raf) // loop area
        }

        requestAnimationFrame(raf)

        // when scroll ends
        return()=>{
            lenis.destroy();
        }

    },[])

    return <>{children}</>
}