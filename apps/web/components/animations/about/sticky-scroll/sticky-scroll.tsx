"use client";

import React from 'react';
import "../styles/index.scss";
import StickySummary from "@/components/animations/about/items/sticky-summary/sticky-summary";
import {StickyScrollDummy} from "@/data/about/sticky-scroll.dummy";
import {useMediaQuery} from "@workspace/ui/hooks/useMediaQuery.hook";


export default function StickyScroll() {
    const BREAKPOINTS = {
        mobile: 480,
        tablet: 768,
        laptop: 1280,
        desktop: 1440,
    }

    const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.mobile}px)`);
    const isTablet = useMediaQuery(`(max-width: ${BREAKPOINTS.tablet}px)`);
    const isLaptop = useMediaQuery(`(max-width: ${BREAKPOINTS.laptop}px)`);

    // resize iconSize
    const getIconSize = () => {
        if(isMobile) return "md";
        if(isTablet) return "xl";
        if(isLaptop) return "xl";
        return "xl";
    }

    const getIconFontSize = () => {
        if(isMobile) return 36;
        if(isTablet) return 48;
        if(isLaptop) return 56;
        return 56;
    }

    return (
        <div
        >
            {StickyScrollDummy.map((stickyDummyItem) => {
                return (
                    <StickySummary
                        key={stickyDummyItem.leftAside.title}
                        iconCfg={{
                            ...stickyDummyItem.iconCfg,
                            iconSize: getIconSize(),
                        }}
                        fontSize={getIconFontSize()}
                        metaBallsCfg={stickyDummyItem.metaBallsCfg}
                        leftAside={stickyDummyItem.leftAside}
                        rightAside={stickyDummyItem.rightAside}

                    />
                )
            })}
        </div>
    );
};

