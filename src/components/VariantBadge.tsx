import { siteConfig } from "@/lib/site";

export function VariantBadge() {
  return (
    <p className="text-center text-xs text-white/60">
      {siteConfig.variantLabel}
    </p>
  );
}
