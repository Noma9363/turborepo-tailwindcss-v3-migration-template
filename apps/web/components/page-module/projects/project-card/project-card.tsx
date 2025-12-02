"use client";

import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {Badge} from "@workspace/ui/components/ui/badge";
import {Button} from "@workspace/ui/components/ui/button";
import {cn} from "@workspace/ui/lib/utils";
import {typography} from "@workspace/ui/components/ui/tailwind-variations";

export interface ProjectCardProps{
    title: string;
    description: string;
    img: React.ReactNode;
    link?: string;
    tags?: string[];
}

export const ProjectCard = (
    {
        title,
        description,
        img,
        link,
        tags
    }:ProjectCardProps


) => {
    return(
        <Card
            variant="glass"
            className={cn("rounded-md overflow-hidden w-full h-fit " +
            " flex flex-col justify-stretch p-0 " +
            " ")}
        >
            <CardContent className={cn("bg-blue-950 h-44")}>
                {img}
            </CardContent>
            <CardHeader className={cn("pt-6")}>
                <CardTitle>
                    <p className={cn("pb-4")}>
                        {title}
                    </p>
                    <p className={cn("flex gap-2")}>
                        {
                            tags?.map((tag, index)=>(<Badge key={`${tag}-${index}`} className={cn("rounded-sm")} variant="secondary">{tag}</Badge>
                            ))
                        }
                    </p>
                </CardTitle>
                <CardDescription className={cn("pt-2")}>
                    <p>
                        {description}
                    </p>
                </CardDescription>
            </CardHeader>
            <CardFooter className={cn("py-4 flex justify-start")}>
                <Button
                    onClick={()=>{window.open(link)}}
                >
                    Demo
                </Button>
            </CardFooter>
        </Card>
    )
}
