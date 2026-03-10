"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero */}
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>{t("hero.label")}</SectionLabel>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
                <span className="gradient-text">{t("hero.title")}</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Company */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              {t("company.title")}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mb-12">
              {t("company.description")}
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <h3 className="font-semibold text-text-primary mb-2">
                    {t(`company.beliefs.${i}.title`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(`company.beliefs.${i}.desc`)}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary text-center mb-16">
              {t("approach.title")}
            </h2>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <GlassCard className="h-full">
                    <div className="text-3xl font-bold gradient-text mb-3">
                      {t(`approach.steps.${i}.step`)}
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {t(`approach.steps.${i}.title`)}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {t(`approach.steps.${i}.desc`)}
                    </p>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-text-secondary mb-8">
                {t("contact.subtitle")}
              </p>
              <div className="flex justify-center gap-4">
                <Button href="/about/contact" size="lg">
                  {t("contact.title")}
                </Button>
                <Button href="/about/careers" variant="secondary" size="lg">
                  {t("careers.title")}
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
