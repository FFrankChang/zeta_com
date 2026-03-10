"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Quote } from "lucide-react";

export default function CaseLibraryPage() {
  const t = useTranslations("caseLibrary");

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

      {/* Featured Cases */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">
              {t("featured.title")}
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {[0, 1, 2].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard hover={false} className="overflow-hidden">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-64 flex-shrink-0">
                      <span className="inline-block text-xs font-medium text-primary-500 bg-primary-50 rounded-full px-3 py-1 mb-3">
                        {t(`featured.cases.${i}.layer`)}
                      </span>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {t(`featured.cases.${i}.title`)}
                      </h3>
                      <p className="text-sm text-text-tertiary">
                        {t(`featured.cases.${i}.client`)}
                      </p>
                      <p className="text-sm text-text-tertiary mt-1">
                        {t(`featured.cases.${i}.scene`)}
                      </p>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-1">
                          背景 Background
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {t(`featured.cases.${i}.background`)}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-1">
                          痛点 Problem
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {t(`featured.cases.${i}.problem`)}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-1">
                          方案 Solution
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {t(`featured.cases.${i}.solution`)}
                        </p>
                      </div>
                      <div className="rounded-xl bg-primary-50/60 p-4">
                        <h4 className="text-xs font-medium text-primary-500 uppercase tracking-wider mb-1">
                          成果 Result
                        </h4>
                        <p className="text-sm text-primary-600 font-medium">
                          {t(`featured.cases.${i}.result`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Customer Stories */}
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">
              {t("stories.title")}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[0, 1].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard className="h-full">
                  <Quote size={24} className="text-primary-200 mb-4" />
                  <h3 className="font-semibold text-text-primary mb-3">
                    {t(`stories.items.${i}.title`)}
                  </h3>
                  <blockquote className="text-text-secondary leading-relaxed italic mb-4">
                    &ldquo;{t(`stories.items.${i}.quote`)}&rdquo;
                  </blockquote>
                  <div className="text-sm text-text-tertiary">
                    <span className="font-medium text-text-secondary">
                      {t(`stories.items.${i}.role`)}
                    </span>
                    {" · "}
                    {t(`stories.items.${i}.company`)}
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Demos Link */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                {t("demos.title")}
              </h2>
              <p className="text-text-tertiary mb-8 max-w-xl mx-auto">
                {t("demos.description")}
              </p>
              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[0, 1, 2].map((i) => (
                  <GlassCard key={i} className="text-center">
                    <h3 className="font-semibold text-text-primary mb-2">
                      {t(`demos.items.${i}.name`)}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                      {t(`demos.items.${i}.desc`)}
                    </p>
                    <Button href="/case-library/demo" variant="secondary" size="sm">
                      {t("demos.tryNow")}
                    </Button>
                  </GlassCard>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
