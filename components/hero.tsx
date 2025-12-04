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
      return "rounded-full px-6 py-2 bg-[#333333] text-white hover:bg-[#333333] font-semibold text-base";
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
    <section className="pt-12 md:pt-20 pb-12 md:pb-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-8">
          {/* Text Section */}
          <div
            className={`w-full transition-all duration-700 ${
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
              <div className="w-full space-y-6 flex flex-col items-center">
                {/* Register Button */}
                <div className="flex justify-center">
                  <Link href="/register">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-base font-medium text-foreground">
                      <Zap className="h-4 w-4 stroke-[2] text-foreground" />
                      <span>{t.hero.registerButton}</span>
                      <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center ml-1">
                        <ArrowRight className="h-3 w-3 text-white" />
                      </div>
                    </button>
                  </Link>
                </div>
                
                <div className="text-center space-y-4">
                  <h1 className="text-[68px] font-bold tracking-tight leading-tight">
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
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                    {locale === "ko" ? (
                      <>
                        {t.hero.subheadline.split(/, /)[0]},
                        <br />
                        {t.hero.subheadline.split(/, /)[1]}
                      </>
                    ) : (
                      t.hero.subheadline
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Video Section */}
          <div
            className={`w-full transition-all duration-700 ${
              showPart2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full aspect-video">
              <div className="rounded-lg border bg-card shadow-lg overflow-hidden h-full">
                <div className="relative w-full h-full bg-background">
                  <video
                    src="https://res.cloudinary.com/dsg01xpat/video/upload/v1764803987/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2025-07-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.25.43_kvcf5k.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}