"use client";

import React from 'react';
import {SiHtml5, SiCss3, SiJavascript} from "@workspace/ui/icons";
import {cn} from "@workspace/ui/lib/utils";
import {IconBox} from "@/components/ui/icon-box/icon-box";
import {gsap, useGSAP, ScrollTrigger} from "@workspace/ui/lib/gsap-utils";
import "./styles/index.scss";
import StickySummary from "@/components/animations/about/sticky-summary/sticky-summary";
import {SiTypescript} from "@workspace/ui/components/icons";

export default function StickyScroll() {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const commonBoxClsN = "text-white dev-icon";

    // Animation
    useGSAP(
        // Pin the parallax-box--3 when it enters viewport
        () => {

            const stickyEls = document.querySelectorAll<HTMLDivElement>('.parallax-box');

            // use forEach loop
            stickyEls.forEach(el => {
                // get parent panel element
                const parentPanel = el.closest<HTMLDivElement>('.panel');
                const parentTop = parentPanel?.offsetTop || 0; // or 0
                const parentHeight = parentPanel?.offsetHeight || 0; // or 0

                // Animation 1: pin
                gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: `center+=${el.offsetHeight || 0} center`,
                        end: `${(parentHeight - (el.offsetHeight / 2))} center-=${el.offsetHeight || 0}`,
                        // markers: {
                        //     startColor: 'white',
                        //     endColor: 'gray'
                        // },
                        toggleActions: `play none none`,
                        pin: true,
                        scrub: 1
                    }
                });
                // Animation 2: fade out
                gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: `top+=${parentHeight * 0.2} center`,
                        end: `top+=${parentHeight * 0.4} center`,
                        scrub: 1,
                        // markers: {
                        //     startColor: 'blue',
                        //     endColor: 'lightblue'
                        // }
                    }
                }).to(el, { // channing
                    opacity: 0,
                    duration: 1
                })

                // Animation 3: fade in
                gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: `bottom-=${parentHeight * 0.4} center`,
                        end: `bottom-=${parentHeight * 0.2} center`,
                        scrub: 1,
                        // markers: {
                        //     startColor: 'orange',
                        //     endColor: 'red'
                        // }
                    }
                }).to(el, {
                    opacity: 1,
                    duration: 1
                })

            });
            // when scrolling ends
            return () => {
                ScrollTrigger.getAll().forEach(t => t.kill());
            };
        },
        {
            scope: containerRef
        }
    )

    return (
        <div
            ref={containerRef}
            className="w-full"
        >
            {/* panel content-1 */}
            <div className="panel panel--html h-screen flex flex-col justify-start items-center ">
                <IconBox
                    className="parallax-box parallax-box--1"
                    size='lg'
                    metaBallsColorCfg={{
                        color: '#731d1d',
                        cursorBallColor: '#f58d42'
                    }}
                    data-speed="0.5"
                >
                    <SiHtml5
                        className={cn(commonBoxClsN)}
                        size={44}
                        style={{
                            borderRadius: '0.4rem'
                        }}
                    />
                </IconBox>
            </div>
            {/* panel content-2 */}
            <div className="panel panel--css h-screen flex flex-col justify-start items-center ">
                <IconBox
                    className="parallax-box parallax-box--2"
                    size='lg'
                    metaBallsColorCfg={{
                        color: '#1e3a8a',
                        cursorBallColor: '#2563eb'
                    }}
                    data-speed="0.8"
                >
                    <SiCss3
                        className={cn(commonBoxClsN)}
                        size={44}
                        style={{borderRadius: '0.4rem'}}
                    />
                </IconBox>
            </div>
            {/* panel content-3 */}
            <div className="panel panel--js h-screen flex flex-col justify-start items-center  ">
                <IconBox
                    className="parallax-box parallax-box--3 "
                    size='lg'
                    metaBallsColorCfg={{
                        color: '#eea227',
                        cursorBallColor: '#eeca27'
                    }}
                    data-speed="1.5"
                >
                    <SiJavascript
                        className={cn(commonBoxClsN,)}
                        size={44}
                        style={{borderRadius: '0.4rem'}}
                    />
                </IconBox>
            </div>
            <StickySummary
                icon={
                    <SiTypescript
                        color="white"
                        size={44}
                        style={{borderRadius: '0.4rem'}}
                    />
                }
            />
        </div>
    );
};

