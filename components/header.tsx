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
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dsg01xpat/image/upload/v1764743399/black_e3hznn.svg"
            alt="faddit"
            width={248}
            height={55}
            className="h-4 md:h-5 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("product")}
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.product}
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.howItWorks}
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.pricing}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.contact}
          </button>
        </nav>

        {/* Language Toggle & CTA Button */}
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 gap-2 px-3 hidden md:flex">
                <Globe className="h-4 w-4" />
                <span className="text-base">
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
                  <span className="flex-1">{lang.label}</span>
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
              className="h-10 px-6 rounded-full text-white transition-colors gap-2 btn-black"
            >
              <span className="text-sm font-medium">
                {locale === "ko" ? "시작하기" : "Get Started"}
              </span>
              <ArrowRight className="h-4 w-4" />
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
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>{t.header.logo}</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("product")}
                  className="text-left text-lg font-medium"
                >
                  {t.header.nav.product}
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-lg font-medium"
                >
                  {t.header.nav.howItWorks}
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-lg font-medium"
                >
                  {t.header.nav.pricing}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-lg font-medium"
                >
                  {t.header.nav.contact}
                </button>
                        {/* Language Toggle in Mobile */}
                        <div className="flex gap-2 pt-4 border-t">
                          <Button
                            variant={locale === "ko" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setLocale("ko")}
                            className="flex-1"
                          >
                            한국어
                          </Button>
                          <Button
                            variant={locale === "en" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setLocale("en")}
                            className="flex-1"
                          >
                            EN
                          </Button>
                          <Button
                            variant={locale === "zh-TW" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setLocale("zh-TW")}
                            className="flex-1"
                          >
                            繁體中文
                          </Button>
                        </div>
                {/* Get Started Button in Mobile */}
                <Link
                  href="https://faddit.co.kr/sign/in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    className="w-full h-12 rounded-full text-white transition-colors gap-2 btn-black"
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
