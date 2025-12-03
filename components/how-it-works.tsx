"use client";

import { useI18n } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how-it-works" className="container mx-auto max-w-5xl px-4 py-20">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            {t.howItWorks.title}
          </h2>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-border"></div>

            {/* Steps */}
            <div className="relative grid grid-cols-4 gap-4">
              {t.howItWorks.steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg relative z-10">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-6">
          {t.howItWorks.steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                {index < t.howItWorks.steps.length - 1 && (
                  <div className="w-0.5 h-full bg-border mx-auto mt-2 min-h-[60px]"></div>
                )}
              </div>
              <Card className="flex-1">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

