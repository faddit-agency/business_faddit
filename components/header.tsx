"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight, Globe, ChevronDown, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const languages = [
    { code: "ko", label: "한국어" },
    { code: "en", label: "EN" },
    { code: "zh-TW", label: "繁體中文" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dsg01xpat/image/upload/v1764743399/black_e3hznn.svg"
            alt="faddit"
            width={248}
            height={55}
            className="h-4 sm:h-5 md:h-6 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 lg:gap-8 md:flex">
          <button
            onClick={() => scrollToSection("product")}
            className="text-sm lg:text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.product}
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm lg:text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.howItWorks}
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm lg:text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.pricing}
          </button>
          <Link
            href="/contact"
            className="text-sm lg:text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.contact}
          </Link>
        </nav>

        {/* Language Toggle & CTA Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 gap-1 sm:gap-2 px-2 sm:px-3 hidden md:flex">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">
                  {languages.find((lang) => lang.code === locale)?.label}
                </span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLocale(lang.code as "ko" | "en" | "zh-TW")}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span className="flex-1 text-[14px]">{lang.label}</span>
                  {locale === lang.code && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Get Started Button */}
          <Link
            href="https://faddit.co.kr/sign/in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex"
          >
            <Button
              className="h-9 lg:h-10 px-4 lg:px-6 rounded-full text-white transition-colors gap-1 sm:gap-2 btn-black"
            >
              <span className="text-xs lg:text-sm font-medium">
                {locale === "ko" ? "시작하기" : "Get Started"}
              </span>
              <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[66%] sm:w-[400px] p-0 flex flex-col">
              <SheetHeader className="px-6 pt-6 pb-4 border-b">
                <div className="flex items-center justify-between">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Image
                      src="https://res.cloudinary.com/dsg01xpat/image/upload/v1764743399/black_e3hznn.svg"
                      alt="faddit"
                      width={120}
                      height={27}
                      className="h-5 w-auto object-contain"
                    />
                  </Link>
                </div>
              </SheetHeader>
              <nav className="flex-1 flex flex-col px-6 py-8 gap-6">
                <button
                  onClick={() => scrollToSection("product")}
                  className="text-left text-base font-medium text-foreground hover:text-foreground/80 transition-colors"
                >
                  {t.header.nav.product}
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-base font-medium text-foreground hover:text-foreground/80 transition-colors"
                >
                  {t.header.nav.howItWorks}
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-base font-medium text-foreground hover:text-foreground/80 transition-colors"
                >
                  {t.header.nav.pricing}
                </button>
                <Link
                  href="/contact"
                  className="text-left text-base font-medium text-foreground hover:text-foreground/80 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.header.nav.contact}
                </Link>
                
                {/* Language Toggle in Mobile */}
                <div className="flex gap-2 pt-6 mt-auto">
                  <Button
                    variant={locale === "ko" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLocale("ko")}
                    className={`flex-1 rounded-md ${
                      locale === "ko" 
                        ? "bg-[#333333] text-white hover:bg-[#333333]/90" 
                        : "bg-white border border-gray-200 text-foreground hover:bg-gray-50"
                    }`}
                  >
                    한국어
                  </Button>
                  <Button
                    variant={locale === "en" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLocale("en")}
                    className={`flex-1 rounded-md ${
                      locale === "en" 
                        ? "bg-[#333333] text-white hover:bg-[#333333]/90" 
                        : "bg-white border border-gray-200 text-foreground hover:bg-gray-50"
                    }`}
                  >
                    EN
                  </Button>
                  <Button
                    variant={locale === "zh-TW" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLocale("zh-TW")}
                    className={`flex-1 rounded-md ${
                      locale === "zh-TW" 
                        ? "bg-[#333333] text-white hover:bg-[#333333]/90" 
                        : "bg-white border border-gray-200 text-foreground hover:bg-gray-50"
                    }`}
                  >
                    繁體中文
                  </Button>
                </div>
                
                {/* Get Started Button in Mobile */}
                <Link
                  href="https://faddit.co.kr/sign/in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full pb-6"
                >
                  <Button
                    className="w-full h-12 rounded-md text-white transition-colors gap-2 bg-[#333333] hover:bg-[#333333]/90"
                  >
                    <span className="text-sm font-medium">
                      {locale === "ko" ? "시작하기" : "Get Started"}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
