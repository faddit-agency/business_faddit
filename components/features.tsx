"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch((error) => {
        console.log("Video play failed:", error);
      });
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-contain"
      />
    </div>
  );
}

export function Features() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  const getDotColorClass = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-400";
      case "blue":
        return "bg-blue-500";
      case "purple":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section
      id="product"
      ref={ref}
      className={`container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-12 sm:space-y-16 md:space-y-20">
        {/* Title Section */}
        <div className="text-center space-y-4 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{t.features.title}</h2>
          {t.features.subtitle && (
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          )}
        </div>

        {/* Feature Items */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {t.features.items.map((feature, index) => (
            <div
              key={feature.id || index}
              id={`feature-${feature.id || index}`}
              className={`flex flex-col gap-8 sm:gap-10 md:flex-row md:gap-16 items-center ${
                feature.layout === "image-right" ? "md:flex-row-reverse" : ""
              }`}
            >
            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="rounded-lg bg-gray-100 pt-4 sm:pt-6 px-4 sm:px-6 overflow-hidden">
                <div className="relative w-full aspect-video bg-white rounded">
                  {feature.imageUrl ? (
                    feature.imageUrl.endsWith('.mp4') || feature.imageUrl.includes('/video/upload/') ? (
                      <VideoPlayer src={feature.imageUrl} />
                    ) : (
                      <Image
                        src={feature.imageUrl}
                        alt={feature.title}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    )
                  ) : (
                    <div className="p-6 bg-white min-h-[300px] flex items-center justify-center text-muted-foreground rounded">
                      Image placeholder
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="flex-1 space-y-4 text-left px-4">
              <div className="flex items-center gap-3">
                <h3 className="text-sm sm:text-base font-bold">{feature.title}</h3>
                {feature.dotColor && (
                  <div className={`w-3 h-3 rounded-full ${getDotColorClass(feature.dotColor)}`}></div>
                )}
              </div>
              
              {feature.subtitle && (
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground whitespace-pre-line">
                  {feature.subtitle}
                </p>
              )}
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
