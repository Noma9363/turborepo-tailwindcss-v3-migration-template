import {cn} from "@workspace/ui/lib/utils";
import {FullMetaBalls} from "@workspace/ui/components/common";
import GlassSurface, {GlassSurfaceProps} from "@workspace/ui/components/ui/glass-surface/GlassSurface";
import {MetaBallsProps} from "@workspace/ui/types";
import {useScrollToSection} from "@workspace/ui/hooks/useScrollToSection";
import {AnimatedButton} from "@/components/ui/animated-button/animated-button";
import {gsap, ScrollTrigger} from "@workspace/ui/utility/gsap/gsap-utils";

import '../styles/hero.scss';
import React from "react";
import CSSMetaBalls from "@workspace/ui/components/reactbits/css-metaballs/CSSMetaBalls";

export const Hero = () => {
    // for metaBalls type
    const metaBallsAttr: MetaBallsProps = {
        color: "#1e3a8a",
        cursorBallColor: "#2563eb",
        cursorBallSize: 4,
        ballCount: 8,
        animationSize: 12,
        enableMouseInteraction: true,
        enableTransparency: true,
        hoverSmoothness: 0.08,
        clumpFactor: 0.7,
        speed: 0.25
    }
    const glassSurfaceProps: GlassSurfaceProps = {
        className: cn("px-10 py-10"),
        width: "100%",
        height: "fit-content",
        borderRadius: 32,
        backgroundOpacity: 0.1,
        saturation: 1,
        borderWidth: 0.1,
        brightness: 40,
        opacity: 0.93,
        blur: 11,
        displace: 3.3,
        distortionScale: 180,
        redOffset: 40,
        greenOffset: 40,
        blueOffset: 40
    }


    const handleScroll = useScrollToSection(100);



    React.useEffect(()=>{
        console.log(`[HERO] Compo mounted`);
        console.log(`[HERO] GSAP version:`, gsap.version);
        console.log(`[HERO] Active ScrillTriggers:`, ScrollTrigger.getAll().length);
    },[])


    return (
        <section id="home" className={cn("metallic-bg flex flex-col items-center justify-start gap-12 relative" +
            " w-full" +
            " h-[100vh]", "page-root")}>
            {/* mata-ball parent */}
            <div className={cn(" absolute left-0 top-0 right-0 bottom-0 w-100vh h-100vh z-0 ")}>
                {/* this should be background */}
                {/*2563eb*/}
                <FullMetaBalls
                    {...metaBallsAttr}
                />
            </div>
            {/* context area start here*/}
            <section className={cn("page-container h-[100vh] flex flex-col align-middle justify-center gap-8")}>
                <div className={cn("relative section card-parent w-full pointer-events-none")}>
                    {/* heading area */}
                        <div className={cn("flex flex-col items-start justify-start gap-8")}>
                            <p className={cn("scroll-m-20 text-start text-sm font-bold text-white")}>
                                ver 0.0.0
                            </p>
                            <h1 className={cn("scroll-m-20 text-start text-9xl font-extrabold tracking-tight" +
                                " text-balance")}>
                                Hello.
                            </h1>
                            <p className={cn("scroll-m-20 text-start text-5xl font-bold tracking-tight text-balance" +
                                " pb-8")}>
                                joy. han
                            </p>
                        </div>
                </div>
                <div className={cn("relative section card-parent w-full pointer-events-none")}>
                    <GlassSurface
                        {...glassSurfaceProps}
                    >
                        <div className={cn("w-full backdrop-blur bg-whites bg-opacity-5")}>
                            <p className={cn("text-white")}>
                                <span>Eveniet harum impedit inventore molestias nesciunt quibusdam reiciendis tenetur velit voluptate voluptatibus. Beatae hic impedit libero magni! Consectetur, earum exercitationem fugiat impedit nemo odio porro voluptatum. Aspernatur facere id praesentium.</span>
                            </p>
                        </div>
                    </GlassSurface>
                </div>
                <div className={cn(""+ " relative w-full flex justify-center pt-12")}>
                    <AnimatedButton
                        animateOpacity
                        distance={10}
                        duration={0.8}
                        delay={0.6}
                        initialOpacity={0}
                        scale={1}
                        threshold={0.2}
                        direction="vertical"
                        ease="power3.out"
                        href="#about"
                        onClick={(e)=>handleScroll(e, '#about')}
                    >
                            Click Here
                    </AnimatedButton>
                </div>
            </section>
        </section>
    )
}
