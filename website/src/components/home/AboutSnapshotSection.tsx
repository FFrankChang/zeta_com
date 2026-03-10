"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Check } from "lucide-react";

export function AboutSnapshotSection() {
  const t = useTranslations("home.aboutSnapshot");

  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <SectionLabel>{t("label")}</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary">
                {t("title")}
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {t("description")}
              </p>
              <div className="mt-6">
                <Button href="/about">{t("cta")}</Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="glass rounded-3xl p-8 space-y-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-primary-500" />
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {t(`points.${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
