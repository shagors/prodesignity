import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "ProDesignity — Shopify Development, Web Design & 3D/2D Animation Agency",
    description:
        "ProDesignity is a digital agency building Shopify stores, fast websites, and 3D, 2D and animated video. Talk to us on WhatsApp: +880 1738-142398.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${poppins.variable} `}
        >
            <body className="min-h-full flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Header />

                    {children}

                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
