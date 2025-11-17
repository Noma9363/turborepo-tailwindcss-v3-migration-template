'use client'

import React, { useCallback } from "react";

export const useScrollToSection = (offset: number = 100) => {
    // callback Function
    const scrollToSection = useCallback((e:React.MouseEvent<HTMLAnchorElement>, href: string)=>{
        if(href.startsWith('#')){
            // case: href value's start with: '#'
            e.preventDefault(); // stop default e:Event function
            // slice char '#' --> '#' {cut..!} 'hrefValue'
            const element = document.getElementById(href.slice(1));
            if(element){
                // case element searched
                const elementPos =  element.offsetTop - offset;
                // set window scroll Top Position
                window.scrollTo({
                    top: elementPos,
                    behavior: "smooth"
                })
            }
        }
    }, [offset]);

    return scrollToSection;
}
