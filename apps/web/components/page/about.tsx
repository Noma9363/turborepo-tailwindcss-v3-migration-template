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



    return (
        <div id="about" className=" flex flex-col items-center justify-center min-h-screen w-full ">
            <div className={cn("page-container " + "w-full flex flex-col align-middle items-center justify-start" +
                " h-full gap-2")}
            >
                <Headline level="h2">About.</Headline>
                <Headline level="lead">Front End Developer</Headline>
            </div>

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
                    <Card variant="glass" className={cn(typography.leadTypo, "w-full px-8 break-after-avoid")}>
                        "기본적인 디자인 툴을 사용할 수 있으며, 웹 구축을 위한 시멘틱 태그의 구성과 CSS 스타일링 기법, 타입 안정성을 위해 typescript 를 사용합니다.<br/>
                        UI 라이브러리는 기본적인 외형과 기능을 가지고 있는 "shadcn/ui" 를 사용함과 동시에 해당 UI 를 활용하는 모노레포 구축 시스템 <br/>"Turborepo" 를 사용합니다."
                    </Card>
                </div>
            </section>
            {/* section-3 */}
            <section className={cn("page-container w-full flex flex-col items-center justify-stretch")}>
                <SplitText
                    text="[TMI.]"
                    textAlign="start"
                    tag="h3"
                    className={cn(typography.h2Typo + " text-6xl text-start w-full ")}
                    delay={400}
                />
                <p className={cn(typography.leadTypo+ " text-start w-full")}>
                    Info.
                </p>
                <div className="pb-40"></div>
                {/**/}

                {/**/}
                <InformationModule/>
            </section>

        </div>
    )
}
