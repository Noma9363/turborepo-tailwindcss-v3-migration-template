import type {Config} from "tailwindcss";
import sharedConfig from "@workspace/ui/tailwind.config";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme:{
      extend:{
          fontFamily:{
              sans: [
                  'var(--font-geist-sans)',
                  'var(--font-noto-sans-kr)',
                  'sans-serif'
              ]
          }
      }
    },
    presets: [sharedConfig]
}
export default config;
