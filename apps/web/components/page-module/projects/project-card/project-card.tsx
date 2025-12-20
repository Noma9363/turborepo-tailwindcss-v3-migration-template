"use client";

import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {Badge} from "@workspace/ui/components/ui/badge";
import {Button} from "@workspace/ui/components/ui/button";
import {cn} from "@workspace/ui/lib/utils";
import {typography} from "@workspace/ui/components/ui/tailwind-variations";
import Image from "next/image";
import {ProjectCardType} from "@/interfaces/page/projects/projectCard/projectCard.interface";

export interface ProjectCardProps extends ProjectCardType{
    ref?: React.RefObject<HTMLDivElement | null>;
    tags?: string[];
    className?: string;
}

export const ProjectCard = (
    {
        title,
        desc,
        role,
        img,
        link,
        tags,
        className
    }: ProjectCardProps
) => {
    return (
        <Card

            variant="glass"
            className={cn(
                "rounded-md overflow-hidden w-full min-h-[420px]",
                "flex flex-col p-0 gap-0",
                className
            )}
        >
            <CardContent className={cn("bg-white h-40 p-6 overflow-hidden shadow-inner relative")}>
                {img && <Image className="rounded shadow-inner absolute top-0 left-0 right-0" src={img} alt={`thumbnail of ${img}`}/>}
                {!img && "img example"}
            </CardContent>
            {/*description area*/}
            <div className={cn(" flex-1 flex flex-col  h-44 py-4")}>
                <CardHeader className={cn("flex flex-col flex-1 justify-around")}>
                    <CardTitle className="">
                        <p className={cn(typography.h4Typo)}>
                            {title}
                        </p>
                        <p className={cn("flex gap-2")}>
                            {tags?.map((tag, index) => (<Badge key={`${tag}-${index}`} className={cn("rounded-sm")}
                                                               variant="secondary">{tag}</Badge>
                            ))}
                        </p>
                    </CardTitle>
                    <CardDescription className={cn("flex flex-col justify-around break-before-all gap-4")}>
                        <p className={cn(typography.leadTypo ,"h-1/3 pb-6")}>
                            {desc}
                        </p>
                        <p className={cn(typography.smallTypo ,"h-1/3 pb-6")}>
                            {role}
                        </p>
                        <Button
                            className={cn("w-fit")}
                            variant="default"
                            onClick={() => {
                                window.open(link)
                            }}
                        >
                            Demo
                        </Button>
                    </CardDescription>
                </CardHeader>
            </div>
        </Card>
    )
}
