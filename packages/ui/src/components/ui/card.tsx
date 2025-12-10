import * as React from "react"

import {cn} from "@workspace/ui/lib/utils"
import {cva, type VariantProps} from "class-variance-authority";

const cardVariants = cva(
    "rounded-xl bolder shadow-sm",
    {
        variants:{
            variant:{
                default: "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
                glass: [
                    "bg-white/10 dark:bg-white/5 py-6",
                    "backdrop-blur-sm backdrop-saturate-440",
                    "border-white/20 dark:border-white/10 border ",
                    "shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]",
                    "transition-all duration-300"
                ].join(" ")
            }
        },
        defaultVariants:{
            variant: "default"
        }
    }
)

function Card({className, variant, ...props}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
    return (
        <div
            data-slot="card"
            className={cn(cardVariants({variant}),
                className
            )}
            {...props}
        />
    )
}

function CardHeader({className, ...props}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
                className
            )}
            {...props}
        />
    )
}

function CardTitle({className, ...props}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn("leading-none font-semibold", className)}
            {...props}
        />
    )
}

function CardDescription({className, ...props}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-muted-foreground text-sm", className)}
            {...props}
        />
    )
}

function CardAction({className, ...props}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props}
        />
    )
}

function CardContent({className, ...props}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6", className)}
            {...props}
        />
    )
}

function CardFooter({className, ...props}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
            {...props}
        />
    )
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
}
