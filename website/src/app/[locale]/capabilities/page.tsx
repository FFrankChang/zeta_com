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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const layerIcons = [Box, Network, RotateCcw, RefreshCw, Shield, BarChart3];

export default function CapabilitiesPage() {
  const t = useTranslations("capabilities");

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

      {/* Thesis — contrast table */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-text-primary mb-12">
              {t("thesis.title")}
            </h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-4">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="glass rounded-2xl p-5 flex items-center gap-4">
                  <div className="flex-1 text-right">
                    <span className="text-text-tertiary text-sm line-through decoration-text-tertiary/40">
                      {t(`thesis.contrasts.${i}.from`)}
                    </span>
                  </div>
                  <ArrowRight size={18} className="text-primary-400 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-text-primary text-sm font-medium">
                      {t(`thesis.contrasts.${i}.to`)}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Six-Layer Deep Dive */}
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-text-primary mb-16">
              {t("layers.title")}
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const Icon = layerIcons[i];
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <GlassCard hover={false} className="overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-16 flex-shrink-0 flex lg:flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-[0_4px_16px_rgba(92,124,250,0.25)]">
                          <Icon size={22} className="text-white" />
                        </div>
                        <span className="text-xs text-text-tertiary font-mono">
                          L{i + 1}
                        </span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-semibold text-text-primary">
                          {t(`layers.items.${i}.name`)}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {t(`layers.items.${i}.definition`)}
                        </p>
                        <div className="rounded-xl bg-primary-50/60 p-4">
                          <p className="text-sm text-primary-600 font-medium mb-1">
                            {t(`layers.items.${i}.frontier`)}
                          </p>
                        </div>
                        <p className="text-sm text-text-tertiary">
                          <span className="font-medium text-text-secondary">落地场景：</span>
                          {t(`layers.items.${i}.landing`)}
                        </p>
                        <p className="text-sm font-medium text-accent-500">
                          ✦ {t(`layers.items.${i}.essence`)}
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

      {/* Orchestration & Execution */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary">
                {t("orchestration.title")}
              </h2>
              <p className="mt-4 text-text-secondary">
                {t("orchestration.subtitle")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto glass rounded-3xl p-8 space-y-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-primary-500 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-text-secondary leading-relaxed">
                    {t(`orchestration.points.${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Governance & Operations */}
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary">
                {t("governance.title")}
              </h2>
              <p className="mt-4 text-text-secondary">
                {t("governance.subtitle")}
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <h3 className="font-semibold text-text-primary mb-4">
                    {t(`governance.groups.${i}.name`)}
                  </h3>
                  <ul className="space-y-2">
                    {[0, 1, 2, 3].map((j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-300" />
                        {t(`governance.groups.${i}.items.${j}`)}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
