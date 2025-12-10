"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {cn} from "@workspace/ui/lib/utils";
import React, {CSSProperties} from "react";
import imgUrl from '@workspace/assets/pic_temp.png';
import Image from "next/image";
import {gsap, useGSAP} from "@workspace/ui/utility/gsap/gsap-utils";
import {typography} from "@workspace/ui/components/ui/tailwind-variations";
import './indormation.scss';

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
                                Portrait
                        </CardTitle>
                        <CardDescription className={cn(typography.leadTypo + " h-fit pt-2")}>
                            Hello!
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
                        <CardTitle className={cn(typography.h3Typo)}>Joy han.</CardTitle>
                        <CardDescription className={cn(typography.largeTypo + " h-fit pt-2")}>조이한.</CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.leadTypo + " leading-snug")}>미디어 디자인을 전공하고, <br/>동적인 웹기능과 애니메이션에 관심이 많습니다.</CardContent>
                </Card>
            </div>
            <div data-speed="1.2" className={cn("cont cont__3 h-full")}>
                <Card variant="glass" className="card-parallax-inner w-full h-full">
                    <CardHeader className="justify-start gap-0">
                        <CardTitle className={cn(typography.h3Typo)}>Priority</CardTitle>
                        <CardDescription className={cn(typography.largeTypo + " h-fit pt-2")}>우선순위.</CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.leadTypo + " leading-snug")}>
                        협업을 위해 프로젝트 시스템 준비 및 코드 스타일과 <br/>
                        디렉토리 관리를 우선시 합니다.
                    </CardContent>
                </Card>
            </div>
            <div data-speed="1.2" className={cn("cont cont__4 w-full h-full")}>
                <Card
                    variant="glass"
                    className="card-parallax-inner w-full h-full">
                    <CardHeader className="justify-start gap-0">
                        <CardTitle className={cn(typography.h3Typo)}>Soon.</CardTitle>
                        <CardDescription className={cn(typography.largeTypo + " h-fit pt-2")}>
                            나중에.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.leadTypo + " leading-snug")}>
                        외부 데이터를 받아와 <code>"Pixi js"</code> 로 렌더링 하기
                    </CardContent>
                </Card>
            </div>
            <div data-speed="1.2" className={cn("cont cont__5 w-full h-full")}>
                <Card
                    variant="glass"
                    className="card-parallax-inner w-full h-full">
                    <CardHeader className="justify-start gap-0">
                        <CardTitle className={cn(typography.h3Typo)}>
                            etc.
                        </CardTitle>
                        <CardDescription className={cn(typography.largeTypo+ " h-fit pt-2")}>
                            기타.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.leadTypo + " leading-snug")}>
                        ...
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
