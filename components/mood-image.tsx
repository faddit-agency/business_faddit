"use client";

import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

export function MoodImage() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`relative w-full h-[400px] md:h-[500px] overflow-hidden transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted/60">
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.05) 35px, rgba(0,0,0,0.05) 70px)'
          }}></div>
        </div>
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-center leading-relaxed max-w-3xl mx-auto">
            {t.moodImage.text}
          </p>
        </div>
      </div>
    </section>
  );
}

