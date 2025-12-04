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
      className={`bg-white container mx-auto max-w-7xl px-4 py-20 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-16">
        {/* Top Section: Title and Button */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl font-bold md:text-5xl text-left max-w-3xl leading-tight">
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
          <Button className="bg-[#333333] text-white hover:bg-[#333333]/90 rounded-lg px-6 py-2 flex items-center gap-2">
            <span>{t.howItWorks.buttonText}</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Button>
        </div>

        {/* 4 Cards in a Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {t.howItWorks.steps.map((step, index) => (
            <Card
              key={index}
              className={`${cardColors[index]} border border-gray-700 rounded-lg shadow-none`}
            >
              <CardContent className="p-8 space-y-4">
                <div className={textColors[index]}>{icons[index]}</div>
                <h3 className={`text-2xl font-bold ${textColors[index]}`}>{step.title}</h3>
                {step.subtitle && (
                  <p className={`text-base ${textColors[index]}`}>{step.subtitle}</p>
                )}
                <p className={`text-base ${textColors[index]} leading-relaxed`}>
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

