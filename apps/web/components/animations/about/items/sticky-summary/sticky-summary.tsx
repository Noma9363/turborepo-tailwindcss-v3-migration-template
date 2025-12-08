"use client";

import React from "react";
import {IconBox} from "@/components/ui/icon-box/icon-box";
import {gsap, useGSAP, ScrollTrigger} from "@workspace/ui/utility/gsap/gsap-utils";
import {cn} from "@workspace/ui/lib/utils";
import {gsapItemProps} from "@/interfaces/page/about/sticky-scroll-interface.interfeac";
import {
    typography
} from "@workspace/ui/components/ui/tailwind-variations";
import {PreviewCard} from "@/components/page-module/about/preview-card/preview-card";


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

    // Store triggers for proper cleanup
    const triggersRef = React.useRef<ScrollTrigger[]>([]);
    // icon component
    const Icon = iconCfg.icon;

    //Animation
    useGSAP(
        () => {
            // set aside elements
            // null|undefined check
            if (!panelRef.current || !boxRef.current || !asideLeftRef.current || !asideRightRef.current) {
                console.warn('Required elements not found');
                return;
            }


            const parentPenal = panelRef.current;
            const pinBoxEl = boxRef.current;
            const pinContextElLeft = asideLeftRef.current;
            const pinContextElRight = asideRightRef.current;

            // calculating
            const parentHeight = parentPenal.offsetHeight;
            const boxHeight = pinBoxEl.offsetHeight;

            // Clear previous triggers
            console.log(`[STICKY] cleaning up ${triggersRef.current.length} old triggers`)
            triggersRef.current.forEach(t => t.kill());
            triggersRef.current = [];


            // Animation 1: box pin animation
            triggersRef.current.push(
                ScrollTrigger.create({
                    trigger: pinBoxEl,
                    start: `center+=${boxHeight} center`,
                    end: `${(parentHeight - (boxHeight / 2))} center-=${boxHeight}`,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                })
            );

            // Left-Animation (for pinContextElLeft): context pin animation
            triggersRef.current.push(
                ScrollTrigger.create({
                    trigger: pinContextElLeft,
                    start: `center+=${boxHeight} center`,
                    end: `${(parentHeight - (boxHeight / 2))} center-=${boxHeight}`,
                    pin: true,
                    pinSpacing: false,
                    scrub: true
                })
            );

            // Right Animation ver
            triggersRef.current.push(
                ScrollTrigger.create({
                    trigger: pinContextElRight,
                    start: `center+=${boxHeight} center`,
                    end: `${(parentHeight - (boxHeight / 2))} center-=${boxHeight}`,
                    pin: true,
                    pinSpacing: false,
                    scrub: true
                })
            );

            /** Box Fade In */
            const boxFadeInTrEle = gsap.timeline({
                scrollTrigger:{
                    trigger: pinBoxEl,
                    start: `bottom-=${parentHeight * 0.4} center`,
                    end: `bottom-=${parentHeight * 0.2} center`,
                    scrub: 1,
                    markers: isDev
                }
            });
            boxFadeInTrEle.fromTo(
                pinBoxEl,
                {opacity:0},
                {opacity:1, duration: 1}
            );
            triggersRef.current.push(boxFadeInTrEle.scrollTrigger!);
            /** Box Fade Out */
            const boxFadeOutTrEle = gsap.timeline({
                scrollTrigger:{
                    trigger: pinBoxEl,
                    start: `top+=${parentHeight * 0.2} center`,
                    end: `top+=${parentHeight * 0.4} center`,
                    scrub: 1,
                    markers: isDev
                }
            });
            boxFadeOutTrEle.to(
                pinBoxEl,
                {opacity:0, duration: 1}
            );
            triggersRef.current.push(boxFadeOutTrEle.scrollTrigger!);
            /** .. */

            /** Aside["Left"] Fade In */
            const asideLeftFadeInTrEle = gsap.timeline({
                scrollTrigger:{
                    trigger: parentPenal,
                    start: `top+=${parentHeight * 0.2} center`,
                    end: `top+=${parentHeight * 0.4} center`,
                    scrub: 1,
                    markers: isDev
                }
            });
            asideLeftFadeInTrEle.fromTo(
                pinContextElLeft,
                {opacity:0},
                {opacity:1, duration: 1}
            );
            triggersRef.current.push(asideLeftFadeInTrEle.scrollTrigger!);

            /** Aside["Left"] Fade Out */
            const asideLeftFadeOutTrEle = gsap.timeline({
                scrollTrigger:{
                    trigger: parentPenal,
                    start: `bottom-=${parentHeight * 0.4} center`,
                    end: `bottom-=${parentHeight * 0.2} center`,
                    scrub: 1,
                    markers: isDev
                }
            });
            asideLeftFadeOutTrEle.to(
                [pinContextElLeft],
                {opacity:0, duration: 1}
            );
            triggersRef.current.push(asideLeftFadeOutTrEle.scrollTrigger!);

            /** Aside["Right"] Fade In */
            const asideRightFadeInTrEle = gsap.timeline({
                scrollTrigger:{
                    trigger: parentPenal,
                    start: `top+=${parentHeight * 0.2} center`,
                    end: `top+=${parentHeight * 0.4} center`,
                    scrub: 1,
                    markers: isDev
                }
            });
            asideRightFadeInTrEle.fromTo(
                pinContextElRight,
                {opacity: 0},
                {opacity: 1, duration: 1}
            );
            triggersRef.current.push(asideRightFadeInTrEle.scrollTrigger!);


            /** Aside["Right"] Fade Out */
            const asideRightFadeOutTrEle = gsap.timeline({
                scrollTrigger:{
                    trigger: parentPenal,
                    start: `bottom-=${parentHeight * 0.4} center`,
                    end: `bottom-=${parentHeight * 0.2} center`,
                    scrub: 1,
                    markers: isDev
                }
            });
            asideRightFadeOutTrEle.to(
                pinContextElRight,
                {opacity:0, duration: 1}
            );
            triggersRef.current.push(asideRightFadeOutTrEle.scrollTrigger!);

            console.log(`[STICKY] Created: ${triggersRef.current.length} triggers for ${leftAside.title}`)
            // CleanUp Fn
            return() => {
                console.log(`[STICKY] useGsap cleanup - killing ${triggersRef.current.length} triggers for: ${leftAside.title}`)
                triggersRef.current.forEach(t=>t.kill());
                triggersRef.current = []
            }
        }
        ,
        {
            scope: panelRef,
            dependencies: [isDev]
        }
    )

    // proper cleanup
    React.useEffect(() => {
        return () => {
            console.log(`[STICKY] useEffect cleanup for : ${leftAside.title}`);
            triggersRef.current.forEach(t => t.kill());
            triggersRef.current = [];
        }
    }, [leftAside.title])

    return (
        <div
            ref={panelRef}
            className={cn("panel--area h-screen " +
                "grid grid-cols-10 items-start align-top gap-0 "
            )}
        >
            <div ref={asideLeftRef} className="aside col-start-1 col-end-5
            aside--left opacity-0 ">
                <div className="flex w-full flex-col h-full items-end justify-start pl-4 text-end gap-0.5">
                    <h2 className={cn(typography.h3Typo)}>
                        {leftAside.title}
                    </h2>
                    <p className={cn("font-mono text-sm font-light fit-co")}>
                        {rightAside.summary}
                    </p>
                </div>
            </div>
            <div className={cn("col-start-5 col-end-7 flex w-full justify-center items-center " +
                "flex-shrink-0")}>
                <IconBox
                    ref={boxRef}
                    className="
                    box--pin text-white opacity-0"
                    size={iconCfg.iconSize}
                    metaBallsColorCfg={metaBallsCfg}
                    data-speed="0.1"
                >
                    <Icon size={56} style={iconCfg.style}/>
                </IconBox>
            </div>
            <div ref={asideRightRef} className="aside col-start-7 col-end-11
            aside--right opacity-0">
                <div className="flex w-full flex-col justify-start items-start">
                   {/*<PreviewCard/>*/}
                </div>
            </div>
        </div>
    );
}
