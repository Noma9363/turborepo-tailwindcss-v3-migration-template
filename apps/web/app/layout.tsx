import React from "react";
import type {Metadata} from "next";
import {GeistSans} from "geist/font/sans";
import {Providers} from "@/components/providers"
import "@workspace/ui/styles/globals.scss"
import {FloatingNav} from "@/components/ui/navigation/float-navigation";
import {Separator} from "@workspace/ui/components/ui/separator";
import {cn} from "@workspace/ui/lib/utils";


export const metadata: Metadata = {
    title: "Mono Portfolio Layout",
    description: "Portfolio built with Turborepo",
    other:{
        'darkreader-lock' : ''
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
        <head>
            <meta name='darkreader-lock' content="" />
            <title>Joy Han</title>
        </head>
        <body className={`${GeistSans.className} antialiased relative`}>
        <FloatingNav/>
            <Providers>
                    {children}
            </Providers>
            <footer className="page-container">
                <Separator className={cn("my-4")}/>
                <div className={cn("flex-col")}>
                    <section className={cn("pb-6")}>
                        Copyright &copy; joyHan blabla
                    </section>
                    <section className={cn("pb-12")}>
                        policy etc...
                    </section>
                    <section className={cn("pb-20")}>
                        links
                    </section>
                </div>
            </footer>
        </body>
        </html>
    )
}
