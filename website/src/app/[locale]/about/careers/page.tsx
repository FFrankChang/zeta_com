"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Briefcase, MapPin, Mail } from "lucide-react";

export default function CareersPage() {
  const t = useTranslations("about.careers");

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
          <div className="max-w-3xl mx-auto space-y-6">
            {[0, 1, 2].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {t(`positions.${i}.title`)}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} className="text-text-tertiary" />
                        {t(`positions.${i}.type`)}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-text-tertiary" />
                        {t(`positions.${i}.location`)}
                      </span>
                    </div>
                  </div>
                  <button className="self-start sm:self-center rounded-full gradient-primary text-white px-6 py-2.5 text-sm font-medium shadow-[0_4px_16px_rgba(92,124,250,0.25)] hover:shadow-[0_6px_24px_rgba(92,124,250,0.35)] transition-shadow whitespace-nowrap">
                    Apply
                  </button>
                </GlassCard>
              </FadeIn>
            ))}

            <FadeIn delay={0.3}>
              <div className="text-center mt-8 glass rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 text-text-secondary">
                  <Mail size={16} className="text-primary-500" />
                  <p className="text-sm">{t("applyNote")}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
