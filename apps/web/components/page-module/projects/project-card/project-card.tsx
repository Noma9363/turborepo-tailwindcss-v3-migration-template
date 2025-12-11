"use client";

import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {Badge} from "@workspace/ui/components/ui/badge";
import {Button} from "@workspace/ui/components/ui/button";
import {cn} from "@workspace/ui/lib/utils";
import {typography} from "@workspace/ui/components/ui/tailwind-variations";

export interface ProjectCardProps {
    ref?: React.RefObject<HTMLDivElement | null>;
    title: string;
    description: string;
    img: React.ReactNode;
    link?: string;
    tags?: string[];
    className?: string;
}

export const ProjectCard = (
    {
        title,
        description,
        img,
        link,
        tags,
        className
    }: ProjectCardProps
) => {
    return (
        <Card

            variant="glass"
            className={cn(" rounded-md overflow-hidden w-full h-fit min-h-[420px] " +
                " flex flex-col p-0 gap-4 justify-around" + className)}
        >
            <CardContent className={cn("bg-blue-950 h-40 p-6")}>
                {img}
                img example
            </CardContent>
            {/*description area*/}
            <div className={cn(" flex-1 flex flex-col  h-44 py-4")}>
                <CardHeader className={cn("flex flex-col flex-1 justify-around")}>
                    <CardTitle className="">
                        <p className={cn("")}>
                            {title}
                        </p>
                        <p className={cn("flex gap-2")}>
                            {tags?.map((tag, index) => (<Badge key={`${tag}-${index}`} className={cn("rounded-sm")}
                                                               variant="secondary">{tag}</Badge>
                            ))}
                        </p>
                    </CardTitle>
                    <CardDescription className={cn("flex flex-col  gap-4")}>
                        <p className={cn("h-1/3 overflow-hidden text-ellipsis pb-6")}>
                            {description}
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
