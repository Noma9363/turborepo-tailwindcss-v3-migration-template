import React from "react";
import {Card as CardShadcn} from "@workspace/ui/components/ui/card";
import {cn} from '@workspace/ui/lib/utils'
import {CardProps} from "@workspace/ui/interfaces";
import './styles/index.scss';

interface CardCommonProps extends CardProps{
    children: React.ReactNode;
}

export default function Card(
    {
        ...props
    }:CardCommonProps
){
    return(
        <CardShadcn className={cn(props.className, "w-full max-w-sm")}>
            {props.children}
        </CardShadcn>
    )
}
