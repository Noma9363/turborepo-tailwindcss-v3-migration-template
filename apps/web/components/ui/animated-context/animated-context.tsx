import {AnimatedContentProps} from "@workspace/ui/interfaces/gsap/animated-context";
import AnimatedContent from "@workspace/ui/components/reactbits/animation-content/AnimatedContent";



export const AnimatedContext = (
    {
        children
    }:AnimatedContentProps
) => {
    return (
        <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.6}
        >
            {children}
        </AnimatedContent>
    )
}
