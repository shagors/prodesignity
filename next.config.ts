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
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
            },
            { protocol: "https", hostname: "i.ytimg.com" },
            { protocol: "https", hostname: "img.youtube.com" },
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "picsum.photos" },
        ],
    },
};

export default nextConfig;
