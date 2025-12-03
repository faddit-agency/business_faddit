"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t, locale } = useI18n();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="container mx-auto max-w-5xl px-4 py-20 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-6">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {t.hero.tagline}
          </p>
          <h1 className="text-3xl font-bold tracking-tight leading-relaxed md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed">
            {locale === "ko" ? (
              <>
                누구나 시작할 수 있는
                <br />
                패션 디자인 솔루션
              </>
            ) : (
              t.hero.headline
            )}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto"
            >
              {t.hero.ctaPrimary}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection("product")}
              className="w-full sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Right: Hero GIF */}
        <div className="relative">
          <div className="rounded-lg border bg-card shadow-lg overflow-hidden">
            <div className="relative w-full aspect-video">
              <Image
                src="https://res.cloudinary.com/dsg01xpat/image/upload/v1764743215/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2025-07-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.25.43_dkirx0.gif"
                alt="faddit product demo"
                fill
                className="object-contain"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

