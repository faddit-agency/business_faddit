"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

const profileImages = [
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764812855/sung-wang-g4DgCF90EM4-unsplash_x58li6.jpg",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764812856/mason-wilkes-TMgQMXoglsM-unsplash_hmfnhz.jpg",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764812855/sean-kong--1B_y4wGs-s-unsplash_e3yjut.jpg",
];

export function UserStories() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <>
      <section
        id="user-stories"
        ref={ref}
        className={`container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 transition-all duration-700 ${
          isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-4">
            <h2 id="user-stories-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold px-4">{t.userStories.title}</h2>
            {t.userStories.subtitle && (
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                {t.userStories.subtitle}
              </p>
            )}
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {t.userStories.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg bg-[#333333] p-6 sm:p-8 h-full flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <p className="text-white text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-auto flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={profileImages[index % profileImages.length]}
                        alt={testimonial.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base sm:text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

