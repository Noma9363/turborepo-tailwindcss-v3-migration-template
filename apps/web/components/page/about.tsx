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
                <SplitText
                    text="SEND HELP"
                    delay={250}
                    className={cn(typography.h2Typo)}
                />
            </section>

            <StickyScroll/>
            {/* for spacing */}
            <div className="h-[50vh]"></div>

            <section className={cn("pb-12 flex flex-col justify-center items-center")}>
                <SplitText
                    text="[Core Stack.]"
                    delay={200}
                    className={cn("" + typography.h2Typo)}
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
                    tag="h2"
                    className={cn("w-fit mx-auto " + typography.h2Typo)}
                    delay={200}
                />
                <div className="pb-40"></div>
                {/**/}

                {/**/}
                <InformationModule/>
            </section>

        </div>
    )
}
