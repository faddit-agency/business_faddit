"use client";

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

        {/* Right: UI Mockup */}
        <div className="relative">
          <div className="rounded-lg border bg-card shadow-lg overflow-hidden">
            {/* Browser Frame */}
            <div className="border-b bg-muted/50 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="flex-1 mx-4 h-6 bg-background rounded text-xs text-center flex items-center justify-center text-muted-foreground">
                faddit.app/projects
              </div>
            </div>

            {/* Mock UI Content */}
            <div className="p-6 bg-background min-h-[400px]">
              <div className="flex gap-6">
                {/* Sidebar */}
                <div className="w-48 space-y-4 hidden sm:block">
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-24"></div>
                    <div className="space-y-1 pl-4">
                      <div className="h-3 bg-muted/50 rounded w-20"></div>
                      <div className="h-3 bg-muted/50 rounded w-16"></div>
                      <div className="h-3 bg-muted/50 rounded w-20"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-20"></div>
                    <div className="space-y-1 pl-4">
                      <div className="h-3 bg-muted/50 rounded w-24"></div>
                      <div className="h-3 bg-muted/50 rounded w-18"></div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 space-y-6">
                  {/* Header */}
                  <div>
                    <div className="h-8 bg-muted rounded w-32 mb-3"></div>
                    <div className="h-4 bg-muted/50 rounded w-48"></div>
                  </div>

                  {/* Style Cards Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="border rounded-lg p-4 space-y-3 bg-card"
                      >
                        <div className="aspect-square bg-muted rounded"></div>
                        <div className="h-4 bg-muted/50 rounded w-20"></div>
                        <div className="h-3 bg-muted/30 rounded w-16"></div>
                      </div>
                    ))}
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2 pt-4 border-t">
                    <div className="h-4 bg-muted rounded w-24 mb-4"></div>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-3">
                        <div className="h-2 w-2 rounded-full bg-muted mt-2"></div>
                        <div className="flex-1">
                          <div className="h-3 bg-muted/50 rounded w-32 mb-1"></div>
                          <div className="h-3 bg-muted/30 rounded w-48"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

