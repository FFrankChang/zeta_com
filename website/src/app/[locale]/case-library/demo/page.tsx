"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { MessageSquare, TrendingUp, BarChart3, ExternalLink } from "lucide-react";

const icons = [MessageSquare, TrendingUp, BarChart3];

export default function DemoPage() {
  const t = useTranslations("caseLibrary.demos");

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
              <p className="mt-6 text-text-secondary">
                {t("description")}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => {
              const Icon = icons[i];
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <GlassCard className="text-center h-full flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(92,124,250,0.25)]">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {t(`items.${i}.name`)}
                    </h3>
                    <p className="text-text-secondary leading-relaxed flex-1 mb-6">
                      {t(`items.${i}.desc`)}
                    </p>
                    <button className="inline-flex items-center gap-2 rounded-full gradient-primary text-white px-6 py-3 font-medium text-sm shadow-[0_4px_20px_rgba(92,124,250,0.3)] hover:shadow-[0_6px_28px_rgba(92,124,250,0.4)] transition-shadow">
                      {t("tryNow")} <ExternalLink size={14} />
                    </button>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
