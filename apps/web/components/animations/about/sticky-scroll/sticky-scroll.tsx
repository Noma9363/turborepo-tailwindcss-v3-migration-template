"use client";

import React from 'react';
import "../styles/index.scss";
import StickySummary from "@/components/animations/about/items/sticky-summary/sticky-summary";
import {StickyScrollDummy} from "@/data/about/sticky-scroll.dummy";


export default function StickyScroll() {

    return (
        <div
        >
            {StickyScrollDummy.map((stickyDummyItem) => {
                return (
                    <StickySummary
                        key={stickyDummyItem.leftAside.title}
                        iconCfg={stickyDummyItem.iconCfg}
                        metaBallsCfg={stickyDummyItem.metaBallsCfg}
                        leftAside={stickyDummyItem.leftAside}
                        rightAside={stickyDummyItem.rightAside}
                    />
                )
            })}
        </div>
    );
};

