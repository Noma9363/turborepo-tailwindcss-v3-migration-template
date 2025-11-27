import React from "react";
import {IconType} from "@workspace/ui/icons";
import type {basicIconCfg} from "@/interfaces/page/about/gsap/defaultGsapCfg.interface";
import type {metaBallsCfg} from "@/interfaces/page/about/gsap/defaultGsapCfg.interface";

export interface gsapItemProps {
    isDev?:boolean;
    iconCfg:basicIconCfg;
    metaBallsCfg:metaBallsCfg;

    leftAside: {
        title: string;
        sub: string;
    }
    rightAside:{
        summary: string;
    }

}
