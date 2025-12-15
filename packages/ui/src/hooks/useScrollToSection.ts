'use client'

import React, { useCallback } from "react";

export const useScrollToSection = (offset: number = 100) => {
    const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();

            const element = document.getElementById(href.slice(1));
            if (element) {
                // Check if Lenis is available (for smooth scroll)
                if (typeof window !== 'undefined' && window.lenis) {
                    window.lenis.scrollTo(element, {
                        offset: -offset,
                    })
                } else {
                    // Fallback to native scroll
                    const elementPos = element.offsetTop - offset;
                    window.scrollTo({
                        top: elementPos,
                        behavior: "smooth"
                    })
                }
            }
        }
    }, [offset]);

    return scrollToSection;
}