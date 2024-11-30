import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "data.typeracer.com",
                pathname: "/misc/badge",
            },
        ],
    },
    /* other config options here */
}

export default nextConfig
