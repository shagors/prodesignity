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
            {
                protocol: "https",
                hostname: "i.ytimg.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
