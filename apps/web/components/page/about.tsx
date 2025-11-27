'use client';

import {cn} from "@workspace/ui/lib/utils";
import SplitText from "@workspace/ui/components/reactbits/spile-text/SplitText";
import React from "react";
import StickyScroll from "@/components/animations/about/sticky-scroll/sticky-scroll";
import HorizontalScroll from "@/components/animations/about/horizontal-scroll/horizontal-scroll";
import '../styles/about.scss';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {ResizeHandle} from "next/dist/next-devtools/dev-overlay/components/devtools-panel/resize/resize-handle";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@workspace/ui/components/ui/resizable";
import {InformationModule} from "@/components/animations/about/information/information";

export const About = () => {



    return (
        <div id="about" className="flex flex-col items-center justify-center min-h-screen w-full ">
            <section className={cn("page-container " + "w-full flex flex-col align-middle items-center justify-start" +
                " h-full")}
            >
                <SplitText
                    text="SEND HELP"
                    delay={250}
                    duration={0.6}
                    className="text-6xl font-semibold"
                />
            </section>

            <StickyScroll/>
            {/* for spacing */}
            <div className="h-[50vh]"></div>

            <section className={cn("pb-12 flex flex-col justify-center items-center")}>
                <SplitText
                    text="[Core Stack.]"
                    className={cn(" pb-8 scroll-m-20 text-center text-6xl font-bold" +
                    " tracking-tight")}
                />
                <p className={cn("scroll-m-20 text-center text-md font-semibold")}>kill me.</p>

                <HorizontalScroll/>
                <Card className={cn("bg-primary-foreground px-4 py-4 w-4/5 mx-auto border-accent-foreground")} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam architecto deserunt dignissimos dolores eius, enim fuga maiores minus quisquam recusandae soluta veritatis voluptate. Accusantium fugiat pariatur quibusdam sit totam.
                </Card>
            </section>
            {/* section-3 */}
            <section className={cn("w-full flex flex-col items-center justify-stretch")}>
                <SplitText
                    text="[TMI.]"
                    tag="h2"
                    className={cn("w-full mr-auto pb-8 scroll-m-20 text-center text-6xl font-bold tracking-tight")}
                    delay={200}
                />

                {/**/}

                {/**/}
                <InformationModule/>
            </section>

        </div>
    )
}
