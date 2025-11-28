'use client';

import {HorizontalScroll} from "@/components/page-module/projects/horizontal-scroll/horizontal-scroll";
import {cn} from "@workspace/ui/lib/utils";
import '../styles/projects.scss';

export const Projects = () => {
    return(
        <section id="projects" className={cn("h-screen w-screen")}>
            <h1 className={cn("text-center mx-auto")}>Projects Section</h1>

            <HorizontalScroll/>
        </section>
    )
}
