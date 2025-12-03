"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      className={`container mx-auto max-w-7xl px-4 py-20 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-20">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold md:text-5xl">{t.features.title}</h2>
          {t.features.subtitle && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          )}
        </div>

        {/* Feature Items */}
        <div className="space-y-20">
          {t.features.items.map((feature, index) => (
            <div
              key={feature.id || index}
              id={`feature-${feature.id || index}`}
              className={`flex flex-col gap-12 md:flex-row md:gap-16 items-center ${
                feature.layout === "image-right" ? "md:flex-row-reverse" : ""
              }`}
            >
            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="rounded-lg bg-gray-100 pt-6 px-6 overflow-hidden">
                <div className="relative w-full aspect-video bg-white rounded">
                  {feature.imageUrl ? (
                    <Image
                      src={feature.imageUrl}
                      alt={feature.title}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  ) : (
                    <div className="p-6 bg-white min-h-[300px] flex items-center justify-center text-muted-foreground rounded">
                      Image placeholder
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="flex-1 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-bold">{feature.title}</h3>
                {feature.dotColor && (
                  <div className={`w-3 h-3 rounded-full ${getDotColorClass(feature.dotColor)}`}></div>
                )}
              </div>
              
              {feature.subtitle && (
                <p className="text-3xl font-semibold md:text-4xl text-foreground whitespace-pre-line">
                  {feature.subtitle}
                </p>
              )}
              
              <p className="text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
          ))}
        </div>

        {/* CTA Section */}
        {t.features.cta && (
          <div className="text-center space-y-6 pt-12 border-t">
            <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
              {t.features.cta.title}
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-base text-foreground">for delivering</span>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-[#181818] text-foreground hover:bg-[#181818] hover:text-white transition-colors"
                >
                  <span className="text-base">{t.features.cta.actionText}</span>
                  <div className="ml-2 w-6 h-6 rounded-full bg-[#181818] flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                </Button>
              </Link>
              <span className="text-base text-foreground">smarter solutions</span>
            </div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {t.features.cta.subtitle}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
