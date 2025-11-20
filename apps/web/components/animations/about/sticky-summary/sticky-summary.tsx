"use client";

import React from "react";
import {IconBox} from "@/components/ui/icon-box/icon-box";
import {gsap, useGSAP, ScrollTrigger} from "@workspace/ui/lib/gsap-utils";
import {cn} from "@workspace/ui/lib/utils";

interface StickySummaryProps {
    iconSize?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
}

export default function StickySummary(
    {
        iconSize = "lg",
        icon
    }: StickySummaryProps
) {
    const defaultFontStyles = " scroll-m-20 font-extrabold tracking-tight text-balance ";


    const panelRef = React.useRef<HTMLDivElement>(null);

    //Animation
    useGSAP(
        () => {
            // set target element
            const pinBoxEl = document.querySelector<HTMLDivElement>('.box--pin');

            // set aside elements
            const pinContextElLeft = document.querySelector<HTMLDivElement>('.aside--left');

            const pinContextElRight = document.querySelector<HTMLDivElement>('.aside--right');

            // get parent height
            const parentPenal = pinBoxEl?.closest<HTMLDivElement>('.panel--area');

            const parentHeight = parentPenal?.offsetHeight || 0;

            /** element start pos in target middle pos
             `top+=${(currentElement.offsetHeight)-(targetHeight / 2)} ...`
             * */

            // Animation 1: box pin animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: pinBoxEl,
                    start: `center+=${pinBoxEl?.offsetHeight} center`,
                    end: `${(parentHeight - (pinBoxEl!.offsetHeight / 2))} center-=${pinBoxEl?.offsetHeight || 0}`,
                    markers: {
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
                    start: `center+=${pinContextElLeft!.offsetHeight || 0} center`,
                    end: `${parentHeight - (pinContextElLeft!.offsetHeight / 2)} center-=${pinContextElLeft?.offsetHeight || 0}`,
                    markers: true,
                    toggleActions: '',
                    pin: true,
                    pinSpacing: false,
                    scrub: 1
                }
            });
            // Right ver
            gsap.timeline({
                /* Animate <Aside> "Right Pin" effect */
                scrollTrigger: {
                    trigger: pinContextElRight,
                    start: `center+=${pinContextElRight?.offsetHeight || 0} center`,
                    end: `${parentHeight - (pinContextElRight!.offsetHeight / 2)} center-=${pinContextElRight?.offsetHeight || 0}`,
                    markers: true,
                    toggleActions: '',
                    pin: true,
                    pinSpacing: false,
                    scrub: 1
                }
            })
            // Animation... <Aside> fade in out
            gsap.timeline({
                /* Animate <Aside> "Left Fade In" effect */
                scrollTrigger:{
                    trigger: pinContextElLeft,
                    start: `bottom-=${parentHeight * 0.4} center`,
                    end: `bottom-=${parentHeight * 0.2} center`,
                    scrub: 1,
                    markers:{
                        startColor: 'pink',
                        endColor: 'skyblue'
                    }
                }
            }).to(pinContextElLeft,{
                opacity: 1,
                duration: 1
            });
            gsap.timeline({
                /* Animate <Aside> "Left Fade Out" effect */
                scrollTrigger:{
                    trigger: pinContextElLeft,
                    start: `top+=${parentHeight * 0.2} center`,
                    end: `top+=${parentHeight * 0.4} center`,
                    scrub:1
                }
            }).to(pinContextElLeft, {
                opacity: 0,
                duration: 1
            });
            // aside right fade in out version
            gsap.timeline({
                /* Animate <Aside> "Right Fade In" effect */
                scrollTrigger:{
                    trigger: pinContextElRight,
                    start: `bottom-=${parentHeight * 0.4} center`,
                    end: `bottom-=${parentHeight * 0.2} center`,
                    scrub: 1
                }
            }).to(pinContextElRight,{
                opacity: 1,
                duration: 1
            });
            gsap.timeline({
                /* Animate Aside "Right Fade Out" effect */
                scrollTrigger:{
                    trigger: pinContextElRight,
                    start: `top+=${parentHeight * 0.2} center`,
                    end: `top+=${parentHeight * 0.4} center`,
                    scrub:1
                }
            }).to(pinContextElRight, {
                opacity: 0,
                duration: 1
            })


            // when animation end
            return () => {
                ScrollTrigger.getAll().forEach(t => t.kill())
            }

        },
        {
            scope: panelRef
        }
    )

    return (
        <div
            ref={panelRef}
            className={cn("panel--area h-screen " +
                "flex justify-around items-start align-top gap-8 "
            )}
        >
            <div className="aside aside--left w-1/3 opacity-0 ">
                <div className="flex flex-col justify-end text-end ">
                    <h2 className={cn("text-3xl whitespace-nowrap " +
                        defaultFontStyles)}>
                        This is title.
                    </h2>
                    <p className={cn("")}>
                        and this is section
                    </p>
                </div>
            </div>
            <div className={cn("flex justify-center items-center " +
                "flex-shrink-0")}>
                <IconBox
                    className="box--pin opacity-0 "
                    size={iconSize}
                    metaBallsColorCfg={{
                        color: '#2563eb',
                        cursorBallColor: '#4a53e7'
                    }}
                    data-speed="0.1"
                >
                    {icon}
                </IconBox>
            </div>
            <div className="aside aside--right w-1/3 opacity-0 ">
                <div className="flex flex-col justify-start items-start">
                    <h3 className={cn(defaultFontStyles + " text-2xl ")}>
                        blabla
                    </h3>
                </div>
            </div>
        </div>
    );
}
