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


    return (<div className="page-container flex flex-col items-center justify-center min-h-screen">
        {/* for spacing */}

        <div className="pt-32 pb-48 flex flex-col justify-center align-middle">
            <SplitText
                textAlign="center"
                tag="h2"
                text="모듈 • 일관 • 설명"
                delay={300}
                className={cn(typography.h2Typo + " w-full text-7xl border-0")}
            />
            <Headline level="lead" className={cn("pt-8")}>간단히 사용할 수 있으면서 모두가 이해할 수 있게</Headline>
        </div>
        <section className={cn("pb-12 w-full")}>
            <div className="w-full flex flex-col gap-2">
                <SplitText
                    textAlign="start"
                    tag="h3"
                    text="[Core Stack.]"
                    delay={200}
                    className={cn(typography.h2Typo + " w-full text-7xl")}
                />
                <Headline level="lead">cool Tools.</Headline>
                {/* too laggy need to optimize */}
                <HorizontalScroll/>
            </div>
            {/*<StickyScroll/>*/}
            <div className="pb-12"></div>
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
