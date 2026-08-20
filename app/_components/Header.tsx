import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "./MobileMenu";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full bg-card-bg dark:bg-dark-card-bg backdrop-blur-md border-b border-border-color dark:border-dark-border-color transition-colors duration-300 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative h-8 sm:h-9 md:h-10 w-auto transition-transform duration-200 group-hover:scale-105">
                            <Image
                                src="/assets/logo/prodesignity-logo-dark.png"
                                alt="ProDesignity Logo"
                                width={180}
                                height={40}
                                className="h-full w-auto object-contain hidden dark:block"
                                priority
                            />
                            <Image
                                src="/assets/logo/prodesignity-logo-light.png"
                                alt="ProDesignity Logo"
                                width={180}
                                height={40}
                                className="h-full w-auto object-contain dark:hidden block"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white/70 hover:bg-slate-100/70 dark:hover:bg-slate-800/50 rounded-lg transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Controls: Theme Switcher & CTA */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <ThemeToggle />

                        <Link
                            href="/contact"
                            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-brand-violet to-brand-blue hover:from-primary-hover hover:to-brand-blue dark:from-dark-brand-violet dark:to-dark-brand-blue dark:hover:from-dark-primary-hover dark:hover:to-dark-brand-blue rounded-xl shadow-md transition-all duration-200"
                        >
                            Get Started
                        </Link>

                        <MobileMenu navLinks={navLinks} />
                    </div>
                </div>
            </div>
        </header>
    );
}
