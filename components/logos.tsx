"use client";

import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

export function Logos() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  const placeholderBrands = [
    "BRAND A",
    "BRAND B",
    "BRAND C",
    "BRAND D",
    "BRAND E",
    "BRAND F",
  ];

  return (
    <section
      ref={ref}
      className={`border-y bg-muted/30 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="space-y-8">
          <p className="text-center text-sm text-muted-foreground">
            {t.logos.title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {placeholderBrands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 px-6 text-sm font-medium text-muted-foreground border rounded-md bg-background"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

