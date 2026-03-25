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
import {useMediaQuery} from "@workspace/ui/hooks/useMediaQuery.hook";


export default function StickySummary({
                                          isDev, iconCfg, metaBallsCfg, leftAside, rightAside, fontSize
                                      }: gsapItemProps) {
    const defaultFontStyles = " scroll-m-20 font-extrabold tracking-tight text-balance ";

    const panelRef = React.useRef<HTMLDivElement>(null);
    const boxRef = React.useRef<HTMLDivElement>(null);
    const asideLeftRef = React.useRef<HTMLDivElement>(null);
    const asideRightRef = React.useRef<HTMLDivElement>(null);

    // Store triggers for proper cleanup
    const triggersRef = React.useRef<ScrollTrigger[]>([]);
    // icon component
    const Icon = iconCfg.icon;

    // floating nav
    const NAV_HEIGHT = 52;

    const BREAKPOINTS = {
        mobile: 480, tablet: 768, laptop: 1280, desktop: 1440,
    }

    const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.laptop - 1}px)`);


    //Animation
    useGSAP(() => {
        // set aside elements
        // null|undefined check
        if (!panelRef.current || !boxRef.current || !asideLeftRef.current || !asideRightRef.current) {
            console.warn('Required elements not found');
            return;
        }

        // Clear previous triggers
        console.log(`[STICKY] cleaning up ${triggersRef.current.length} old triggers`)
        // kill early when below labtop and opacity
        triggersRef.current.forEach((t) => t.kill());
        triggersRef.current = [];

        // Animation Element Refs
        const parentPenal = panelRef.current;
        const pinBoxEl = boxRef.current;
        const pinContextElLeft = asideLeftRef.current;
        const pinContextElRight = asideRightRef.current;

        // calculating
        const parentHeight = parentPenal.offsetHeight;
        const boxHeight = pinBoxEl.offsetHeight;


        // mobile animation
        if (isMobile) {
            // reset the references properties
            [boxRef.current, asideLeftRef.current, asideRightRef.current].forEach(el => {
                if(!el) return; // if element is not defined escape
                // resettling all element's style properties
                el.style.opacity = "";
                el.style.transform= "";
                el.style.position= "";
                el.style.top= "";
                el.style.left= "";
                el.style.width= "";
                el.style.willChange= "";

            });

            // animation task
            /** NOTE: ESCAPE PREVIOUS CODE LINE */

            /** Box pined animation */
            triggersRef.current.push(ScrollTrigger.create({
                trigger: pinBoxEl,
                start: `center+=${boxHeight} center+=${NAV_HEIGHT}px`,
                end: `${(parentHeight - (boxHeight / 2))} center-=${boxHeight-NAV_HEIGHT}px`,
                pin: true,
                pinSpacing: false,
                scrub: true,
            }));

            /** Box Fade In */
            const boxFadeInTrEle = gsap.timeline({
                scrollTrigger: {
                    trigger: pinBoxEl,
                    start: `bottom-=${parentHeight * 0.4} center`,
                    end: `bottom-=${parentHeight * 0.2} center`,
                    scrub: 1,
                    markers: isDev
                }
            });
            boxFadeInTrEle.fromTo(pinBoxEl, {opacity: 0}, {opacity: 1, duration: 1});
            triggersRef.current.push(boxFadeInTrEle.scrollTrigger!);

            /** Box Fade Out */
            const boxFadeOutTrEle = gsap.timeline({
                scrollTrigger: {
                    trigger: pinBoxEl,
                    start: `top+=${parentHeight * 0.2} center`,
                    end: `top+=${parentHeight * 0.4} center`,
                    scrub: 1,
                    markers: isDev
                }
            });
            boxFadeOutTrEle.to(pinBoxEl, {opacity: 0, duration: 0.5});
            triggersRef.current.push(boxFadeOutTrEle.scrollTrigger!);

            /** AsideRightContext PinBox */

            const boxRect = pinBoxEl.getBoundingClientRect();
            const rightContextRect = pinContextElRight.getBoundingClientRect();
            // naturalGap = current target pos - boxReact's bottom pos
            const naturalGap = rightContextRect.top - boxRect.bottom;

            // set asideRightContext gap value
            gsap.set(pinContextElRight,{
                y: -(naturalGap - 4)
            })
            // insert animation of pinBox
            triggersRef.current.push(ScrollTrigger.create({
                trigger: pinBoxEl,
                start: `center+=${boxHeight} center+=${NAV_HEIGHT}px`,
                end: `${(parentHeight - (boxHeight / 2))} center-=${boxHeight-NAV_HEIGHT}px`,
                pin: pinContextElRight,
                pinSpacing: false,
                scrub: true,
            }));

            /** Aside["Right"] Fade Effects*/

            /** Aside["Right"] Fade In*/
            const asideRightFadeInEl = gsap.timeline({
                scrollTrigger:{
                    trigger: parentPenal,
                    start: `top+=${parentHeight * 0.2} center`,
                    end: `top+=${parentHeight * 0.4} center`,
                    scrub: 1,
                    markers: isDev
                }
            });
            // set the fade-in's opacity and duration
            asideRightFadeInEl.fromTo(pinContextElRight, {opacity: 0}, {opacity:1, duration: 1.5});
            // insert fadeIn animation
            triggersRef.current.push(asideRightFadeInEl.scrollTrigger!);

            /** Aside["Right"] Fade Out*/
            const asideRightFadeOutEl = gsap.timeline({
                scrollTrigger:{
                    trigger: parentPenal,
                    start: `bottom-=${parentHeight * 0.25} center`,
                    end: `bottom center`,
                    scrub: 1,
                    markers: isDev
                }
            });
            // set the fade-in's opacity and duration
            asideRightFadeOutEl.to([pinContextElRight], {opacity: 0, duration: 1});
            // insert fadeIn animation
            triggersRef.current.push(asideRightFadeOutEl.scrollTrigger!);


            ScrollTrigger.refresh();
            return ;
        }
        // -- END OF MOBILE ANIMATION -- //

        // Rerender => before re-animating
        gsap.set([pinBoxEl, pinContextElLeft, pinContextElRight], {opacity: 0});


        // Animation 1: box pin animation
        triggersRef.current.push(ScrollTrigger.create({
            trigger: pinBoxEl,
            start: `center+=${boxHeight} center+=${NAV_HEIGHT}px`,
            end: `${(parentHeight - (boxHeight / 2))} center-=${boxHeight-NAV_HEIGHT}px`,
            pin: true,
            pinSpacing: false,
            scrub: true,
        }));

        // Left-Animation (for pinContextElLeft): context pin animation
        triggersRef.current.push(ScrollTrigger.create({
            trigger: pinContextElLeft,
            start: `center+=${boxHeight} center+=${NAV_HEIGHT}px`,
            end: `${(parentHeight - (boxHeight / 2))} center-=${boxHeight-NAV_HEIGHT}px`,
            pin: true,
            pinSpacing: false,
            scrub: true
        }));

        /** Box Fade In */
        const boxFadeInTrEle = gsap.timeline({
            scrollTrigger: {
                trigger: pinBoxEl,
                start: `bottom-=${parentHeight * 0.4} center`,
                end: `bottom-=${parentHeight * 0.2} center`,
                scrub: 1,
                markers: isDev
            }
        });
        boxFadeInTrEle.fromTo(pinBoxEl, {opacity: 0}, {opacity: 1, duration: 1});
        triggersRef.current.push(boxFadeInTrEle.scrollTrigger!);
        /** Box Fade Out */
        const boxFadeOutTrEle = gsap.timeline({
            scrollTrigger: {
                trigger: pinBoxEl,
                start: `top+=${parentHeight * 0.2} center`,
                end: `top+=${parentHeight * 0.4} center`,
                scrub: 1,
                markers: isDev
            }
        });
        boxFadeOutTrEle.to(pinBoxEl, {opacity: 0, duration: 0.5});
        triggersRef.current.push(boxFadeOutTrEle.scrollTrigger!);
        /** .. */

        /** Aside["Left"] Fade In */
        const asideLeftFadeInTrEle = gsap.timeline({
            scrollTrigger: {
                trigger: parentPenal,
                start: `top+=${parentHeight * 0.2} center`,
                end: `top+=${parentHeight * 0.4} center`,
                scrub: 1,
                markers: isDev
            }
        });
        asideLeftFadeInTrEle.fromTo(pinContextElLeft, {opacity: 0}, {opacity: 1, duration: 1.5});
        triggersRef.current.push(asideLeftFadeInTrEle.scrollTrigger!);

        /** Aside["Left"] Fade Out */
        const asideLeftFadeOutTrEle = gsap.timeline({
            scrollTrigger: {
                trigger: pinBoxEl,
                start: `top+=${parentHeight * 0.2} center`,
                end: `top+=${parentHeight * 0.4} center`,
                scrub: 1,
                markers: isDev
            }
        });
        asideLeftFadeOutTrEle.to([pinContextElLeft], {opacity: 0, duration: 1});
        triggersRef.current.push(asideLeftFadeOutTrEle.scrollTrigger!);

        // after all triggers are all created refresh (after resize settles)
        ScrollTrigger.refresh();
        console.log(`[STICKY] Created: ${triggersRef.current.length} triggers for ${leftAside.title}`)
        // CleanUp Fn
        return () => {
            console.log(`[STICKY] useGsap cleanup - killing ${triggersRef.current.length} triggers for: ${leftAside.title}`)
            triggersRef.current.forEach(t => t.kill());
            triggersRef.current = []
        }
    }, {
        scope: panelRef, dependencies: [isDev, isMobile]
    })

    // proper cleanup
    React.useEffect(() => {
        return () => {
            console.log(`[STICKY] useEffect cleanup for : ${leftAside.title}`);
            triggersRef.current.forEach(t => t.kill());
            triggersRef.current = [];
        }
    }, [leftAside.title])

    return (<div
            ref={panelRef}
            className={cn("panel--area min-h-screen lg:h-screen", // Responsive grid: stack on mobile, 3-column on desktop
                "grid grid-cols-1 lg:grid-cols-[repeat(16,minmax(0,1fr))]", "items-center", //
                "gap-4 lg:gap-0", "px-4 lg:px-12")}
        >
            <div ref={asideLeftRef}
                 className={cn("aside aside--left", "hidden lg:block", "lg:col-start-4 lg:col-end-8", "order-1")}>
                <div
                    className="
                    flex w-full flex-col h-full items-end justify-start pr-4 text-end gap-0.5
                    "
                >
                    <h2 className={cn(typography.h3Typo)}>
                        {leftAside.title}
                    </h2>
                    <p className={cn("font-mono text-sm font-light fit-co")}>
                        {rightAside.summary}
                    </p>
                </div>
            </div>
            <div
                className={cn("flex w-full justify-center items-center", "col-span-1 lg:col-start-8 lg:col-end-10", "order-2")}>
                <IconBox
                    ref={boxRef}
                    className="box--pin text-white"
                    size={iconCfg.iconSize}
                    metaBallsColorCfg={metaBallsCfg}
                    data-speed="0.1"
                >
                    <Icon size={fontSize} style={iconCfg.style}/>
                </IconBox>
            </div>
            {/* RIGHT(bottom of Icon) Element*/}
            <div
                ref={asideRightRef}
                className={cn("aside aside--right", "col-span-1 lg:col-start-10", "lg:col-end-14", "order-3", "mt-4 lg:mt-0 ")}
            >
                <div
                    className="flex w-full flex-col text-center">
                    {/* Mobile: Show title and summary */}
                    <div className="flex flex-col items-center text-center lg:hidden mt-6">
                        <h2 className={cn(typography.h3Typo, "mb-2")}>
                            {leftAside.title}
                        </h2>
                        <p className="font-mono text-sm font-light">
                            {rightAside.summary}
                        </p>
                    </div>
                </div>
            </div>
        </div>);
}
