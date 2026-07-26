import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleGold?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  titleGold,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      {badge && (
        <div className={cn("mb-4", centered && "flex justify-center")}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-400 border border-gold-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        {title}{" "}
        {titleGold && (
          <span className="bg-gold-gradient bg-clip-text text-transparent">
            {titleGold}
          </span>
        )}
      </h2>
      {description && (
        <p className={cn("text-muted-foreground text-lg leading-relaxed max-w-2xl", centered && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
