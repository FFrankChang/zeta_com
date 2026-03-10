"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("about.contact");

  return (
    <>
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>{t("title")}</SectionLabel>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
                <span className="gradient-text">{t("title")}</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary">
                {t("subtitle")}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <GlassCard hover={false} className="p-8">
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        {t("form.name")}
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        {t("form.company")}
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        {t("form.email")}
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        {t("form.phone")}
                      </label>
                      <input
                        type="tel"
                        className="w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">
                      {t("form.message")}
                    </label>
                    <textarea
                      rows={5}
                      className="w-full rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary-300 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full gradient-primary text-white py-3.5 font-medium shadow-[0_4px_20px_rgba(92,124,250,0.3)] hover:shadow-[0_6px_28px_rgba(92,124,250,0.4)] transition-shadow"
                  >
                    {t("form.submit")}
                  </button>
                </form>
              </GlassCard>
            </FadeIn>

            {/* Info */}
            <FadeIn className="lg:col-span-2" delay={0.15}>
              <div className="space-y-6">
                <GlassCard hover={false}>
                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-primary-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-text-primary mb-1">Email</h3>
                      <p className="text-sm text-text-secondary">
                        {t("info.email")}
                      </p>
                    </div>
                  </div>
                </GlassCard>
                <GlassCard hover={false}>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-text-primary mb-1">Address</h3>
                      <p className="text-sm text-text-secondary">
                        {t("info.address")}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
