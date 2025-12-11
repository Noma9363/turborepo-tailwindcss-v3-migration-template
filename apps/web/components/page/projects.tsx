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
            title: '피규어 쇼핑몰',
            desc: '레진 재질 기반 피규어 쇼핑몰 사이트입니다. UI 라이브러리는 Mui 를 사용하였고 아토믹 디자인 방식으로 구성되어 있습니다.',
            img: '',
            link: 'https://shop-web-inquiry-demo.vercel.app/',
        },
        {
            title: '젠하이저 리브랜딩',
            desc: '기존 젠하이저 사이트를 리모델링 해봤습니다. UI 라이브러리는 shadcn/ui 를 사용하였고 협업프로젝트인 만큼 디렉토리 공유성에 초점을 두었습니다.',
            img: '',
            link: ''
        },
        {
            title: 'Fetch',
            desc: '간단한 패치 앱' +
                '',
            img: ''
        },
        {
            title: 'Firebase',
            desc: 'form 이벤트로 db를 firebase 에 저장하는 앱',
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

            <div className="page-container grid sm:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-4 h-auto overflow-y-clip overflow-container">
                {dummyProjects.map((dummyProject, index)=>(
                    <ProjectScroll
                        panelClassName={cn("")}
                        key={`${dummyProject.title}${index}`}
                        title={dummyProject.title}
                        desc={dummyProject.desc}
                        img={dummyProject.img}
                        link={dummyProject.link}
                        isDev
                    />
                ))}
            </div>
        </div>
    )
}
