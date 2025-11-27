import {HorizontalIconsScrollProps} from "@/interfaces/page/about/horizontal-icons-scroll.interface";
import {
    SiCss3,
    SiFigma,
    SiHtml5,
    SiJavascript,
    SiSass, SiShadcnui,
    SiTailwindcss, SiTurborepo,
    SiTypescript
} from "@workspace/ui/components/icons";

export const HorizontalScrollDummy: HorizontalIconsScrollProps[] = [
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
        title: "Html5"
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

        title: "CSS3"
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
        title: 'Sass'
    }, {
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
        title: 'Tailwind CSS',

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
        title: 'Javascript',

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
        title: 'Typescript',

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
        title: 'Figma',

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
        title: 'Shadcn/ui',

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
        title: 'Turborepo',

    },
]
