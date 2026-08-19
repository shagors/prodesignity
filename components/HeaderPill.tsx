// components/ui/section-badge.tsx
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
    text?: string;
    className?: string;
    dotClassName?: string;
    icon?: React.ReactNode;
}

export function HeaderPill({
    text = "Our Numbers Speak",
    className,
    dotClassName,
    icon,
}: SectionBadgeProps) {
    return (
        <div className={cn("flex justify-center mb-12 sm:mb-16", className)}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary/85 dark:text-primary/80 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
                {icon ?? (
                    <span
                        className={cn(
                            "w-2 h-2 rounded-full bg-primary animate-pulse",
                            dotClassName,
                        )}
                    />
                )}
                {text}
            </div>
        </div>
    );
}
