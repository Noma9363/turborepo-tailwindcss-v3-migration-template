'use client';

import React from "react";
import {Hero} from "@/components/page/hero";
import {About} from "@/components/page/about";
import {cn} from "@workspace/ui/lib/utils";
import {Projects} from "@/components/page/projects";
import './page.scss';
import {ContactPage} from "@/components/page/contact";

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
                <ContactPage/>
            </div>
        </main>
    )
}

export default Page;
