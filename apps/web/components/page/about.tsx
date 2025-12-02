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

export const About = () => {



    return (
        <div id="about" className=" flex flex-col items-center justify-center min-h-screen w-full ">
            <section className={cn("page-container " + "w-full flex flex-col align-middle items-center justify-start" +
                " h-full")}
            >
                <h2
                    className={cn( `${typography.h2Typo} w-full text-start`, )}
                >
                    About.
                </h2>
                <span
                    className={cn(`${typography.leadTypo} w-full text-start`)}
                >
                    Front End Developer
                </span>
            </section>

            <StickyScroll/>
            {/* for spacing */}
            <div className="h-[50vh]"></div>

            <section className={cn("pb-12 flex flex-col justify-center items-center")}>
                <SplitText
                    textAlign="start"
                    tag="h3"
                    text="[Core Stack.]"
                    delay={200}
                    className={cn(typography.h2Typo + " w-full text-7xl")}
                />

                <div className="pb-12"></div>
                <HorizontalScroll/>
                <div className="page-container">
                    <Card variant="glass" className={cn(" px-4 " + typography.pTypo)}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam architecto deserunt dignissimos dolores eius, enim fuga maiores minus quisquam recusandae soluta veritatis voluptate. Accusantium fugiat pariatur quibusdam sit totam.
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
