"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useI18n } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight, Phone as PhoneIcon } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    company: "",
    inquiryType: "",
    inquiryDetails: "",
    privacyAgree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacyAgree: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAgree) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { data, error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: formData.name,
            contact: formData.contact,
            email: formData.email,
            company: formData.company || null,
            inquiry_type: formData.inquiryType,
            inquiry_details: formData.inquiryDetails,
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        contact: "",
        email: "",
        company: "",
        inquiryType: "",
        inquiryDetails: "",
        privacyAgree: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="space-y-8 sm:space-y-12">
            {/* Header Section */}
            <div className="space-y-4 px-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100">
                <PhoneIcon className="w-4 h-4 text-[#333333]" />
                <span className="text-sm text-[#333333]">{t.contactPage.badge}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{t.contactPage.title}</h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
                {t.contactPage.description}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
                {t.contactPage.description2}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {/* Email Card */}
              <Card className="p-6 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#333333] rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{t.contactPage.cards.email.title}</h3>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  {t.contactPage.cards.email.instruction}
                </p>
                <Link
                  href={`mailto:${t.contactPage.cards.email.value}`}
                  className="flex items-center gap-2 text-[#333333] hover:underline"
                >
                  <span className="text-base">{t.contactPage.cards.email.value}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>

              {/* Phone Card */}
              <Card className="p-6 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#333333] rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{t.contactPage.cards.phone.title}</h3>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  {t.contactPage.cards.phone.instruction}
                </p>
                <Link
                  href={`tel:${t.contactPage.cards.phone.value.replace(/-/g, "")}`}
                  className="flex items-center gap-2 text-[#333333] hover:underline"
                >
                  <span className="text-base">{t.contactPage.cards.phone.value}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>

              {/* Office Card */}
              <Card className="p-6 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#333333] rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{t.contactPage.cards.office.title}</h3>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  {t.contactPage.cards.office.instruction}
                </p>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#333333] hover:underline"
                >
                  <span className="text-base text-sm">{t.contactPage.cards.office.value}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 sm:p-8 bg-white">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">{t.contactPage.form.title}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Two Column Input Fields */}
                <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-4">
                    <label htmlFor="name" className="text-base font-medium">
                      {t.contactPage.form.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="contact" className="text-base font-medium">
                      {t.contactPage.form.contact}
                    </label>
                    <Input
                      id="contact"
                      name="contact"
                      type="tel"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="email" className="text-base font-medium">
                      {t.contactPage.form.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="company" className="text-base font-medium">
                      {t.contactPage.form.company}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Inquiry Type Dropdown */}
                <div className="space-y-4">
                  <label htmlFor="inquiryType" className="text-base font-medium">
                    {t.contactPage.form.inquiryType}
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-md border border-input bg-transparent pl-3 pr-10 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    <option value="">{t.contactPage.form.inquiryTypePlaceholder}</option>
                    <option value="service">서비스 문의</option>
                    <option value="production">의류 제작 문의</option>
                    <option value="partnership">제휴 문의</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                {/* Inquiry Details Textarea */}
                <div className="space-y-4">
                  <label htmlFor="inquiryDetails" className="text-base font-medium">
                    {t.contactPage.form.inquiryDetails}
                  </label>
                  <Textarea
                    id="inquiryDetails"
                    name="inquiryDetails"
                    value={formData.inquiryDetails}
                    onChange={handleChange}
                    required
                    placeholder={t.contactPage.form.inquiryDetailsPlaceholder}
                    className="min-h-32 resize-y"
                  />
                </div>

                {/* Privacy Policy */}
                <div className="space-y-4 bg-white p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.contactPage.privacy.intro}
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>{t.contactPage.privacy.item1}</li>
                    <li>{t.contactPage.privacy.item2}</li>
                    <li>{t.contactPage.privacy.item3}</li>
                    <li>{t.contactPage.privacy.item4}</li>
                  </ol>
                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox
                      id="privacyAgree"
                      checked={formData.privacyAgree}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="privacyAgree"
                      className="text-sm font-medium cursor-pointer leading-relaxed"
                    >
                      {t.contactPage.privacy.agree}
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#333333] text-white hover:bg-[#333333]/90 h-12 px-8 text-base font-semibold"
                  >
                    {isSubmitting ? t.contact.submitting : t.contactPage.submit}
                  </Button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="text-green-600 text-sm">{t.contact.success}</div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-600 text-sm">{t.contact.error}</div>
                )}
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

