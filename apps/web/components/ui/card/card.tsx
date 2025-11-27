import {Card} from "@workspace/ui/components/ui/card";
import {cn} from "@workspace/ui/lib/utils";
import React from "react";
import {MetaBallsProps} from "@workspace/ui/types";
import GlassSurface, {GlassSurfaceProps} from "@workspace/ui/components/ui/glass-surface/GlassSurface";
import {FullMetaBalls} from "@workspace/ui/components/common";

type BoxSize = {
    sm: 'w-12 h-12';
    md: 'w-16 h-16';
    lg: 'w-20 h-20';
}

interface AboutCardProps {
    size?: keyof BoxSize;
    className?: string;
    children: React.ReactNode;
    metaBallsColorCfg?:{
        color?: string,
        cursorBallColor?: string;
    }
}

export const tempAboutCard = (
    {
        size = 'sm',
        className,
        children,
        metaBallsColorCfg
    }: AboutCardProps
) => {
    const sizeMap:BoxSize = {
        sm: 'w-12 h-12',
        md: 'w-16 h-16',
        lg: 'w-20 h-20'
    };

    const metaBallsAttr: MetaBallsProps = {
        // color: "#1e3a8a",
        // cursorBallColor: "#2563eb",
        color: metaBallsColorCfg?.color,
        cursorBallColor: metaBallsColorCfg?.backgroundColor,
        cursorBallSize: 2,
        ballCount: 8,
        animationSize: 8,
        enableMouseInteraction: false,
        enableTransparency: true,
        hoverSmoothness: 0.05,
        clumpFactor: 0.7,
        speed: 3
    }

    const glassSurfaceProps: GlassSurfaceProps = {
        width: "100%",
        height: "100%",
        borderRadius: 16,
        backgroundOpacity: 0.1,
        saturation: 1,
        borderWidth: 0.07,
        brightness: 20,
        opacity: 0.9,
        blur: 8,
        displace: 1.2,
        distortionScale: 182,
        redOffset: 20,
        greenOffset: 14,
        blueOffset: 40
    }

    return (
        <div
            className={cn(
                sizeMap[size], " ",
                className, " ",
                " relative ",
                " box-border ",
                " ring-offset-1",
                " border-sky-200",
                " shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]",
                " overflow-hidden",
                " rounded-[1.2rem] border-opacity-70"
            )}
        >
            <FullMetaBalls
                {...metaBallsAttr}
            />
            <div className={cn("absolute w-full h-full top-0 bottom-0 right-0 left-0" +
                " rounded overflow-hidden")}>
                <GlassSurface
                    {...glassSurfaceProps}
                >
                    {children}
                </GlassSurface>
            </div>
        </div>
    )
}
