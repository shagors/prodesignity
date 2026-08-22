export interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    format: "Full-Form" | "Short-Form";
    thumbnail: string;
    youtubeId: string;
    resolution: "4K UHD" | "1080P";
    badge: "FULL VIDEO" | "REEL / SHORT";
}

export const PORTFOLIO_CATEGORIES = [
    "Video Editing",
    "Podcast",
    "Audio Editing",
    "2D/3D Animation",
    "Graphic Design",
    "Digital Marketing",
    "Web Development",
    "Short Form",
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        id: "gym-commercial",
        title: "Choose Strength — Brand Commercial",
        category: "Video Editing",
        format: "Full-Form",
        thumbnail:
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
        youtubeId: "dQw4w9WgXcQ",
        resolution: "4K UHD",
        badge: "FULL VIDEO",
    },
    {
        id: "travel-fintech",
        title: "Borderless Freedom — Credit Card Campaign",
        category: "Video Editing",
        format: "Full-Form",
        thumbnail:
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200",
        youtubeId: "aqz-KE-bpKQ",
        resolution: "4K UHD",
        badge: "FULL VIDEO",
    },
    {
        id: "tech-podcast-01",
        title: "Silicon Valley Tech Talk — Studio Cut",
        category: "Podcast",
        format: "Full-Form",
        thumbnail:
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200",
        youtubeId: "ScMzIvxBSi4",
        resolution: "4K UHD",
        badge: "FULL VIDEO",
    },
    {
        id: "viral-tiktok-hook",
        title: "Retention Viral Hook & Quick Cuts",
        category: "Short Form",
        format: "Short-Form",
        thumbnail:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
        youtubeId: "dQw4w9WgXcQ",
        resolution: "1080P",
        badge: "REEL / SHORT",
    },
];
