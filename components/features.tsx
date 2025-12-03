"use client";

import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

export function Features() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`container mx-auto max-w-5xl px-4 py-20 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">{t.features.title}</h2>
        </div>

        <div className="space-y-20">
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 md:flex-row md:gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
                {/* TODO: 향후 확장 가능 영역 - 파일 & 패턴 뷰어 기능 */}
                {index === t.features.items.length - 1 && (
                  <p className="text-xs text-muted-foreground/70 italic">
                    * 향후 확장 가능 영역
                  </p>
                )}
              </div>

              {/* UI Mockup */}
              <div className="flex-1 w-full">
                <div className="rounded-lg border bg-card shadow-md overflow-hidden">
                  <div className="p-6 bg-background min-h-[300px]">
                    {/* Mock UI Elements */}
                    <div className="space-y-4">
                      <div className="h-6 bg-muted rounded w-32"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-video bg-muted rounded"></div>
                        <div className="space-y-3">
                          <div className="h-4 bg-muted/50 rounded w-full"></div>
                          <div className="h-4 bg-muted/50 rounded w-3/4"></div>
                          <div className="h-4 bg-muted/50 rounded w-5/6"></div>
                        </div>
                      </div>
                      <div className="space-y-2 pt-4 border-t">
                        <div className="h-3 bg-muted/30 rounded w-full"></div>
                        <div className="h-3 bg-muted/30 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

