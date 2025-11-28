"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {cn} from "@workspace/ui/lib/utils";
import React, {CSSProperties} from "react";
import imgUrl from '@workspace/assets/pic_temp.png';
import Image from "next/image";
import {gsap, useGSAP} from "@workspace/ui/utility/gsap/gsap-utils";
import './indormation.scss';
import {typography} from "@workspace/ui/components/ui/tailwind-variations";

export const InformationModule = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Animate the inner content, not the grid items
        const cards = containerRef.current.querySelectorAll('[data-speed]');

        cards.forEach((card) => {
            const htmlCard = card as HTMLElement;
            const inner = htmlCard.querySelector('.card-parallax-inner') as HTMLElement;
            if (!inner) return;

            const speedAttr = htmlCard.getAttribute('data-speed') || '1';
            const speed = parseFloat(speedAttr.replace(/clamp\(|\)/g, ''));

            const yMove = (1 - speed) * 320;

            gsap.fromTo(inner,
                {
                    y: -yMove,

                },
                {
                    y: yMove,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: htmlCard, // Trigger on card
                        start: 'center bottom-=10%',
                        end: 'center bottom-=10%',
                        scrub: 0.1,
                        invalidateOnRefresh: true,
                        markers: true
                    }
                }
            );
        });

    }, {
        scope: containerRef,
        dependencies: [],
        revertOnUpdate: true
    });

    return (
        <div className={cn("parent")} ref={containerRef}>
            <div data-speed="1.2" className="cont cont__1 h-full ">
                <Card
                    variant="glass"
                    className={cn("w-full h-full card-parallax-inner overflow-hidden")}
                >
                    <CardHeader className="relative justify-start gap-0">
                        <CardTitle className={cn(typography.h3Typo)}>
                                Eyyy.
                        </CardTitle>
                        <CardDescription className={cn(typography.pTypo + " h-fit")}>
                            Again
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={cn("absolute w-full h-full p-0 top-0 right-0 bottom-0 left-0")}>
                        <Image className={cn("thumbnail")} src={imgUrl} alt="hi"/>
                    </CardContent>
                </Card>
            </div>
            <div data-speed="1.2" className="cont cont__2 w-full h-full">
                <Card variant="glass" className={cn("card-parallax-inner w-full h-full")}>
                    <CardHeader className="justify-start gap-0">
                        <CardTitle className={cn(typography.h3Typo)}>Name val</CardTitle>
                        <CardDescription className={cn(typography.pTypo + " h-fit")}>occupied</CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.smallTypo + " leading-snug")}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardContent>
                </Card>
            </div>
            <div data-speed="1.2" className={cn("cont cont__3 h-full")}>
                <Card variant="glass" className="card-parallax-inner w-full h-full">
                    <CardHeader className="justify-start gap-0">
                        <CardTitle className={cn(typography.h3Typo)}>Priority</CardTitle>
                        <CardDescription className={cn(typography.pTypo + " h-fit")}>what's crucial</CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.smallTypo + " leading-snug")}>
                        blabla describe here blabla..
                    </CardContent>
                </Card>
            </div>
            <div data-speed="1.2" className={cn("cont cont__4 w-full h-full")}>
                <Card
                    variant="glass"
                    className="card-parallax-inner w-full h-full">
                    <CardHeader className="justify-start gap-0">
                        <CardTitle className={cn(typography.h3Typo)}>Soon</CardTitle>
                        <CardDescription className={cn(typography.pTypo + " h-fit")}>Soooooooooooo...</CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.smallTypo + " leading-snug")}>idk</CardContent>
                </Card>
            </div>
            <div data-speed="1.2" className={cn("cont cont__5 w-full h-full")}>
                <Card
                    variant="glass"
                    className="card-parallax-inner w-full h-full">
                    <CardHeader className="justify-start gap-0">                        <CardTitle className={cn(typography.h3Typo)}>etc.</CardTitle>
                        <CardDescription className={cn(typography.pTypo  + " h-fit")}>huh?</CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.smallTypo + " leading-snug")}>etc context here</CardContent>
                </Card>
            </div>
        </div>
    );
}
