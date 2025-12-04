"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/lib/use-in-view";
import { Check, Star } from "lucide-react";

export function Pricing() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (price: string | null) => {
    if (!price) return null;
    const numPrice = parseInt(price);
    if (numPrice === 0) return "0";
    return `₩${numPrice.toLocaleString()}`;
  };

  return (
    <section
      id="pricing"
      ref={ref}
      className={`container mx-auto max-w-7xl px-4 py-20 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-12">
        {/* Title Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold md:text-5xl">{t.pricing.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md text-base font-medium transition-colors ${
                !isYearly
                  ? "bg-[#333333] text-white"
                  : "text-[#333333] hover:bg-gray-100"
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md text-base font-medium transition-colors ${
                isYearly
                  ? "bg-[#333333] text-white"
                  : "text-[#333333] hover:bg-gray-100"
              }`}
            >
              {t.pricing.yearly}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          {t.pricing.plans.map((plan, index) => {
            const displayPrice = "priceCustom" in plan && plan.priceCustom
              ? plan.priceCustom
              : isYearly
              ? formatPrice(plan.priceYearly)
              : formatPrice(plan.price);

            return (
              <Card
                key={index}
                className="h-full flex flex-col bg-[#333333] text-white border border-gray-700"
              >
                <CardHeader className="relative">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    {plan.badge && (
                      <Badge
                        className={`${
                          plan.badgeColor === "yellow"
                            ? "bg-yellow-400 text-[#333333]"
                            : "bg-blue-500 text-white"
                        } flex items-center gap-1`}
                      >
                        <Star className="w-3 h-3 fill-current" />
                        {plan.badge}
                      </Badge>
                    )}
                  </div>
                  {plan.targetUser && (
                    <p className="text-base text-gray-300 mt-1">({plan.targetUser})</p>
                  )}
                  <div className="mt-4">
                    {"priceCustom" in plan && plan.priceCustom ? (
                      <p className="text-3xl font-bold text-white">{displayPrice}</p>
                    ) : (
                      <>
                        <p className="text-3xl font-bold text-white">{displayPrice}</p>
                        <p className="text-base text-gray-300">/month</p>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-500 flex-shrink-0 mt-0.5" />
                        )}
                        <span className="text-base text-gray-300 leading-relaxed">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-white text-[#333333] hover:bg-gray-100 font-semibold"
                  >
                    {t.pricing.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

