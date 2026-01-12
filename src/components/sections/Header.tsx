"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Container } from "./Container";

const NAV_ITEMS = ["features", "howItWorks", "about"] as const;

export function Header() {
  const t = useTranslations("Landing");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-background/80"
    >
      <Container>
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
              >
                <Bot className="h-5 w-5 text-white" />
              </motion.div>
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("companyName")}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(`nav.${item}`)}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <LanguageSwitcher />
              <ModeToggle />
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25"
              >
                <Link href="#contact">{t("nav.contact")}</Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t"
            >
              <nav className="flex flex-col py-4 gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(`nav.${item}`)}
                  </Link>
                ))}
                <div className="flex items-center gap-2 px-2 pt-2 border-t mt-2">
                  <LanguageSwitcher />
                  <ModeToggle />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
