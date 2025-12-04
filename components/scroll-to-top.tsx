"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // "사용자가 직접 말하는 faddit 이야기" 제목이 header에 닿는지 확인
      const titleElement = document.getElementById("user-stories-title");
      const headerHeight = 64; // header의 h-16 = 64px
      
      if (titleElement) {
        const rect = titleElement.getBoundingClientRect();
        // 제목의 top이 header 높이보다 작거나 같으면 버튼 표시
        if (rect.top <= headerHeight) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 체크

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollTop) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto max-w-7xl px-4 relative">
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-4 pointer-events-auto w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center shadow-lg hover:bg-[#333333]/90 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

