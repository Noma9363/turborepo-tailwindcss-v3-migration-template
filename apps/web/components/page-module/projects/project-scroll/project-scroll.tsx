'use client'

import React from "react";
import {ProjectCard} from "@/components/page-module/projects/project-card/project-card";
import {typography} from "@workspace/ui/components/ui/tailwind-variations";
import {gsap, useGSAP, ScrollTrigger} from "@workspace/ui/utility/gsap/gsap-utils";
import {cn} from "@workspace/ui/lib/utils";

interface ProjectScrollProps {
    isDev?: boolean;
    title: string;
    desc: string;
    img?: React.ReactNode;
    panelClassName?: string;
}

export const ProjectScroll = (
    {
        isDev,
        title,
        desc,
        img,
        panelClassName
    }: ProjectScrollProps
) => {
    const panelRef = React.useRef<HTMLDivElement>(null);
    const cardRef = React.useRef<HTMLDivElement>(null);
    const asideRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // null check
            if (!panelRef.current) return;
            // get custom attribute name
            const speedElements = panelRef.current.querySelectorAll('[data-speed]');

            // selected by attribute name: data-speed ... each element set
            speedElements.forEach((element) => {
                // speed variable will be use in "y" value
                const speed = parseFloat(element.getAttribute('data-speed') || '1');

                gsap.fromTo(element,
                    {
                        // 100 percent ratio
                        // and this y attribute is start point
                        y: 100 * speed,
                    },
                    {
                        // end point
                        y: -50 * speed,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: panelRef.current,
                            start: "top bottom-=105",
                            end: "top bottom-=105",
                            scrub: 1,
                            invalidateOnRefresh: true,
                            markers: isDev
                        }
                    }
                );
            })
        },
        {
            scope: panelRef,
            dependencies: [isDev],
            revertOnUpdate: true
        }
    )

    return (
        <div
            ref={panelRef}
            className={cn("" +
                "project-article " +
                "flex flex-row " +
                "w-full " +
                "gap-8 " +
                "justify-around " +
                "items-center " +
                "" + panelClassName)}
        >
            <div
                ref={cardRef}
                data-speed="2"
                className={cn("flex-1")}
            >
                <ProjectCard
                    title={title}
                    img={img}
                    description={desc}
                />
            </div>
        </div>
    )
}
