"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Bot, Github, Twitter, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "./Container";

export function Footer() {
  const t = useTranslations("Landing");

  const footerLinks = {
    product: [
      { label: t("footer.links.features"), href: "#features" },
      { label: t("footer.links.howItWorks"), href: "#howItWorks" },
      { label: t("footer.links.pricing"), href: "#pricing" },
    ],
    company: [
      { label: t("footer.links.about"), href: "#about" },
      { label: t("footer.links.blog"), href: "#blog" },
      { label: t("footer.links.careers"), href: "#careers" },
    ],
    legal: [
      { label: t("footer.links.privacy"), href: "#privacy" },
      { label: t("footer.links.terms"), href: "#terms" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t("companyName")}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs mb-6">
                {t("footer.description")}
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-4">{t("footer.product")}</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">{t("footer.legal")}</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("footer.madeWith")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
