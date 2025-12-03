"use client";

import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

export function UserStories() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`container mx-auto max-w-7xl px-4 py-20 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-[48px] font-bold">{t.userStories.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.userStories.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.userStories.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#181818] p-8 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <p className="text-white text-base leading-relaxed whitespace-pre-line">
                  {testimonial.quote}
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <p className="text-white font-semibold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-slate-300 text-sm mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

