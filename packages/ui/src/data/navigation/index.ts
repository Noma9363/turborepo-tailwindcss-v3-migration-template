import {NavRoute} from "@workspace/ui/interfaces/common/app-nav/appNav";

export const commonNavData :NavRoute[] =[
    {
        title: "Home",
        href: "#home",
        description: "Home"
    },
    {
        title: "About",
        href: "#about",
        description: "About"
    },
    {
        title: "Projects",
        href: "#projects",
        description: "Projects",
        items:[
            {
                title: "Sub-1",
                href: "#sub-1",
                description: "this is sub-1 of /Projects"
            }
        ]
    },
    {
        title: "Contact",
        href: "#contact",
        description: "Contact"
    },
]
