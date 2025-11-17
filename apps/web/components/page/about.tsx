'use client';

import {cn} from "@workspace/ui/lib/utils";
import SplitText from "@workspace/ui/components/gsap/spile-text/SplitText";
import {Parallax} from "@workspace/ui/components/parallax";
import {loremDummy20} from "@workspace/ui/data/lorem/lorem.dummy";
import Image from "next/image";

import profileImg from '@workspace/assets/pic_face_ratio.png'
import React from "react";

export const About = () => {

    const endElementRef = React.useRef<HTMLDivElement|null>(null);
    const [endPoint, setEndPoint] = React.useState<number>(0)
    React.useEffect(()=>{
        if(endElementRef.current){
            const offsetBottom =(endElementRef.current.offsetTop) + (endElementRef.current.offsetHeight);
            //
            console.log('offsetBottom',offsetBottom);
            setEndPoint(offsetBottom)
        }
    },[])

    return (
        <section id="about" ref={endElementRef} className="flex flex-col items-center justify-center min-h-svh w-full h-[100vh] z-10">
            <div className={cn("page-container " + "w-full flex flex-col align-middle items-center justify-start" +
                " h-full")}
            >
                <div className={cn("content content--1")}>
                    <Parallax
                        speed={30}
                        startScroll={0}
                        endScroll={endPoint}
                    >
                        <SplitText
                            text="WTF"
                            delay={250}
                            duration={0.6}
                            className={cn("text-6xl font-semibold text-center mt-20")}
                        />
                    </Parallax>
                </div>
                <div className={cn("content content--2")}>
                    <Parallax
                        speed={30}
                    >
                        <Image className={cn("overflow-hidden rounded-md")} src={profileImg} alt="face"/>
                    </Parallax>
                </div>

                <div className={cn("content content--3")}>
                    <Parallax>
                        {loremDummy20}
                    </Parallax>
                </div>
            </div>
        </section>
    )
}
