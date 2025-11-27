"use client";

import React from "react";
import {IconBox} from "@/components/ui/icon-box/icon-box";
import {gsap, useGSAP, ScrollTrigger} from "@workspace/ui/utility/gsap/gsap-utils";
import {cn} from "@workspace/ui/lib/utils";
import {gsapItemProps} from "@/interfaces/page/about/sticky-scroll-interface.interfeac";
import {
    blockquoteTypo,
    h3Typo,
    inlineCodeTypo,
    pTypo,
    smallTypo
} from "@workspace/ui/components/ui/tailwind-variations";


export default function StickySummary(
    {
        isDev,
        iconCfg,
        metaBallsCfg,
        leftAside,
        rightAside
    }: gsapItemProps
) {
    const defaultFontStyles = " scroll-m-20 font-extrabold tracking-tight text-balance ";

    const panelRef = React.useRef<HTMLDivElement>(null);
    const boxRef = React.useRef<HTMLDivElement>(null);
    const asideLeftRef = React.useRef<HTMLDivElement>(null);
    const asideRightRef = React.useRef<HTMLDivElement>(null);

    // icon component
    const Icon = iconCfg.icon;

    //Animation
    useGSAP(
        () => {
            // set aside elements
            // null|undefined check
            if(!panelRef.current || !boxRef.current || !asideLeftRef.current || !asideRightRef.current){
                console.warn('Required elements not found');
                return ;
            }
            const parentPenal = panelRef.current;
            const pinBoxEl = boxRef.current;
            const pinContextElLeft = asideLeftRef.current;
            const pinContextElRight = asideRightRef.current;

            // calculating
            const parentHeight = parentPenal.offsetHeight;
            const boxHeight = pinBoxEl.offsetHeight;
            const leftHeight = pinContextElLeft.offsetHeight;
            const rightHeight = pinContextElRight.offsetHeight;

            // Animation 1: box pin animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: pinBoxEl,
                    start: `center+=${boxHeight} center`,
                    end: `${(parentHeight - (boxHeight / 2))} center-=${boxHeight}`,
                    markers: isDev && {
                        startColor: 'green',
                        endColor: '#731D1DFF'
                    },
                    toggleActions: '',
                    pin: true,
                    pinSpacing: false,
                    scrub: 1
                }
            });
            // Animation 2: fade in
            gsap.timeline({
                scrollTrigger:{
                    trigger: pinBoxEl,
                    start: `bottom-=${parentHeight * 0.4} center`,
                    end: `bottom-=${parentHeight * 0.2} center`,
                    scrub: 1
                }
            }).to(pinBoxEl,{
                opacity: 1,
                duration: 1
            });
            // Animation 3: fade out
            gsap.timeline({
                scrollTrigger:{
                    trigger: pinBoxEl,
                    start: `top+=${parentHeight * 0.2} center`,
                    end: `top+=${parentHeight * 0.4} center`,
                    scrub:1
                }
            }).to(pinBoxEl, {
                opacity: 0,
                duration: 1
            })

            // ----

            // Animation 1(for pinContextElLeft): context pin animation
            gsap.timeline({
                /* Animate <Aside> "Left Pin" effect */
                scrollTrigger: {
                    trigger: pinContextElLeft,
                    start: `center+=${boxHeight} center`,
                    end: ()=> `${(parentHeight - (boxHeight / 2))} center-=${boxHeight}`,
                    toggleActions: '',
                    markers: isDev && {
                        startColor: 'purple',
                        endColor: 'orange'
                    },
                    pin: true,
                    pinSpacing: false,
                    scrub: 1
                }
            });
            // <AsideLeft> "FadeIn" at the beginning of parent
            gsap.timeline({
                /* Animate <Aside> "Left Fade In" effect */
                scrollTrigger:{
                    trigger: parentPenal,
                    start: `top+=${parentHeight * 0.2} center`,
                    end: `top+=${parentHeight * 0.4} center`,
                    scrub: 1,
                    markers: isDev &&{
                        startColor: 'hotpink',
                        endColor: 'skyblue'
                    }
                }
            }).fromTo(pinContextElLeft,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 1}
            )

            // <AsideLeft> "FadOut" at the beginning of parent
            gsap.timeline({
                scrollTrigger:{
                    trigger: parentPenal,
                    start: `bottom-=${parentHeight * 0.2} center`,
                    end: `bottom center`,
                    scrub:1,
                    markers: isDev &&{
                        startColor: 'yellow',
                        endColor: 'red'
                    }
                }
            }).to(pinContextElLeft, {
                autoAlpha: 0,
                duration: 1
            });


            /** ---- **/
            // Right ver
            gsap.timeline({
                /* Animate <Aside> "Right Pin" effect */
                scrollTrigger: {
                    trigger: pinContextElRight,
                    start: `center+=${boxHeight} center`,
                    end: ()=> `${(parentHeight - (boxHeight / 2))} center-=${boxHeight}`,
                    toggleActions: '',
                    pin: true,
                    pinSpacing: false,
                    scrub: 1
                }
            })
            // Right "fade-in" version
            gsap.timeline({
                /* Animate <Aside> "Right Fade In" effect */
                scrollTrigger:{
                    trigger: parentPenal,
                    start: `top+=${parentHeight * 0.2} center`,
                    end: `top+=${parentHeight * 0.4} center`,
                    scrub: 1
                }
            }).fromTo(pinContextElRight,
                {
                    autoAlpha: 0
                },

                {
                autoAlpha: 1,
                duration: 1
                }
            );
            gsap.timeline({
                /* Animate Aside "Right Fade Out" effect */
                scrollTrigger:{
                    trigger: parentPenal,
                    start: `bottom-=${parentHeight * 0.2} center`,
                    end: `bottom center`,
                    scrub:1
                }
            }).to(pinContextElRight, {
                autoAlpha: 0,
                duration: 1
            })


            // when animation end
            return () => {
                ScrollTrigger.getAll().forEach(t => t.kill())
            }

        },
        {
            scope: panelRef,
            dependencies: [isDev]
        }
    )

    return (
        <div
            ref={panelRef}
            className={cn("panel--area h-screen " +
                "grid grid-cols-10 items-start align-top gap-0 "
            )}
        >
            <div ref={asideLeftRef} className="aside col-start-2 col-end-5
            aside--left opacity-0 ">
                <div className="flex flex-col h-full justify-center pl-8 text-end ">
                    <h2 className={cn(h3Typo)}>
                        {leftAside.title}
                    </h2>
                    <p className={cn(pTypo + " text-sm break-words ")}>
                        {leftAside.sub}
                    </p>
                </div>
            </div>
            <div className={cn("col-start-5 col-end-7 flex w-full justify-center items-center " +
                "flex-shrink-0")}>
                <IconBox
                    ref={boxRef}
                    className="
                    box--pin opacity-0 text-white "
                    size={iconCfg.iconSize}
                    metaBallsColorCfg={metaBallsCfg}
                    data-speed="0.1"
                >
                    <Icon size={44} style={iconCfg.style}/>
                </IconBox>
            </div>
            <div ref={asideRightRef} className="aside col-start-7 col-end-10
            aside--right opacity-0">
                <div className="flex flex-col justify-start items-start">
                    <h3 className={cn(smallTypo + " leading-snug")}>
                        {rightAside.summary}
                    </h3>
                </div>
            </div>
        </div>
    );
}
