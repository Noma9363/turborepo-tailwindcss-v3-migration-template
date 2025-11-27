"use client";

import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@workspace/ui/components/ui/resizable";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {cn} from "@workspace/ui/lib/utils";
import React from "react";
import './indormation.scss';
import imgUrl from '@workspace/assets/pic_temp.png';
import Image from "next/image";
import GlassSurface, {GlassSurfaceProps} from "@workspace/ui/components/ui/glass-surface/GlassSurface";
import {useGSAP} from "@workspace/ui/utility/gsap/gsap-utils";

export const InformationModule = () => {
    // ref
    const panelRef = React.useRef<HTMLDivElement>(null);
    const cardRef = React.useRef<HTMLDivElement>(null);

    // animation
    useGSAP(
        ()=>{
            // set null check
            if(!panelRef.current || !cardRef.current){
                return; // case false: escape
            }
            // success case: initializing animation
            const penalEl = panelRef.current;
            const cardEl = cardRef.current;
        }
    )

    const glassCfg: GlassSurfaceProps = {
        width: "100%",
        height: "100%",
        borderRadius: 16,
        backgroundOpacity: 0.1,
        saturation: 1,
        borderWidth: 0.07,
        brightness: 20,
        opacity: 0.9,
        blur: 10,
        displace: 1.2,
        distortionScale: 100,
        redOffset: 15,
        greenOffset: 34,
        blueOffset: 60,
        className: "p-12 absolute left-0 top-0 right-0 bottom-0 w-[80%] h-[80%]"
    }


    return (
        <div
            className={cn("parent")}
            ref={panelRef}
        >
            <Card
                ref={cardRef}
                className={cn("cont flex flex-col justify-stretch items-start relative cont__1 h-full" +
                    " bg-primary-foreground" +
                    " shadow-card-foreground" +
                    " border-primary-foreground " +
                    " overflow-hidden ")}
            >
                <CardHeader className="relative">
                    <CardTitle className={cn()}>
                        <h2 className={cn("scroll-m-20 text-start text-6xl font-bold tracking-tight  ")}>
                            Blabla.
                        </h2>
                    </CardTitle>
                    <CardDescription className="relative">
                        Again
                    </CardDescription>
                </CardHeader>
                <CardContent className={cn("overflow-hidden h-full")}>
                    <Image width={128} height={128} className={cn("thumbnail ")} src={imgUrl} alt="hi"/>
                </CardContent>
                <CardFooter className="relative">
                    kill me.
                </CardFooter>
            </Card>
            <Card className={cn("cont cont__2 w-full h-full bg-primary-foreground shadow-card-foreground ")}>
                <CardHeader>
                    <CardTitle>
                        cont 2
                    </CardTitle>
                    <CardDescription>
                        Desc
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    ...content...
                </CardContent>
                <CardFooter>
                    footer
                </CardFooter>
            </Card>
            <Card className={cn("cont cont__3 w-full h-full bg-primary-foreground shadow-card-foreground ")}>
                <CardHeader>
                    <CardTitle>
                        cont 3
                    </CardTitle>
                    <CardDescription>
                        Desc
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    ...content...
                </CardContent>
                <CardFooter>
                    footer
                </CardFooter>
            </Card>
            <Card className={cn("cont cont__4 w-full h-full bg-primary-foreground shadow-card-foreground ")}>
                <CardHeader>
                    <CardTitle>
                        cont 4
                    </CardTitle>
                    <CardDescription>
                        Desc
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    ...content...
                </CardContent>
                <CardFooter>
                    footer
                </CardFooter>
            </Card>
            <Card className={cn("cont cont__5 w-full h-full bg-primary-foreground shadow-card-foreground ")}>
                <CardHeader>
                    <CardTitle>
                        cont 5
                    </CardTitle>
                    <CardDescription>
                        Desc
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    ...content...
                </CardContent>
                <CardFooter>
                    footer
                </CardFooter>
            </Card>
        </div>

    )
}
