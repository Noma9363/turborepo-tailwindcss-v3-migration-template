import React from "react";
import {StaticImageData} from "next/image";

export type ProjectCardType = {
    title: string;
    desc: string;
    img?: string|StaticImageData;
    role?: string;

    link?: string
}
