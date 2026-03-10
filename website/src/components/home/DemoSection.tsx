"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { MessageSquare, TrendingUp, BarChart3 } from "lucide-react";

const icons = [MessageSquare, TrendingUp, BarChart3];

export function DemoSection() {
  const t = useTranslations("home.demo");

  return (
    <section className="py-24 gradient-soft">
      <Container>
        <FadeIn>
          <div className="text-center mb-4">
            <SectionLabel>{t("label")}</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary">
              {t("title")}
            </h2>
            <p className="mt-3 text-text-tertiary text-sm max-w-xl mx-auto">
              {t("description")}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[0, 1, 2].map((i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard className="text-center h-full flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 shadow-[0_4px_20px_rgba(92,124,250,0.25)]">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    {t(`items.${i}.name`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">
                    {t(`items.${i}.desc`)}
                  </p>
                  <Button href="/case-library/demo" variant="secondary" size="sm">
                    {t("tryNow")}
                  </Button>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
