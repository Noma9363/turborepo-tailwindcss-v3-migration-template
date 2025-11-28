'use client';

import {gsap, useGSAP, ScrollTrigger} from "@workspace/ui/utility/gsap/gsap-utils";
import {cn} from "@workspace/ui/lib/utils";
import './styles/index.scss';
import React from "react";

export const HorizontalScroll = () => {

    // ref state
    const containerRef = React.useRef<HTMLDivElement>(null);

    // animation
    useGSAP(() => {
        if (!containerRef.current) return;

        const sections = containerRef.current.querySelectorAll('.slide')

        gsap.to(sections,{
            xPercent: - 100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger:{
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                markers: true,
                end: ()=> "+=" + containerRef.current!.scrollWidth
            }
        })


    }, {
        scope: containerRef,
        dependencies: []
    })


    return (
        <div ref={containerRef} className="horizontal-slider-main">

                <div className="slide">Slide 1</div>
                <div className="slide">Slide 2</div>
                <div className="slide">Slide 3</div>
                <div className="slide">Slide 4</div>
                <div className="slide">Slide 5</div>
        </div>
    )
}
