import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/zustand"],
  sassOptions: {
    includePaths: [
      path.join(__dirname, "../../packages/ui/src/styles"),
    ],
    silenceDeprecations: ["legacy-js-api"],
  },
}

export default nextConfig