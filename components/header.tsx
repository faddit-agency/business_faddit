"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
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
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          {t.header.logo}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <button
            onClick={() => scrollToSection("product")}
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            {t.header.nav.product}
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            {t.header.nav.howItWorks}
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            {t.header.nav.pricing}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            {t.header.nav.contact}
          </button>
        </nav>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex gap-1">
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
