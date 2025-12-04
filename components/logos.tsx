"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { useInView } from "@/lib/use-in-view";

const logoImages = [
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813873/image_508_wpgxow.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813870/image_511_al79ah.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813872/image01_2_embegz.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813868/image_505_va9myl.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813870/image_510_uglg7b.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813871/image_509_oj3srq.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813869/image_orog43.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813866/image_504_jmzhai.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813865/Layer_1_1_qhpqmt.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813867/image_507_i9fgpt.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813865/image_503_nkcmyh.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813864/image_506_jhys1x.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813862/image_500_izfxf1.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813861/image_452_c7pr98.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813863/image_502_mp0lnu.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813860/image_501_zybsle.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813859/image_450_tobckj.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813860/image_499_ux2qhg.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813858/Group_15467_1_tkxhug.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813857/cts271_img_png_2_tm62f2.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813857/%E1%84%89%E1%85%B5%E1%84%80%E1%85%B3%E1%84%82%E1%85%B5%E1%84%8E%E1%85%A5_%E1%84%8C%E1%85%AA%E1%84%8B%E1%85%AE%E1%84%8C%E1%85%A9%E1%84%92%E1%85%A1%E1%86%B8_%E1%84%80%E1%85%AE%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AB_2_xupjmp.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813856/%E1%84%8C%E1%85%A1%E1%84%89%E1%85%A1%E1%86%AB_1_5_1_kpldtv.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813855/%E1%84%83%E1%85%B5%E1%84%8A%E1%85%B3%E1%84%85%E1%85%B5%E1%84%83%E1%85%B5%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_2_tvfbdt.png",
  "https://res.cloudinary.com/dsg01xpat/image/upload/v1764813855/0401_1_vzstne.png",
];

export function Logos() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`bg-muted/30 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="py-12">
        <p className="text-center text-base text-muted-foreground mb-8">
          {t.logos.title}
        </p>
        
        {/* 무한 루프 애니메이션 컨테이너 */}
        <div className="relative w-full overflow-hidden">
          {/* 왼쪽 블러 효과 */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none backdrop-blur-sm" />
          
          {/* 오른쪽 블러 효과 */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none backdrop-blur-sm" />
          
          {/* 스크롤 애니메이션 */}
          <div className="flex animate-scroll-infinite">
            {/* 첫 번째 세트 */}
            {logoImages.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-8 md:mx-12 lg:mx-16 h-12 sm:h-14 md:h-16 w-24 sm:w-28 md:w-32 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  width={128}
                  height={64}
                  className="max-h-full max-w-full object-contain"
                  unoptimized
                />
              </div>
            ))}
            
            {/* 두 번째 세트 (무한 루프용) */}
            {logoImages.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-8 md:mx-12 lg:mx-16 h-12 sm:h-14 md:h-16 w-24 sm:w-28 md:w-32 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  width={128}
                  height={64}
                  className="max-h-full max-w-full object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

