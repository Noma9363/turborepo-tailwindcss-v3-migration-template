'use client';

import {HorizontalScroll} from "@/components/page-module/projects/horizontal-scroll/horizontal-scroll";
import {typography} from "@workspace/ui/components/ui/tailwind-variations";
import {cn} from "@workspace/ui/lib/utils";
import {Card} from "@workspace/ui/components/ui/card";
import {ProjectCard} from "@/components/page-module/projects/project-card/project-card";
import {ProjectScroll} from "@/components/page-module/projects/project-scroll/project-scroll";
import {ProjectCardType} from "@/interfaces/page/projects/projectCard/projectCard.interface";
import {Headline} from "@/components/common/headline/headline";
import React from "react";
import '../styles/projects.scss';

export const Projects = () => {

    const dummyProjects:ProjectCardType[] = [
        {
            title: 'title 1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos facere qui. Ad autem',
            img: ''
        },
        {
            title: 'title 2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos facere qui. Ad autem',
            img: ''
        },
        {
            title: 'title 3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos facere qui. Ad autem' +
                '',
            img: ''
        },
        {
            title: 'title 4',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos facere qui. Ad autem',
            img: ''
        },
        {
            title: 'title 5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos facere qui. Ad autem',
            img: ''
        },
        {
            title: 'title 6',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos facere qui. Ad autem',
            img: ''
        },
    ]


    return (
        <div id="projects" className={cn("w-screen pt-16")}>
            <div className={cn("flex rounded flex-col justify-center items-center page-container gap-2 ")}>
                <Headline level="h2">Projects.</Headline>
                <Headline level="lead">vite-react + typescript 로 제작한 페이지들입니다.</Headline>
            </div>
            {/* too much gap for prev element */}
            {/*<HorizontalScroll/>*/}

            <div className="page-container flex flex-col gap-12 h-auto overflow-y-clip overflow-container">
                {dummyProjects.map((dummyProject, index)=>(
                    <ProjectScroll
                        panelClassName={cn(" ")}
                        key={`${dummyProject.title}${index}`}
                        title={dummyProject.title}
                        desc={dummyProject.desc}
                        img={dummyProject.img} isDev
                    />
                ))}
            </div>
        </div>
    )
}
