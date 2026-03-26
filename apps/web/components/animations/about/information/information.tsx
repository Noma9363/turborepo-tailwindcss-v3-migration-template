"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {cn} from "@workspace/ui/lib/utils";
import React, {CSSProperties} from "react";
import imgUrl from '@workspace/assets/pic_temp3.png';
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
        <div className={cn("parent", "max-w-prose")} ref={containerRef}>
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
                    <CardContent  className={cn("")}>
                        <div className={cn("bg-gradient-to-r from-blue-500 to-transparent")} />
                        <Image className={cn("thumbnail object-cover h-full mix-blend-normal")} src={imgUrl} alt="profile_image"/>
                    </CardContent>
                </Card>
            </div>
            <div data-speed="1.2" className="cont cont__2 w-full h-full">
                <Card variant="glass" className={cn("card-parallax-inner w-full h-full")}>
                    <CardHeader className="justify-start gap-0">
                        <CardTitle className={cn(typography.h3Typo)}>Joy han.</CardTitle>
                        <CardDescription className={cn(typography.largeTypo + " h-fit pt-2")}>조이한.</CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.leadTypo,"leading-relaxed break-keep")}>미디어 디자인 전공 | 인터랙티브 웹 & 모션</CardContent>
                </Card>
            </div>
            <div data-speed="1.2" className={cn("cont cont__3 h-full")}>
                <Card variant="glass" className="card-parallax-inner w-full h-full">
                    <CardHeader className="justify-start gap-0">
                        <CardTitle className={cn(typography.h3Typo)}>Priority</CardTitle>
                        <CardDescription className={cn(typography.largeTypo + " h-fit pt-2")}>우선순위.</CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.leadTypo,"leading-relaxed break-keep")}>
                        협업 효율을 위한 프로젝트 구조 설계,
                        코드 컨벤션, 그리고 체계적인 디렉토리 관리를 중요시합니다.
                    </CardContent>
                </Card>
            </div>
            <div data-speed="1.2" className={cn("cont cont__4 w-full h-full")}>
                <Card
                    variant="glass"
                    className="card-parallax-inner w-full h-full">
                    <CardHeader className="justify-start gap-0">
                        <CardTitle className={cn(typography.h3Typo)}>What i do</CardTitle>
                        <CardDescription className={cn(typography.largeTypo + " h-fit pt-2")}>
                            무엇을 할 수 있냐면...
                        </CardDescription>
                    </CardHeader>
                    <CardContent className={cn(typography.leadTypo,"leading-relaxed break-keep")}>
                        figma 레이아웃 설계와 웹 개발을 병행합니다.
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
                    <CardContent className={cn(typography.leadTypo, "leading-loose break-keep")}>
                        gsap 을 마스터 하고싶어요
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
