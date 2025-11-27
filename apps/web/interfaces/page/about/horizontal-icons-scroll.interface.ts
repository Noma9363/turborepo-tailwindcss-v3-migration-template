import {basicIconCfg, type metaBallsCfg} from "@/interfaces/page/about/gsap/defaultGsapCfg.interface";
import {CSSMetaBallsProps} from "@workspace/ui/components/reactbits/css-metaballs/CSSMetaBalls";


export interface HorizontalIconsScrollProps {
    isDev?: boolean;
    iconCfg:basicIconCfg;
    metaBallsCfg:CSSMetaBallsProps;
    title: string;

}
