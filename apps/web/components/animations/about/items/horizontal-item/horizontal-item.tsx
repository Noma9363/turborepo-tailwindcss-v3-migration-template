"use client"

import React from "react";
import {IconBox} from "@/components/ui/icon-box/icon-box";
import {cn} from "@workspace/ui/lib/utils";
import {HorizontalIconsScrollProps} from "@/interfaces/page/about/horizontal-icons-scroll.interface";

interface HorizontalSectionProps extends HorizontalIconsScrollProps {

}

const HorizontalSection = React.forwardRef<HTMLDivElement, HorizontalSectionProps>(

    ({iconCfg, metaBallsCfg, title}, ref) => {

        const Icon = iconCfg.icon;
        const defaultFontStyles = " scroll-m-20 font-extrabold tracking-tight text-balance ";
        return (
            <div
                ref={ref}
                className={cn(" flex-shrink-0 px-1.5 ")}
            >
                <div className={cn("flex flex-col justify-center text-center align-middle items-center gap-2 px-4" +
                    "")}>
                    <IconBox
                        size={iconCfg.iconSize}
                        className={cn("aspect-square")}
                        metaBallsColorCfg={metaBallsCfg}
                    >
                        <Icon style={iconCfg.style} size={44}/>
                    </IconBox>
                    <p className={cn("font-mono text-sm font-light fit-co")}>{title}</p>
                </div>
            </div>
        );
    }
);

HorizontalSection.displayName = 'HorizontalSection';
export default HorizontalSection;
