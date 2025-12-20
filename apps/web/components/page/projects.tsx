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

import tn_img1 from '@workspace/assets/demo_thumb1.png';
import tn_img2 from '@workspace/assets/demo_thumb2.png';


export const Projects = () => {

    const dummyProjects:ProjectCardType[] = [
        {
            title: '피규어 쇼핑몰',
            desc: 'MUI 기반 협업 프로젝트',
            img: tn_img1,
            role: '레이아웃, 관리자, 문의, 상품관리',
            link: 'https://shop-web-inquiry-demo.vercel.app/',
        },
        {
            title: '젠하이저 리브랜딩',
            desc: 'shadcn/ui 기반 협업 프로젝트',
            role: '레이아웃, Outlet 중첩라우팅, 메인페이지, GNB',
            img: tn_img2,
            link: 'https://co-op-front-final.vercel.app/'
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

            <div className="max-w-prose mx-auto pt-32 grid sm:grid-cols-2 md:grid-cols-2 grid-rows-1 gap-4 overflow-y-clip overflow-container">
                {dummyProjects.map((dummyProject, index)=>(
                    <ProjectScroll
                        panelClassName={cn("h-full")}
                        key={`${dummyProject.title}${index}`}
                        title={dummyProject.title}
                        desc={dummyProject.desc}
                        img={dummyProject.img}
                        role={dummyProject.role}
                        link={dummyProject.link}
                        isDev
                    />
                ))}
            </div>
        </div>
    )
}
