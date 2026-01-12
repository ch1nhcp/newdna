"use client";

import { motion } from "motion/react";
import { MessageCircle, Settings, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

import { Section } from "./Section";
import { Container } from "./Container";

const STEP_ICONS = [MessageCircle, Settings, Rocket] as const;

export function HowItWorksSection() {
  const t = useTranslations("Landing");

  const steps = [
    {
      icon: STEP_ICONS[0],
      step: "01",
      title: t("howItWorks.steps.0.title"),
      description: t("howItWorks.steps.0.description"),
    },
    {
      icon: STEP_ICONS[1],
      step: "02",
      title: t("howItWorks.steps.1.title"),
      description: t("howItWorks.steps.1.description"),
    },
    {
      icon: STEP_ICONS[2],
      step: "03",
      title: t("howItWorks.steps.2.title"),
      description: t("howItWorks.steps.2.description"),
    },
  ];

  return (
    <Section id="howItWorks">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("howItWorks.titleStart")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("howItWorks.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorks.description")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step Number & Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="relative mb-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl shadow-blue-500/25">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-blue-500 flex items-center justify-center text-sm font-bold text-blue-600">
                      {step.step}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
