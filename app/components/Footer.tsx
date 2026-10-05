
"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

const socials: {
  label: string;
  href: string;
  icon: IconType;
}[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/bakhtawar-abbasi-59ba15304/",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/bakhtawar5867/",
    icon: FaInstagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/BakhtawarAbbasi",
    icon: FaGithub,
  },
  {
    label: "X",
    href: "https://twitter.com/BakhtawarAbbasi",
    icon: FaXTwitter,
  },
];

const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: {
            opacity: 0,
            y: 25,
          },
          whileInView: {
            opacity: 1,
            y: 0,
          },
          viewport: {
            once: true,
            amount: 0.2,
          },
          transition: {
            duration: 0.6,
            delay,
            ease: "easeOut",
          },
        };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#06383b] text-white"
    >
      {/* =========================================
          TOP GLOW / BORDER
      ========================================== */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5eead4] to-transparent"
      />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-teal-400/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]"
      />

      {/* =========================================
          MAIN FOOTER
      ========================================== */}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        {/* THREE SECTIONS */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-8 lg:gap-14">

          {/* =====================================
              SECTION 1 — BRAND / ABOUT
          ====================================== */}
          <motion.div
            {...reveal(0)}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            {/* Logo */}
            <motion.a
              href="#home"
              aria-label="Back to home"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.03,
                    }
              }
              transition={{ duration: 0.25 }}
              className="inline-block w-32 sm:w-36 lg:w-40"
            >
              <Image
                src="/logo.png"
                alt="Bakhtawar Abdul Kareem Logo"
                width={160}
                height={96}
                className="h-auto w-full"
              />
            </motion.a>

            {/* Description */}
            <p className="mt-5 max-w-sm font-body text-sm leading-7 text-white/65 sm:text-base">
              Hello! I&apos;m Bakhtawar, a full stack developer, digital
              marketer and graphic designer who builds fast, good-looking
              websites and helps brands grow online.
            </p>
          </motion.div>

          {/* =====================================
              SECTION 2 — CONTACT
          ====================================== */}
          <motion.div
            {...reveal(0.1)}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h2 className="mb-5 text-lg font-semibold tracking-wide text-[#5eead4] sm:text-xl">
              Contact Me
            </h2>

            <ul className="w-full max-w-sm space-y-4">
              {/* Email */}
              <li>
                <a
                  href="mailto:bakhtawarabbasi009@gmail.com"
                  className="group flex items-center gap-3 rounded-xl p-2.5 -m-2.5 transition-all duration-300 hover:bg-white/[0.04]"
                >
                  <span
                    className="
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-xl border border-white/10
                      bg-white/[0.05]
                      text-[#5eead4]
                      transition-all duration-300
                      group-hover:border-[#5eead4]/40
                      group-hover:bg-[#5eead4]
                      group-hover:text-[#06383b]
                      group-hover:shadow-[0_0_20px_rgba(94,234,212,0.2)]
                    "
                  >
                    <FiMail size={18} aria-hidden="true" />
                  </span>

                  <span className="min-w-0 break-all text-sm text-white/70 transition-colors duration-300 group-hover:text-white sm:text-base">
                    bakhtawarabbasi009@gmail.com
                  </span>

                  
                </a>
              </li>

              {/* Location */}
              <li>
                <div className="group flex items-center gap-3 rounded-xl p-2.5 -m-2.5 transition-all duration-300 hover:bg-white/[0.04]">
                  <span
                    className="
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-xl border border-white/10
                      bg-white/[0.05]
                      text-[#5eead4]
                      transition-all duration-300
                      group-hover:border-[#5eead4]/40
                      group-hover:bg-[#5eead4]
                      group-hover:text-[#06383b]
                      group-hover:shadow-[0_0_20px_rgba(94,234,212,0.2)]
                    "
                  >
                    <FiMapPin size={18} aria-hidden="true" />
                  </span>

                  <span className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white sm:text-base">
                    North Karachi, Pakistan
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* =====================================
              SECTION 3 — SOCIALS
          ====================================== */}
          <motion.div
            {...reveal(0.2)}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h2 className="mb-5 text-lg font-semibold tracking-wide text-[#5eead4] sm:text-xl">
              Connect With Me
            </h2>

            <p className="mb-5 max-w-xs text-sm leading-6 text-white/60">
              Follow me on social platforms and stay connected.
            </p>

            {/* Social Icons */}
            <ul
              className="flex flex-wrap justify-center gap-3 md:justify-start"
              aria-label="Social links"
            >
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: -5,
                            scale: 1.06,
                          }
                    }
                    whileTap={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 0.95,
                          }
                    }
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-xl
                      border border-white/10
                      bg-white/[0.05]
                      text-white/80
                      shadow-sm
                      transition-all duration-300
                      hover:border-[#5eead4]/50
                      hover:bg-[#5eead4]
                      hover:text-[#06383b]
                      hover:shadow-[0_0_24px_rgba(94,234,212,0.22)]
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#5eead4]
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[#06383b]
                      sm:h-12 sm:w-12
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="text-base sm:text-lg"
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
