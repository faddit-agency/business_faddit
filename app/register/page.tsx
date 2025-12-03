"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Zap, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const { t, locale } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    company: "",
  });
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeToPrivacy) {
      alert(locale === "ko" ? "개인정보 수집 및 이용에 동의해주세요." : "Please agree to the privacy policy.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Supabase insert 구현
      // const { data, error } = await supabase
      //   .from('registrations')
      //   .insert([
      //     {
      //       name: formData.name,
      //       contact: formData.contact,
      //       email: formData.email,
      //       company: formData.company,
      //       created_at: new Date().toISOString(),
      //     }
      //   ]);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", contact: "", email: "", company: "" });
      setAgreeToPrivacy(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
          {/* Banner */}
          <div className="mb-8 flex justify-end">
            <div className="bg-[#181818] text-white px-4 py-2 rounded-lg flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-full bg-white/20"></div>
                <div className="w-6 h-6 rounded-full bg-white/20"></div>
                <div className="w-6 h-6 rounded-full bg-white/20"></div>
              </div>
              <span className="text-sm font-medium">{t.register.banner}</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t.register.headline}
              <br />
              {t.register.headline2}
            </h1>
            <div className="space-y-2 text-muted-foreground">
              <p className="text-lg">{t.register.subtitle1}</p>
              <p className="text-base">{t.register.subtitle2}</p>
            </div>
          </div>

          {/* Form Card */}
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form Fields - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t.register.form.name}
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t.register.form.namePlaceholder}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact" className="text-sm font-medium">
                        {t.register.form.contact}
                      </label>
                      <Input
                        id="contact"
                        required
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                        placeholder={t.register.form.contactPlaceholder}
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t.register.form.email}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={t.register.form.emailPlaceholder}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        {t.register.form.company}
                      </label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder={t.register.form.companyPlaceholder}
                      />
                    </div>
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-sm font-semibold">{t.register.form.privacyTitle}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <p>{t.register.form.privacyText1}</p>
                    <p>{t.register.form.privacyText2}</p>
                    <p>{t.register.form.privacyText3}</p>
                    <p>{t.register.form.privacyText4}</p>
                    <p>{t.register.form.privacyText5}</p>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox
                      id="privacy"
                      checked={agreeToPrivacy}
                      onCheckedChange={(checked) => setAgreeToPrivacy(checked === true)}
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm font-medium cursor-pointer"
                    >
                      {t.register.form.agree}
                    </label>
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md text-sm text-green-800 dark:text-green-200">
                    {t.register.form.success}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-md text-sm text-red-800 dark:text-red-200">
                    {t.register.form.error}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#181818] text-white hover:bg-[#181818]/90"
                  disabled={isSubmitting || !agreeToPrivacy}
                >
                  {isSubmitting ? t.register.form.submitting : t.register.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
