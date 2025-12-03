"use client";

import { useI18n } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/lib/use-in-view";

export function UserStories() {
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
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">{t.userStories.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.userStories.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.userStories.testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm font-medium mt-1">{testimonial.brand}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

