import React from "react";
import type {Metadata} from "next";
import "@workspace/ui/styles/globals.scss"
import {GeistSans} from "geist/font/sans";
import {Providers} from "@/components/providers"

export const metadata: Metadata = {
    title: "Mono Portfolio Layout",
    description: "Portfolio built with Turborepo"
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
        <body className={`${GeistSans.className} antialiased`}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
