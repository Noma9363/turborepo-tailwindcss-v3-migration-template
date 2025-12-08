import React from "react";
import {typography} from "@workspace/ui/components/ui/tailwind-variations";

interface HeadlineProps {
    children: React.ReactNode;
    className?: string;
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'inlineCode' | 'p' | 'lead';
}

export const Headline = (
    {
        children,
        className = '',
        level = 'lead'
    }: HeadlineProps
) => {


    const renderHeadline = () => {

        switch (level) {
            case 'h1':
                return (
                    <h1 className={`${typography.h1Typo} w-full ` + className}>
                        {children}
                    </h1>
                );
            case 'h2':
                return (
                    <h2 className={`${typography.h2Typo} w-full  ` + className}>
                        {children}
                    </h2>
                );
            case 'h3':
                return (
                    <h3 className={`${typography.h3Typo} w-full ` + className}>
                        {children}
                    </h3>
                );
            case 'h4':
                return (
                    <h4 className={`${typography.h4Typo} w-full ` + className}>
                        {children}
                    </h4>
                );
            case 'blockquote':
                return (
                    <h5 className={`${typography.blockquoteTypo} w-full ` + className}>
                        {children}
                    </h5>
                );
            case 'inlineCode':
                return (
                    <h6 className={`${typography.inlineCodeTypo} w-full ` + className}>
                        {children}
                    </h6>
                );
            case 'p':
                return (
                    <p className={`${typography.pTypo} w-full ` + className}>
                        {children}
                    </p>
                );
            default:
                return (
                    <span className={`${typography.leadTypo} w-full ` + className}>
                        {children}
                    </span>
                );
        }


    }
    return renderHeadline();
}
