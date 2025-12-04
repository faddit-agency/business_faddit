"use client";

import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/lib/use-in-view";

export function Problem() {
  const { t } = useI18n();
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`container mx-auto max-w-5xl px-4 py-20 transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-12">
        <div className="text-left space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">{t.problem.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.problem.problems.map((problem, index) => (
            <Card key={index} className="h-full bg-[#333333] text-white border-[#333333]">
              <CardHeader>
                <CardTitle className="text-xl text-white">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

