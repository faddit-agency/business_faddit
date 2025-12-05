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
      className={`relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      {/* Very Light Pink Background */}
      <div className="absolute inset-0 bg-[#fef7f7]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Text and Button Group */}
            <div className="flex flex-col space-y-6 md:space-y-8">
              {/* Text Section - Left aligned */}
              <div className="text-left max-w-2xl space-y-4">
                {/* Title - Large size, semi-bold weight */}
                <p className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#333333] leading-tight">
                  {t.moodImage.text}
                </p>
                {/* Same size and weight as above */}
                <p className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#333333] leading-tight">
                  {t.moodImage.text2}
                </p>
              </div>
              
              {/* Contact Button - Black background with white text */}
              <div className="flex justify-start">
                <Link href="/contact">
                  <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-[#333333] text-white font-medium text-base sm:text-lg md:text-xl rounded-xl hover:bg-[#1a1a1a] transition-colors">
                    {t.header.nav.contact}
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Graphic Element Group - Gradient Circles */}
            <div className="hidden md:block relative flex-shrink-0 w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] -my-20 md:-my-32">
              {/* Concentric Gradient Circles */}
              <div className="absolute inset-0 rounded-full" style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(99, 102, 241, 0.25) 20%, rgba(79, 70, 229, 0.2) 40%, rgba(129, 140, 248, 0.15) 60%, rgba(196, 181, 253, 0.1) 80%, transparent 100%)',
              }}></div>
              <div className="absolute inset-4 rounded-full" style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(99, 102, 241, 0.3) 30%, rgba(129, 140, 248, 0.2) 60%, transparent 100%)',
              }}></div>
              <div className="absolute inset-8 rounded-full" style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(99, 102, 241, 0.4) 50%, transparent 100%)',
              }}></div>
              
              {/* Collection Items - Fashion Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {/* Shirt Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-lg shadow-lg border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  {/* Dress Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-lg shadow-lg border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  {/* Hanger Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-lg shadow-lg border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  {/* Grid/Collection Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-md rounded-lg shadow-lg border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
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

