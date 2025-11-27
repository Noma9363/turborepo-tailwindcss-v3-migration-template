'use client';

import React from "react";
import {Hero} from "@/components/page/hero";
import {About} from "@/components/page/about";
import {cn} from "@workspace/ui/lib/utils";
import './page.scss';
import {Projects} from "@/components/page/projects";
import {ScrollTrigger} from "@workspace/ui/utility/gsap/gsap-utils";

const Page = () => {


    return (
        <main className={cn("page-root")}>
            <div className="flex items-center w-full justify-center min-h-svh] flex-col">
                <Hero/>
                <About/>
                <Projects/>
                {/*
                    soooooon
                */}
            </div>
        </main>
    )
}

export default Page;
