'use client';

import { ParallaxProvider as ScrollParallaxProvider } from 'react-scroll-parallax';
import type { ReactNode } from 'react';

interface ParallaxProviderProps {
    children: ReactNode;
}

export function ParallaxProvider({ children }: ParallaxProviderProps) {
    return <ScrollParallaxProvider>{children}</ScrollParallaxProvider>;
}
