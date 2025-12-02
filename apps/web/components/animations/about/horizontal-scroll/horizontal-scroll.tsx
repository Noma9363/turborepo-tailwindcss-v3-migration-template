"use client"

import React from "react";
import {gsap, useGSAP} from "@workspace/ui/utility/gsap/gsap-utils";
import {cn} from "@workspace/ui/lib/utils";
import {HorizontalScrollDummy} from "@/data/about/horizontal-scroll.dummy";
import HorizontalSection from "@/components/animations/about/items/horizontal-item/horizontal-item";
import { horizontalLoop } from "@workspace/ui/utility/gsap/helper/horizontalLoop";

export default function HorizontalScroll() {
    // Ref
    const panelRef = React.useRef<HTMLDivElement>(null);
    const iconRefs = React.useRef<HTMLDivElement[]>([]);
    // state

    React.useEffect(()=>{
        console.log("[HORIZONTAL] Component mounted")
        console.log("[HORIZONTAL] GSAP version:", gsap.version)
        console.log("[HORIZONTAL] iconRefs length", iconRefs.current.length);
    },[])

    // when component mounted
    useGSAP(() => {
            // iconRefs target check
            if (iconRefs.current.length === 0) return; // case empty: escape

            // case success:
            const loop = horizontalLoop(iconRefs.current, {
                repeat: -1,
                speed: 0.4
            });
            return () => {
                loop.kill()
            }
        },
        {
            scope: panelRef,
        }
    )

    const setIconRef = (index: number) => (el: HTMLDivElement | null) => {
        if (el) iconRefs.current[index] = el;
    }

    return (
        <div
            ref={panelRef}
            className={cn("w-screen flex justify-center overflow-x-hidden h-fit py-12")}
        >
            {/* infinite horizontal loop area */}
            <div className={cn("w-fit flex relative justify-center mx-auto icon-bg")}>
                {HorizontalScrollDummy.map((horizontalItem, idx) => {
                    const {
                        isDev,
                        iconCfg,
                        metaBallsCfg,
                        title
                    } = horizontalItem;
                    return (
                        <HorizontalSection
                            ref={setIconRef(idx)}
                            key={`horizontal-${title}-${idx}`}
                            isDev={isDev}
                            iconCfg={iconCfg}
                            metaBallsCfg={metaBallsCfg}
                            title={title}
                        />
                    )
                })}
            </div>
        </div>
    );
}
