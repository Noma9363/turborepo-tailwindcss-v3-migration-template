import {gsapItemProps} from "@/interfaces/page/about/sticky-scroll-interface.interfeac";
import {SiHtml5, SiCss3, SiSass, SiTailwindcss, SiJavascript, SiTypescript, SiFigma, SiShadcnui, SiTurborepo} from "@workspace/ui/icons";

export const StickyScrollDummy:gsapItemProps[] = [
    {
        iconCfg: {
            icon:SiHtml5,
            color: "white",
            iconSize: "lg",
            style: {borderRadius: '0.4rem'}
        },
        metaBallsCfg:{
            color: '#731d1d',
            backgroundColor: '#f58d42',
            ballSize: 44,
            speed:0.6,
            blurAmount:10,
            ballCount: 4,
            contrastAmount: 2
        },
        leftAside:{
            title: 'Html5',
            sub: 'Hypertext Markup Language'
        },
        rightAside:{
            summary:'basic building block of the Web.'
        }
    },
    {
        iconCfg: {
            icon: SiCss3,
            color: "white",
            iconSize: "lg",
            style: {borderRadius: '0.4rem'}
        },
        metaBallsCfg:{
            color: '#1e3a8a',
            backgroundColor: '#2563eb',
            ballSize: 34,
            speed:0.8,
            blurAmount:0,
            ballCount: 4,
            contrastAmount: 1.2
        },
        leftAside:{
            title: 'Css3',
            sub: 'Cascading Style Sheets Level 3'
        },
        rightAside:{
            summary:'cornerstone of modern web design.'
        }
    },
    {
        iconCfg: {
            icon: SiSass,
            color: "white",
            iconSize: "lg",
            style: {borderRadius: '0.4rem'}
        },
        metaBallsCfg:{
            color: '#cc6699',
            backgroundColor: '#ff7abf',
            ballSize: 44,
            speed:0.6,
            blurAmount: 0,
            ballCount: 4,
            contrastAmount: 0.93
        },
        leftAside:{
            title: 'Sass',
            sub: 'Syntactically Awesome Style Sheets'
        },
        rightAside:{
            summary:'preprocessor scripting language Css.'
        }
    },
    {
        iconCfg: {
            icon: SiTailwindcss,
            color: "white",
            iconSize: "lg",
            style: {borderRadius: '0.4rem'}
        },
        metaBallsCfg:{
            color: '#009dff',
            backgroundColor: '#3ac8ff',
            ballSize: 40,
            speed: 0.8,
            blurAmount:1,
            ballCount: 4,
            contrastAmount: 0.98
        },
        leftAside:{
            title: 'Tailwind CSS',
            sub: 'Utility-first CSS framework'
        },
        rightAside:{
            summary:'Idk it is simple but...'
        }
    },
    {
        iconCfg: {
            icon: SiJavascript,
            color: "white",
            iconSize: "lg",
            style: {borderRadius: '0.4rem'}
        },
        metaBallsCfg:{
            color: '#eea227',
            backgroundColor: '#eeca27',
            ballSize: 44,
            speed:0.6,
            ballCount: 4,
            blurAmount: 3,
            contrastAmount: 0.9
        },
        leftAside:{
            title: 'Javascript',
            sub: 'Programming Language for the Web.'
        },
        rightAside:{
            summary:'console.log("Foo" == "Bar");'
        }
    },
    {
        iconCfg: {
            icon:SiTypescript,
            color: "white",
            iconSize: "lg",
            style: {borderRadius: '0.4rem'}
        },
        metaBallsCfg:{
            color: '#2563eb',
            backgroundColor: '#3b41bc',
            ballSize: 54,
            speed:0.6,
            ballCount: 5,
            blurAmount:0,
            contrastAmount: 0.87
        },
        leftAside:{
            title: 'Typescript',
            sub: 'Type-Safe JavaScript.'
        },
        rightAside:{
            summary:'console.log("Foo" !== "Bar");'
        }
    },
    {
        iconCfg: {
            icon: SiFigma,
            color: "white",
            iconSize: "lg",
            style: {borderRadius: '0.4rem'}
        },
        metaBallsCfg:{
            color: '#f24e1e',
            backgroundColor: '#562295',
            ballSize: 44,
            speed:0.6,
            ballCount: 4,
            blurAmount:1,
            contrastAmount: 0.92
        },
        leftAside:{
            title: 'Figma',
            sub: 'The Collaborate Interface Design Tool.'
        },
        rightAside:{
            summary:'it is free!'
        }
    },
    {
        iconCfg: {
            icon: SiShadcnui,
            color: "white",
            iconSize: "lg",
            style: {borderRadius: '0.4rem'}
        },
        metaBallsCfg:{
            color: '#000000',
            backgroundColor: '#353535',
            ballSize: 30,
            speed:0.6,
            ballCount: 6,
            blurAmount: 0.4,
            contrastAmount: 1
        },
        leftAside:{
            title: 'Shadcn/ui',
            sub: 'Beautifully designed components.'
        },
        rightAside:{
            summary:'No package, just code.'
        }
    },
    {
        iconCfg: {
            icon: SiTurborepo,
            color: "white",
            iconSize: "lg",
            style: {borderRadius: '0.4rem'}
        },
        metaBallsCfg:{
            color: '#0066f5',
            backgroundColor: '#a80000',
            ballSize: 44,
            speed:0.6,
            blurAmount: 4,
            ballCount: 8,
            contrastAmount: 0.86
        },
        leftAside:{
            title: 'Turborepo',
            sub: 'The high-performance build system.'
        },
        rightAside:{
            summary:'Never build the same thing twice.'
        }
    }

]
