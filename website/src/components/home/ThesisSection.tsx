"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { Layers, Brain, Settings, Users, ArrowRight } from "lucide-react";

const flowItems = [
  { icon: Brain, label: "模型 Models" },
  { icon: Layers, label: "知识 Knowledge" },
  { icon: Settings, label: "系统 Systems" },
  { icon: Users, label: "流程与人 Workflows & People" },
];

export function ThesisSection() {
  const t = useTranslations("home.thesis");

  return (
    <section className="py-24">
      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel>{t("label")}</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary">
              {t("title")}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 sm:p-12">
            <p className="text-lg text-text-secondary leading-relaxed">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {flowItems.map((item, i) => (
                <div key={item.label} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 rounded-xl bg-primary-50 px-4 py-2.5">
                    <item.icon size={18} className="text-primary-500" />
                    <span className="text-sm font-medium text-text-primary">
                      {item.label}
                    </span>
                  </div>
                  {i < flowItems.length - 1 && (
                    <ArrowRight size={16} className="text-text-tertiary hidden sm:block" />
                  )}
                </div>
              ))}
              <ArrowRight size={16} className="text-text-tertiary hidden sm:block" />
              <div className="flex items-center gap-2 rounded-xl gradient-primary px-4 py-2.5">
                <span className="text-sm font-medium text-white">
                  Agent 集群网络
                </span>
              </div>
              <ArrowRight size={16} className="text-text-tertiary hidden sm:block" />
              <div className="flex items-center gap-2 rounded-xl bg-accent-100 px-4 py-2.5">
                <span className="text-sm font-medium text-accent-600">
                  企业新型生产基础设施
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
