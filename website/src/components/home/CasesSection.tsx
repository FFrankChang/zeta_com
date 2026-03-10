"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

export function CasesSection() {
  const t = useTranslations("home.cases");

  return (
    <section className="py-24">
      <Container>
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel>{t("label")}</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary">
              {t("title")}
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <GlassCard className="h-full flex flex-col">
                <span className="inline-block text-xs font-medium text-primary-500 bg-primary-50 rounded-full px-3 py-1 self-start mb-4">
                  {t(`items.${i}.layers`)}
                </span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {t(`items.${i}.title`)}
                </h3>
                <p className="text-sm text-text-tertiary mb-3">
                  {t(`items.${i}.scene`)}
                </p>
                <p className="text-sm text-text-secondary flex-1 leading-relaxed">
                  {t(`items.${i}.result`)}
                </p>
                <div className="mt-4 pt-4 border-t border-black/5">
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors">
                    {t("viewDetail")} <ArrowRight size={14} />
                  </button>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Button href="/case-library" variant="secondary">
              {t("viewMore")}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
