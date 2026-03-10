"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Quote } from "lucide-react";

export default function StoriesPage() {
  const t = useTranslations("caseLibrary");

  return (
    <>
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>{t("hero.label")}</SectionLabel>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
                <span className="gradient-text">{t("stories.title")}</span>
              </h1>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            {[0, 1].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard hover={false}>
                  <Quote size={28} className="text-primary-200 mb-4" />
                  <h2 className="text-xl font-semibold text-text-primary mb-4">
                    {t(`stories.items.${i}.title`)}
                  </h2>
                  <blockquote className="text-lg text-text-secondary leading-relaxed italic mb-6 border-l-3 border-primary-200 pl-4">
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
    </>
  );
}
