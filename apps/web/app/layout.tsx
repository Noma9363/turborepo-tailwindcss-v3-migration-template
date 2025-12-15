import React from "react";
import type {Metadata} from "next";
import {GeistSans} from "geist/font/sans";
import {Providers} from "@/components/providers"
import {FloatingNav} from "@/components/ui/navigation/float-navigation";
import {Separator} from "@workspace/ui/components/ui/separator";
import {cn} from "@workspace/ui/lib/utils";
import {Inter, Noto_Sans_KR} from "next/font/google";

import "@workspace/ui/styles/globals.scss";
import "./page.scss";
import {SmoothScrollProvider} from "@/components/smooth-scroll-provider/smooth-scroll-provider";

/* font setup */
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

const notoSansKr = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-noto-sans-kr',
    display: 'swap'
});


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
        <html lang="ko" className={cn(`scroll-smooth ${GeistSans.variable} ${notoSansKr.variable}`)} suppressHydrationWarning>
        <head>
            <meta name='darkreader-lock' content="" />
            <title>Joy Han</title>
        </head>
        <body className={cn(`antialiased relative`, GeistSans.className)}>
        <SmoothScrollProvider>


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
        </SmoothScrollProvider>
        </body>
        </html>
    )
}
