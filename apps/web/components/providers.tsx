"use client"
import {ParallaxProvider} from "@workspace/ui/parallax";
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
    </NextThemesProvider>
  )
}
