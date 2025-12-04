"use client";

import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

export function MoodImage() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dsg01xpat/image/upload/v1764837969/alexander-andrews-jNKv4QohAk0-unsplash_uut6j5.jpg)'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-center leading-relaxed max-w-3xl mx-auto space-y-2">
            <p>{t.moodImage.text}</p>
            <p>{t.moodImage.text2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

