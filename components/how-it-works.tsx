"use client";

import { useI18n } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/lib/use-in-view";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Lock, Clock, Settings } from "lucide-react";

export function HowItWorks() {
  const { t, locale } = useI18n();
  const { ref, isInView } = useInView();

  const icons = [
    <Layers key="layers" className="w-6 h-6" />,
    <Lock key="lock" className="w-6 h-6" />,
    <Clock key="clock" className="w-6 h-6" />,
    <Settings key="settings" className="w-6 h-6" />,
  ];

  const cardColors = [
    "bg-[#333333]",  // 검은색 - 첫 번째
    "bg-[#333333]",  // 검은색 - 두 번째
    "bg-[#333333]",  // 검은색 - 세 번째
    "bg-[#333333]",  // 검은색 - 네 번째
  ];

  const textColors = [
    "text-white", // 첫 번째: 흰색 텍스트
    "text-white", // 두 번째: 흰색 텍스트
    "text-white", // 세 번째: 흰색 텍스트
    "text-white", // 네 번째: 흰색 텍스트
  ];

  return (
    <section
      id="how-it-works"
      ref={ref}
      className={`bg-white container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-12 sm:space-y-16">
        {/* Top Section: Title and Button */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left max-w-3xl leading-tight">
            {locale === "ko" ? (
              <>
                {t.howItWorks.title.split("바로")[0]}
                <br />
                바로{t.howItWorks.title.split("바로")[1]}
              </>
            ) : (
              t.howItWorks.title
            )}
          </h2>
          <Button className="bg-transparent hover:bg-transparent p-0 h-auto flex items-center gap-2 w-full md:w-auto justify-center">
            <span className="text-sm sm:text-base text-[#333333] underline">{t.howItWorks.buttonText}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#333333]" />
          </Button>
        </div>

        {/* 4 Cards in a Single Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {t.howItWorks.steps.map((step, index) => (
            <Card
              key={index}
              className={`${cardColors[index]} border border-gray-700 rounded-lg shadow-none flex-1`}
            >
              <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                <div className="w-fit">
                  <div className="bg-white rounded-lg p-3 w-fit">
                    <div className="text-[#333333]">{icons[index]}</div>
                  </div>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold ${textColors[index]}`}>{step.title}</h3>
                {step.subtitle && (
                  <p className={`text-sm sm:text-base ${textColors[index]}`}>{step.subtitle}</p>
                )}
                <p className={`text-sm sm:text-base ${textColors[index]} leading-relaxed`}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

