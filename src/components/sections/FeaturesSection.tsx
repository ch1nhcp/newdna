"use client";

import { motion } from "motion/react";
import { MessageSquare, Zap, Shield, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { Container } from "./Container";

const FEATURE_ICONS = [MessageSquare, Zap, Shield, Globe] as const;

export function FeaturesSection() {
  const t = useTranslations("Landing");

  const features = [
    {
      icon: FEATURE_ICONS[0],
      title: t("features.items.0.title"),
      description: t("features.items.0.description"),
      color: "bg-blue-500",
    },
    {
      icon: FEATURE_ICONS[1],
      title: t("features.items.1.title"),
      description: t("features.items.1.description"),
      color: "bg-purple-500",
    },
    {
      icon: FEATURE_ICONS[2],
      title: t("features.items.2.title"),
      description: t("features.items.2.description"),
      color: "bg-green-500",
    },
    {
      icon: FEATURE_ICONS[3],
      title: t("features.items.3.title"),
      description: t("features.items.3.description"),
      color: "bg-orange-500",
    },
  ];

  return (
    <Section id="features" className="bg-muted/30">
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
            <span className="text-primary">
              {t("features.titleHighlight")}
            </span>{" "}
            {t("features.titleRest")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("features.description")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
