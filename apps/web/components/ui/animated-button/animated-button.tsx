import React from "react";
import AnimatedContent from "@workspace/ui/components/gsap/animation-content/AnimatedContent";
import Link from "next/link";
import {AnimatedContentProps} from "@workspace/ui/interfaces/gsap/animated-context";
import {UrlObject} from "url";
import {cn} from "@workspace/ui/lib/utils";

interface AnimatedButtonProps extends AnimatedContentProps{
    href: string; // Link href
    onClick : (e:React.MouseEvent<HTMLAnchorElement>)=> void // Link OnClick Event
}

export const AnimatedButton = (
    {
        href,
        onClick,
        children,
        ...animateProps
    }:AnimatedButtonProps
) => {


    return(
        <AnimatedContent
            {...animateProps}
        >
            <Link
                href={href}
                onClick={onClick}
                className={cn("transition-all ease-linear text-blue-700 bg-white h-fit py-4 px-8 rounded-md ring-1" +
                    " ring-offset-1" +
                    " border-sky-200" +
                    " shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]" +
                    " hover:backdrop-blur hover:bg-white/0 hover:text-white hover:font-normal" +
                    " active:ring-offset-2 active:ring-1 active:font-semibold")}
            >
                {children}
            </Link>
        </AnimatedContent>
    )
}
