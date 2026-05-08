"use client"

import React from "react";
import {gsap, useGSAP} from "@workspace/ui/utility/gsap/gsap-utils";
import {cn} from "@workspace/ui/lib/utils";
import {HorizontalScrollDummy} from "@/data/about/horizontal-scroll.dummy";
import HorizontalSection from "@/components/animations/about/items/horizontal-item/horizontal-item";
import { horizontalLoop } from "@workspace/ui/utility/gsap/helper/horizontalLoop";

interface HorizontalItemProps {
    isDev?: boolean;
}

export default function HorizontalScroll({isDev}:HorizontalItemProps) {
    // Ref
    const panelRef = React.useRef<HTMLDivElement>(null);
    const iconRefs = React.useRef<HTMLDivElement[]>([]);

    // contains the loop instance by ref
    const loopRef = React.useRef<gsap.core.Timeline | null>(null);

    // accumulate ref : if unmounted null case
    const setIconRef = (index: number)=>(el:HTMLDivElement | null) => {
        if(el){
            iconRefs.current[index] = el; // mounts : save DOM at current index
        } else{
            iconRefs.current.splice(index, 1); // unmounts : removes current index
        }
    }

    // state

    // when component mounted
    useGSAP(() => {
            // iconRefs target check
            if (iconRefs.current.length === 0) return; // case empty: escape

            // case success:
             loopRef.current = horizontalLoop(iconRefs.current, {
                repeat: -1,
                speed: 0.4
                // paused: starting by true controls with intersection observer is betters way
            });
            return () => {
                loopRef.current?.kill();
                loopRef.current = null;
            }
        },
        {
            scope: panelRef,
        }
    );

    React.useEffect(()=>{
        if(isDev){
            console.log("[HORIZONTAL] Component mounted")
            console.log("[HORIZONTAL] GSAP version:", gsap.version)
            console.log("[HORIZONTAL] iconRefs length", iconRefs.current.length);
        }

        // when not focusing : pause (blocks scroll broken and performance safe
        const el = panelRef.current;
        if(!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry!.isIntersecting){
                    loopRef.current?.play();
                } else{
                    loopRef.current?.pause();
                }
            },
            {
                threshold: 0.1
            }
        );
        observer.observe(el);
        return () => observer.disconnect();

    },[])


    return (
        <div
            ref={panelRef}
            className={cn("w-full pointer-events-none flex justify-center overflow-x-hidden h-fit py-12")}
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
