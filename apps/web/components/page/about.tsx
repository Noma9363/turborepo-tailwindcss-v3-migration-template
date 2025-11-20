'use client';

import {cn} from "@workspace/ui/lib/utils";
import SplitText from "@workspace/ui/components/reactbits/spile-text/SplitText";
import React from "react";
import StickyScroll from "@/components/animations/about/sticky-scroll";

export const About = () => {

    return (
        <section id="about" className="flex flex-col items-center justify-center min-h-screen w-full ">
            <div className={cn("page-container " + "w-full flex flex-col align-middle items-center justify-start" +
                " h-full")}
            >
                <SplitText
                    text="SEND HELP"
                    delay={250}
                    duration={0.6}
                    className="text-6xl font-semibold"
                />
            </div>

            <StickyScroll/>
        </section>
    )
}
