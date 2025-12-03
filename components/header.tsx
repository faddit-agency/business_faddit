"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-20 items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dsg01xpat/image/upload/v1764743290/%E1%84%89%E1%85%B5%E1%86%B7%E1%84%87%E1%85%A9%E1%86%AF%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9__%E1%84%8C%E1%85%AE_%E1%84%91%E1%85%A2%E1%84%83%E1%85%B5%E1%86%BA_h2psij.png"
            alt="faddit"
            width={180}
            height={60}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("product")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.product}
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.howItWorks}
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.pricing}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.header.nav.contact}
          </button>
        </nav>

        {/* Language Toggle & CTA Button */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div className="hidden md:flex gap-1">
            <Button
              variant={locale === "ko" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLocale("ko")}
              className="h-8 px-3 text-xs"
            >
              한국어
            </Button>
            <Button
              variant={locale === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLocale("en")}
              className="h-8 px-3 text-xs"
            >
              EN
            </Button>
          </div>

          {/* Get Started Button */}
          <Link
            href="https://faddit.co.kr/sign/in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex"
          >
            <Button
              className="h-10 px-6 rounded-full bg-black text-white hover:bg-black/90 transition-colors gap-2"
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
                </div>
                {/* Get Started Button in Mobile */}
                <Link
                  href="https://faddit.co.kr/sign/in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    className="w-full h-12 rounded-full bg-black text-white hover:bg-black/90 transition-colors gap-2"
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
