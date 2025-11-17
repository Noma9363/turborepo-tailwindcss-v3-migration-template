import React from "react";

interface BasicMenuType{
    title: string;
    href: string;
    description?: string
}

export interface SubMenuItem extends BasicMenuType{
    children?: React.ReactNode;
}

export interface NavRoute extends BasicMenuType{
    title: string;
    href: string;
    description?: string;
    items?: SubMenuItem[]
}



export interface AppNavPropsInterface{
    routes: NavRoute[];
    logo?: React.ReactNode;
    className?: string;
}
