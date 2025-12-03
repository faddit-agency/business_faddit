"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

export function Hero() {
  const { t, locale } = useI18n();
  const [activeTab, setActiveTab] = useState("workspace");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [showPart1, setShowPart1] = useState(false);
  const [showPart2, setShowPart2] = useState(false);
  const [showPart3, setShowPart3] = useState(false);

  // 컴포넌트 마운트 시 순차적으로 나타나는 효과
  useEffect(() => {
    const timer1 = setTimeout(() => setShowPart1(true), 100);
    const timer2 = setTimeout(() => setShowPart2(true), 400);
    const timer3 = setTimeout(() => setShowPart3(true), 700);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabs = [
    { id: "workspace", label: t.hero.tabs.workspace.label, hoverColor: "yellow" },
    { id: "work-instruction", label: t.hero.tabs["work-instruction"].label, hoverColor: "red" },
    { id: "pattern-cad", label: t.hero.tabs["pattern-cad"].label, hoverColor: "blue" },
    { id: "promotion", label: t.hero.tabs.promotion.label, hoverColor: "green" },
  ];

  // 이미지 URL
  const tabImages: Record<string, string> = {
    workspace: "https://res.cloudinary.com/dsg01xpat/image/upload/v1764744193/%E1%84%8E%E1%85%A9%E1%84%80%E1%85%B5%E1%84%89%E1%85%A6%E1%84%90%E1%85%B5%E1%86%BC_fmgajq.png",
    "work-instruction": "https://res.cloudinary.com/dsg01xpat/image/upload/v1764744193/%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%8C%E1%85%B5%E1%84%89%E1%85%B5%E1%84%89%E1%85%A5_jqtoxj.png",
    "pattern-cad": "https://res.cloudinary.com/dsg01xpat/image/upload/v1764744192/%E1%84%8C%E1%85%A5%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AA%E1%86%AB%E1%84%85%E1%85%AD_fpv6m9.png",
    promotion: "https://res.cloudinary.com/dsg01xpat/image/upload/v1764746260/%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%8C%E1%85%B5%E1%84%89%E1%85%B5%E1%84%89%E1%85%A5_%E1%84%89%E1%85%A6%E1%84%87%E1%85%AE%E1%84%89%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BCiia_x38np0.png",
  };

  // 텍스트 이미지 URL (2번째 이미지) - 추후 업데이트 필요
  const textImageUrl = "";

  const getTabDescription = (tabId: string) => {
    switch (tabId) {
      case "workspace":
        return t.hero.tabs.workspace.description;
      case "work-instruction":
        return t.hero.tabs["work-instruction"].description;
      case "pattern-cad":
        return t.hero.tabs["pattern-cad"].description;
      case "promotion":
        return t.hero.tabs.promotion.description;
      default:
        return "";
    }
  };

  const getButtonClassName = (tabId: string, hoverColor: string) => {
    const isActive = activeTab === tabId;
    const isHovered = hoveredTab === tabId;
    
    if (isActive) {
      return "rounded-full px-6 py-2 bg-[#181818] text-white hover:bg-[#181818] font-semibold text-base";
    }

    // hover 색상 클래스
    const hoverClasses: Record<string, string> = {
      yellow: "hover:bg-yellow-400 hover:text-white",
      red: "hover:bg-red-500 hover:text-white",
      blue: "hover:bg-blue-500 hover:text-white",
      green: "hover:bg-green-500 hover:text-white",
    };

    return `rounded-full px-6 py-2 bg-gray-100 text-foreground transition-colors font-semibold text-base ${hoverClasses[hoverColor] || ""}`;
  };

  const getTabDescriptionFormatted = (tabId: string) => {
    const description = getTabDescription(tabId);
    // 문장을 마침표로 나누고, 2줄로 표시 (한국어/영어 마침표 모두 처리)
    const sentences = description.split(/(?<=[.!?。])\s*/).filter(s => s.trim());
    if (sentences.length >= 2) {
      return (
        <>
          {sentences[0]}
          <br />
          {sentences.slice(1).join(" ")}
        </>
      );
    }
    return description;
  };

  const getFeatureId = (tabId: string) => {
    switch (tabId) {
      case "workspace":
        return t.hero.tabs.workspace.featureId;
      case "work-instruction":
        return t.hero.tabs["work-instruction"].featureId;
      case "pattern-cad":
        return t.hero.tabs["pattern-cad"].featureId;
      case "promotion":
        return t.hero.tabs.promotion.featureId;
      default:
        return "product";
    }
  };

  const getViewMoreText = (tabId: string) => {
    switch (tabId) {
      case "workspace":
        return t.hero.tabs.workspace.viewMore;
      case "work-instruction":
        return t.hero.tabs["work-instruction"].viewMore;
      case "pattern-cad":
        return t.hero.tabs["pattern-cad"].viewMore;
      case "promotion":
        return t.hero.tabs.promotion.viewMore;
      default:
        return "";
    }
  };

  return (
    <section className="container mx-auto max-w-7xl px-4 pt-12 md:pt-20 pb-12 md:pb-20">
      <div className="space-y-8">
        {/* Part 1: Top Text Image (2nd image) */}
        <div
          className={`transition-all duration-700 ${
            showPart1
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
          }`}
        >
          {textImageUrl ? (
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative w-full aspect-video">
                <Image
                  src={textImageUrl}
                  alt="faddit hero text"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>
          ) : (
            <div className="w-full max-w-4xl mx-auto space-y-6">
              {/* Register Button */}
              <div className="flex justify-center">
                <Link href="/register">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-base font-medium text-foreground">
                    <Zap className="h-4 w-4 stroke-[2] text-foreground" />
                    <span>{t.hero.registerButton}</span>
                    <div className="w-6 h-6 rounded-full bg-[#181818] flex items-center justify-center ml-1">
                      <ArrowRight className="h-3 w-3 text-white" />
                    </div>
                  </button>
                </Link>
              </div>
              
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tight leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                  {locale === "ko" ? (
                    <>
                      누구나 시작할 수 있는
                      <br />
                      패션 디자인 솔루션
                    </>
                  ) : (
                    t.hero.headline
                  )}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  나만의 브랜드를 시작하는 디자이너부터 성장하는 레이블까지,
                  <br />
                  디자인부터 생산까지의 모든 정보를 한 워크스페이스에서 정리하세요.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Part 2: Image Area */}
        <div
          className={`transition-all duration-700 ${
            showPart2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="rounded-lg border bg-card shadow-lg overflow-hidden">
              <div className="relative w-full aspect-video bg-background">
                {tabImages[activeTab] ? (
                  <Image
                    key={activeTab}
                    src={tabImages[activeTab]}
                    alt={`${tabs.find((tab) => tab.id === activeTab)?.label} preview`}
                    fill
                    className="object-contain transition-opacity duration-300"
                    unoptimized
                  />
                ) : (
                  <Image
                    src="https://res.cloudinary.com/dsg01xpat/image/upload/v1764743215/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2025-07-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.25.43_dkirx0.gif"
                    alt="faddit product demo"
                    fill
                    className="object-contain"
                    unoptimized
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Part 3: Tab Buttons and Description */}
        <div
          className={`transition-all duration-700 ${
            showPart3
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  // Scroll to the feature section when button is clicked
                  const featureId = getFeatureId(tab.id);
                  setTimeout(() => {
                    const element = document.getElementById(featureId);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }, 100);
                }}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={getButtonClassName(tab.id, tab.hoverColor)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Description */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-base text-muted-foreground leading-relaxed">
              {getTabDescriptionFormatted(activeTab)}
            </p>
            {/* View More Link */}
            <div>
              <button
                onClick={() => {
                  const featureId = getFeatureId(activeTab);
                  const element = document.getElementById(featureId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    // Fallback to product section if feature not found
                    const productSection = document.getElementById("product");
                    if (productSection) {
                      productSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 underline"
              >
                {getViewMoreText(activeTab)}
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}