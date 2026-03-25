'use client';

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {useGSAP} from "@gsap/react";

/**
 * Register GSAP plugins on the client side only
 * This prevents SSR issues and duplicate registrations
 *
 * Reference: https://gsap.com/docs/v3/Installation?checked=core,scrollTrigger
 */
if (typeof  window !== "undefined"){
    /* register plugins */
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

    /* config before any component creates a trigger */
    // ignore MobileResize: stops recalculating on every iOS chrome show/hide
    // limitCallbacks: batches rapid scroll events - reduces lag on low-end phones
    ScrollTrigger.config({
        ignoreMobileResize: true,
        limitCallbacks: true
    });

    /* normalize iOS momentum scroll => scrub doesn't jump */
    // allowNestedScroll: true keeps inner scrollable areas working
    ScrollTrigger.normalizeScroll({
        allowNestedScroll: true,
        lockAxis: false, // off horizontal lock
        // @ts-ignore
        momentum: self=> Math.min(3, self.velocityY / 1000),
    })

}

// Export GSAP and plugins
export {gsap, ScrollTrigger, useGSAP, ScrollSmoother};

/**
 * Utility to clean up all ScrollTrigger instances
 * Use this when unmounting components or navigating between pages
 *
 * Reference: https://gsap.com/docs/v3/Plugins/ScrollTrigger/#methods
 */
export const cleanupScrollTriggers = () => {
    ScrollTrigger.getAll().forEach(t=>t.kill())
}

/**
 * Refresh all ScrollTrigger calculations
 * Useful after layout changes or window resize
 *
 * Reference: https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()
 */
export const refreshScrollTriggers = () => {
    ScrollTrigger.refresh();
}

/**
 * Kill specific tweens by target selector
 * Useful for cleaning up specific animations
 *
 * Reference: https://gsap.com/docs/v3/GSAP/gsap.killTweensOf()
 */
export const kllTweens = (target: gsap.TweenTarget)=>{
    gsap.killTweensOf(target);
}

/**
 * Clear all ScrollTrigger instances and cleanup
 * Use when navigating away pages with ScrollTrigger animations
 */
export const clearScrollTrigger = () => {
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.clearMatchMedia();
    window.scrollTo(0,0);
}

