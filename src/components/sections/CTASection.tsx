"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { Container } from "./Container";

export function CTASection() {
  const t = useTranslations("Landing");

  const contactInfo = [
    {
      icon: Mail,
      label: t("cta.contact.email"),
      value: "hello@yourai.com",
      href: "mailto:hello@yourai.com",
    },
    {
      icon: Phone,
      label: t("cta.contact.phone"),
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: t("cta.contact.location"),
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              {t("cta.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">{item.label}</p>
                    <p className="font-medium group-hover:text-blue-200 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-6">{t("cta.formTitle")}</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t("cta.form.name")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg border bg-background focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder={t("cta.form.namePlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t("cta.form.email")}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2.5 rounded-lg border bg-background focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder={t("cta.form.emailPlaceholder")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("cta.form.company")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border bg-background focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder={t("cta.form.companyPlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("cta.form.message")}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border bg-background focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder={t("cta.form.messagePlaceholder")}
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                      size="lg"
                    >
                      {t("cta.form.submit")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
