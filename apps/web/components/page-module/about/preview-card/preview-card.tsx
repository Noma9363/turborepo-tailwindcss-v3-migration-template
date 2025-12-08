import {Card} from "@workspace/ui/components/ui/card";
import {cn} from "@workspace/ui/lib/utils";

interface PreviewCardProps{}

export const PreviewCard = (
    {

    }:PreviewCardProps
) => {
    return(
        <div className={cn("relative")}>
            <Card className={cn("left-0 top-1/2 -translate-y-1/2 absolute w-[28vw] h-[14vh]")}>card-front</Card>
        </div>
    )
}
