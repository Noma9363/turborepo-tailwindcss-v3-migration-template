'use client';

import {gsap, useGSAP, ScrollTrigger} from "@workspace/ui/utility/gsap/gsap-utils";
import {cn} from "@workspace/ui/lib/utils";
import React from "react";
import {ProjectCard, ProjectCardProps} from "@/components/page-module/projects/project-card/project-card";
import './styles/index.scss';

export const HorizontalScroll = () => {

    // dummy
    const dummyCardData:ProjectCardProps[] = [
        {
            title: 'Project-1',
            desc: "this is Desc BlaBla...",
            link: '',
            tags: ['A', 'B' , 'C', 'D'],
            img: ''
        },
        {
            title: 'Project-2',
            desc: "this is Desc BlaBla...",
            link: '',
            tags: ['A', 'B' , 'C', 'D'],
            img: ''
        },
        {
            title: 'Project-3',
            desc: "this is Desc BlaBla...",
            link: '',
            tags: ['A', 'B' , 'C', 'D'],
            img: ''
        },
        {
            title: 'Project-4',
            desc: "this is Desc BlaBla...",
            link: '',
            tags: ['A', 'B' , 'C', 'D'],
            img: ''
        },
        {
            title: 'Project-5',
            desc: "this is Desc BlaBla...",
            link: '',
            tags: ['A', 'B' , 'C', 'D'],
            img: ''
        }

    ]


    // ref state
    const containerRef = React.useRef<HTMLDivElement>(null);

    // animation
    useGSAP(() => {
        if (!containerRef.current) return;

        const sections = containerRef.current.querySelectorAll('.slide')

        gsap.to(sections,{
            xPercent: - 100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger:{
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                markers: {
                    startColor: "blue",
                    endColor: "purple"
                },
                end: ()=> "+=" + containerRef.current!.scrollWidth
            }
        })


    }, {
        scope: containerRef,
        dependencies: []
    })



    return (
        <div ref={containerRef} className="horizontal-slider-main overflow-visible">

            {dummyCardData.map((cardData, index)=>(
                <div key={`${index}${cardData.title}`} className={cn("slide box-border")}>
                    <div className={cn("slide__bg box-border w-full pl-8 rounded-md")}>
                        <ProjectCard key={`card${cardData.title}-${cardData.link}`} title={cardData.title} desc={cardData.desc} img={cardData.img} link={cardData.link} tags={cardData.tags} />
                    </div>
                </div>
            ))}


        </div>
    )
}
