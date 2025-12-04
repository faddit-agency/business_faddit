"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { Mail, Instagram, AtSign } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-[#333333] text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Section: Logo and Slogan */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 pb-6 sm:pb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/dsg01xpat/image/upload/v1764743399/black_e3hznn.svg"
              alt="faddit"
              width={248}
              height={55}
              className="h-5 sm:h-6 md:h-8 w-auto object-contain invert"
              priority
            />
          </div>

          {/* Slogan */}
          <div className="text-white text-sm sm:text-base md:text-right whitespace-pre-line">
            {t.footer.slogan}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Bottom Section: Company Info and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
          {/* Left: Company Information */}
          <div className="space-y-1 sm:space-y-2 text-white text-sm sm:text-base">
            <p>{t.footer.companyName} | {t.footer.ceo}</p>
            <p>{t.footer.businessNumber}</p>
            <p>{t.footer.address}</p>
            <p>{t.footer.contact}</p>
            <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4 flex-wrap">
              <Link
                href="/privacy"
                className="underline hover:no-underline transition-all text-sm sm:text-base"
              >
                {t.footer.privacy}
              </Link>
              <span>|</span>
              <Link
                href="/terms"
                className="underline hover:no-underline transition-all text-sm sm:text-base"
              >
                {t.footer.terms}
              </Link>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Contact"
            >
              <AtSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a
              href="https://www.instagram.com/faddit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
            <a
              href="mailto:ceo@faddit.co.kr"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

