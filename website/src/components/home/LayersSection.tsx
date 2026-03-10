"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  Box,
  Network,
  RotateCcw,
  RefreshCw,
  Shield,
  BarChart3,
} from "lucide-react";

const icons = [Box, Network, RotateCcw, RefreshCw, Shield, BarChart3];

export function LayersSection() {
  const t = useTranslations("home.layers");

  return (
    <section className="py-24 gradient-soft">
      <Container>
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel>{t("label")}</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary">
              {t("title")}
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                      <Icon size={20} className="text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-text-tertiary mb-1">
                        Layer {i + 1}
                      </div>
                      <h3 className="font-semibold text-text-primary mb-2">
                        {t(`items.${i}.name`)}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-3">
                        {t(`items.${i}.definition`)}
                      </p>
                      <p className="text-xs text-primary-500 font-medium">
                        {t(`items.${i}.value`)}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
