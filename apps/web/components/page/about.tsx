'use client';

import {cn} from "@workspace/ui/lib/utils";
import SplitText from "@workspace/ui/components/reactbits/spile-text/SplitText";
import React from "react";
import StickyScroll from "@/components/animations/about/sticky-scroll/sticky-scroll";
import HorizontalScroll from "@/components/animations/about/horizontal-scroll/horizontal-scroll";
import '../styles/about.scss';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {InformationModule} from "@/components/animations/about/information/information";
import {
    typography
} from "@workspace/ui/components/ui/tailwind-variations"
import {Headline} from "@/components/common/headline/headline";

export const About = () => {


    return (<div className=" flex flex-col items-center justify-center min-h-screen w-full ">
        <StickyScroll/>
        {/* for spacing */}
        <div className="h-[50vh]"></div>

        <section className={cn("page-container pb-12 flex flex-col justify-center items-center")}>
            <div className="flex flex-col gap-2 w-full">
                <SplitText
                    textAlign="start"
                    tag="h3"
                    text="[Core Stack.]"
                    delay={200}
                    className={cn(typography.h2Typo + " w-full text-7xl")}
                />
                <Headline level="lead">cool Tools.</Headline>
            </div>

            <div className="pb-12"></div>
            <HorizontalScroll/>
            <div className="py-12">
                <Card variant="glass"
                      className={cn(typography.leadTypo, "max-w-prose px-10 py-8 flex flex-col gap-4 leading-relaxed tracking-wide")}>
                    <p>

                        Figma 를 통해 UI 를 디자인 하고, 시멘틱 HTML 과 TailwindCSS 로 웹을 구현합니다.
                    </p>
                    <p>
                        타입 안전성을 위해 typeScript 를 사용하며, UI 컴포넌트는 shadcn/ui, 모노레포 관리는 Turborepo 로 구축합니다.
                    </p>
                </Card>
            </div>
        </section>
        {/* section-3 */}
        <section id="about" className={cn("page-container w-full flex flex-col items-center justify-stretch")}>
            <div
                className={cn(" " + "w-full flex flex-col align-middle items-center justify-start" + " h-full gap-2")}
            >
                <SplitText
                    text="About."
                    textAlign="start"
                    tag="h2"
                    className={cn(typography.h2Typo + "text-start w-full ")}
                    delay={400}
                />
                <p className={cn(typography.leadTypo + " text-start w-full")}>
                    Front End Developer
                </p>
            </div>

            <div className="pb-40"></div>
            {/**/}

            {/**/}
            <InformationModule/>
        </section>

    </div>)
}
