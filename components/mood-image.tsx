"use client";

import Link from "next/link";
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
        {/* Overlay for better text readability - 40% opacity */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white text-center leading-relaxed max-w-4xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
            <p>{t.moodImage.text}</p>
            <p>{t.moodImage.text2}</p>
          </div>
          
          {/* Contact Button */}
          <div className="flex justify-center">
            <Link href="/contact">
              <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-black font-medium text-base sm:text-lg md:text-xl rounded-lg hover:bg-gray-100 transition-colors">
                {t.header.nav.contact}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

