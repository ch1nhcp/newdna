"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Sparkles, Bot } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Container } from "./Container";

export function HeroSection() {
  const t = useTranslations("Landing");

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-background dark:from-blue-950/20 dark:via-purple-950/20 dark:to-background" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/30 dark:bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
            >
              <Sparkles className="h-4 w-4" />
              {t("hero.badge")}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t("hero.titleHighlight")}
              </span>
              <br />
              <span className="text-foreground">{t("hero.titleRest")}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t("hero.description")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 text-base px-8"
                >
                  <Link href="#contact">
                    {t("hero.primaryCta")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link href="#features">{t("hero.secondaryCta")}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - AI Chat Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Chat Window Mock */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-background/80 backdrop-blur-xl border rounded-2xl shadow-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-4 pb-4 border-b">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold">{t("hero.chatTitle")}</span>
                  <span className="ml-auto flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-3"
                  >
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                      U
                    </div>
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm">{t("hero.chatUser")}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex gap-3 justify-end"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm">{t("hero.chatAi")}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Typing Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="mt-4 flex items-center gap-2 text-muted-foreground"
                >
                  <div className="flex gap-1">
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      className="h-2 w-2 bg-current rounded-full"
                    />
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      className="h-2 w-2 bg-current rounded-full"
                    />
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      className="h-2 w-2 bg-current rounded-full"
                    />
                  </div>
                  <span className="text-xs">{t("hero.typing")}</span>
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-3 bg-background rounded-xl shadow-lg border"
              >
                <Sparkles className="h-6 w-6 text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
