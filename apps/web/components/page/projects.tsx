'use client';

import {HorizontalScroll} from "@/components/page-module/projects/horizontal-scroll/horizontal-scroll";
import {typography} from "@workspace/ui/components/ui/tailwind-variations";
import {cn} from "@workspace/ui/lib/utils";
import {Card} from "@workspace/ui/components/ui/card";
import '../styles/projects.scss';

export const Projects = () => {
    return (
        <section id="projects" className={cn("w-screen ")}>
            <div className={cn("flex flex-col gap-12 justify-center items-center page-container ")}>
                <h1
                    className={cn("text-center w-full mx-auto" +
                        ` ${typography.h2Typo}`)}
                >
                    Projects
                </h1>
                <Card variant="glass" className={cn(`${typography.blockquoteTypo} w-full`)}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci aspernatur beatae deserunt dicta, dolorum ex, fugiat id laborum libero maxime minus natus neque nihil officia optio saepe voluptas voluptatem!</span>
                </Card>
            </div>
            <HorizontalScroll/>
        </section>
    )
}
