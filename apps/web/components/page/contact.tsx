'use client'

import React from "react";
import {cn} from "@workspace/ui/lib/utils";
import {Headline} from "@/components/common/headline/headline";
import {ContactField} from "@/components/page-module/contact/contact-field/contact-field";

export const ContactPage = () => {

    return(
        <div id="contact" className={cn("w-full pb-16")}>

            <div className={cn("flex rounded flex-col justify-center items-center page-container gap-2 ")}>
                <Headline level="h2" className="text-center">Contact.</Headline>
                <Headline level="lead" className="text-center break-all">관심이 있으시다면...</Headline>
            </div>
            <ContactField className="page-container"/>
        </div>
    )
}
