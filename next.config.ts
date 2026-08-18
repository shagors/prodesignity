import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                port: "",
            },
            {
                protocol: "https",
                hostname: "commons.wikimedia.org",
                port: "",
            },
        ],
    },
};

export default nextConfig;
