'use client';

import {ReactNode} from 'react';
import {Parallax as DefaultParallax, ParallaxProps} from 'react-scroll-parallax';

interface DefaultParallaxProps extends ParallaxProps{
    children: ReactNode;
}

export const Parallax = (
    {
        children,
        ...props
    }:DefaultParallaxProps
) => {
    return (
        <DefaultParallax {...props}>
            {children}
        </DefaultParallax>
    );
}
