"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";

export default function FaqPage() {
  const t = useTranslations("resources");

  return (
    <>
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>{t("hero.label")}</SectionLabel>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
                <span className="gradient-text">{t("faq.title")}</span>
              </h1>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <GlassCard hover={false}>
                  <h3 className="font-semibold text-text-primary mb-3">
                    {t(`faq.items.${i}.q`)}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t(`faq.items.${i}.a`)}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
