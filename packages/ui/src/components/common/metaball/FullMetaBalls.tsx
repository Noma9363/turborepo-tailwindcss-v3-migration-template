import {MetaBallsProps} from "@workspace/ui/types";
import MetaBalls from "@workspace/ui/components/reactbits/meta-balls/MetaBalls";

interface FullMetaBallsProps extends MetaBallsProps{}

export const FullMetaBalls = (
    {
        ...metaBallsProps
    }:FullMetaBallsProps) => {
    return(
        <MetaBalls
            {...metaBallsProps}
        />
    )
}
