
"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiBookOpen,
  FiLayers,
  FiTarget,
  FiDownload,
  FiSend,
} from "react-icons/fi";
import type { IconType } from "react-icons";

// Info rows shown under the intro paragraph (edit text as you like)
const details: { icon: IconType; title: string; text: string }[] = [
  {
    icon: FiBookOpen,
    title: "Education",
    text: "Pre-Engineering (Intermediate)",
  },
  {
    icon: FiLayers,
    title: "Interests",
    text: "Web Development, AI, UI/UX, Graphic Design",
  },
  {
    icon: FiTarget,
    title: "Career Goal",
    text: "Become a skilled software engineer and work on impactful projects.",
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    // Light theme: this section has its own soft white/teal background
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50/60 to-cyan-50 px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-5xl 2xl:max-w-6xl">
        {/* Photo on the left, content on the right */}
        <div className="flex flex-col items-center gap-14 md:flex-row md:items-start md:gap-16">
          {/* LEFT: Photo in a rounded frame with two offset accent blocks behind it */}
          <motion.div
            className="relative shrink-0"
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-72 w-64 sm:h-80 sm:w-72 md:h-[340px] md:w-[300px] lg:h-[380px] lg:w-[340px]"
            >
              {/* Small accent block peeking out above the photo */}
              <span
                aria-hidden="true"
                className="absolute -left-4 -top-5 h-16 w-28 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg sm:h-20 sm:w-32"
              />
              {/* Larger accent block peeking out below the photo */}
              <span
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 h-28 w-40 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-lg sm:h-32 sm:w-48"
              />

              {/* Photo — rounded rectangle, sitting on top of the accent blocks */}
              <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl border-4 border-white shadow-xl">
                <Image
                  src="/jii.png"
                  alt="Bakhtawar's profile photo"
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 288px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            className="w-full text-center md:text-left"
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <p className="font-body text-sm font-medium text-teal-600 sm:text-base">
              Get to know me
            </p>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-wide text-teal-900 md:text-4xl 2xl:text-5xl">
              About Me
            </h2>

            <p className="mt-5 font-body text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
              I&apos;m Bakhtawar, a passionate frontend developer and digital
              marketer with a strong interest in AI and modern web technologies.
              I love turning ideas into real, functional and beautiful web
              applications.
            </p>

            {/* Info rows */}
            <ul className="mt-8 space-y-5 text-left">
              {details.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-teal-300 bg-teal-50 text-teal-700">
                    <Icon className="text-xl" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-teal-900">
                      {title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-slate-600 sm:text-base">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <motion.a
                href="/Bakhtawar_Abdul_Kareem_CV.pdf"
                download="Bakhtawar_Abdul_Kareem_CV.pdf"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-2.5 font-body font-medium text-white shadow-md transition duration-300 hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Download CV
                <FiDownload aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-600 px-6 py-2.5 font-body font-medium text-teal-700 transition duration-300 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Hire Me
                <FiSend aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}