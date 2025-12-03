"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left: Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{t.header.logo}</h3>
            <p className="text-sm text-muted-foreground">{t.footer.description}</p>
          </div>

          {/* Center: Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.links.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.links.privacy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <p className="text-sm text-muted-foreground">
              <a
                href={`mailto:${t.footer.email}`}
                className="hover:text-foreground transition-colors"
              >
                {t.footer.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
          <p className="text-sm text-muted-foreground">{t.footer.currentLanguage}</p>
        </div>
      </div>
    </footer>
  );
}

