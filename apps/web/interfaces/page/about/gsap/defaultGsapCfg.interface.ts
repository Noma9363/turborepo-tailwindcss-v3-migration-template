import React from "react";
import {type IconType} from "@workspace/ui/components/icons";
import {CSSMetaBallsProps} from "@workspace/ui/components/reactbits/css-metaballs/CSSMetaBalls";


export type basicIconCfg = {

    color?: string;
    iconSize: "sm" | "md" | "lg" | "xl" | "2xl";
    style?: React.CSSProperties;
    icon: IconType;
}

export type metaBallsCfg = CSSMetaBallsProps;
