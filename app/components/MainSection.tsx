"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { FiCode, FiTrendingUp, FiFeather, FiChevronDown, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const titles = ["Frontend Developer", "Digital Marketer", "Graphic Designer"];

// Small role badges — quickly signal the three skill areas at a glance
const badges = [
  { icon: FiCode, label: "Development" },
  { icon: FiTrendingUp, label: "Marketing" },
  { icon: FiFeather, label: "Design" },
];

// Social links placed along the arc next to the profile photo.
// `angle` = position on the arc in degrees (0 = middle right, negative = up, positive = down)
const socials = [
  { label: "GitHub", href: "https://github.com/BakhtawarAbbasi", icon: FaGithub, angle: -60 },
  { label: "LinkedIn", href: "https://linkedin.com/in/bakhtawar-abbasi-59ba15304/", icon: FaLinkedinIn, angle: -30 },
  { label: "Instagram", href: "https://instagram.com/bakhtawar5867/", icon: FaInstagram, angle: 0 },
  // TODO: replace with your personal Facebook profile URL
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF, angle: 30 },
  { label: "Email", href: "mailto:bakhtawarabbasi009@gmail.com", icon: FiMail, angle: 60 },
];

// Colours of the orbit arc — dark to light teal
const ARC_FROM = "#0d9488";
const ARC_TO = "#5eead4";

// Converts an angle into x/y percentages on a circle inside a 100x100 box.
// Used for both the arc line and the icon positions so they always line up.
const polar = (deg: number, radius = 50) => {
  const rad = (deg * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
};

// Arc runs from -80° (top right) to +80° (bottom right)
const arcStart = polar(-80);
const arcEnd = polar(80);
const arcPath = `M ${arcStart.x} ${arcStart.y} A 50 50 0 0 1 ${arcEnd.x} ${arcEnd.y}`;

const MainSection: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [speed, setSpeed] = useState(200);

  // Respects the user's OS-level "reduce motion" accessibility setting
  const shouldReduceMotion = useReducedMotion();

  // Typewriter effect — types out and deletes each title in a loop
  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[index % titles.length];
      if (deleting) {
        setText(currentTitle.substring(0, text.length - 1));
        setSpeed(100);
      } else {
        setText(currentTitle.substring(0, text.length + 1));
        setSpeed(200);
      }

      if (!deleting && text === currentTitle) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, index, speed]);

  return (
    <div className="relative overflow-hidden bg-[#00383b] text-white">
      {/* Soft background glows: fill empty space on mobile, add depth on desktop */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

      <section
        id="home"
        className="min-h-[100svh] grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-6 px-5 pt-28 pb-20 md:p-10 relative"
      >
        {/* Left Side: Text */}
        <motion.div
          className="space-y-5 md:space-y-6 text-center md:text-left"
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Greeting with accent underline */}
          <div>
            <p className="font-heading text-2xl sm:text-3xl 2xl:text-6xl font-medium tracking-wide text-teal-300">
              Hey there!
            </p>
            <span
              aria-hidden="true"
              className="mt-2 block h-1 w-24 2xl:w-40 rounded-full bg-gradient-to-r from-teal-700 via-teal-500 to-teal-300 mx-auto md:mx-0"
            />
          </div>

          <h1 className="font-heading font-semibold leading-tight text-white 2xl:pb-10">
            {/* Screen readers get the full sentence instead of the half-typed text */}
            <span className="sr-only">
              I&apos;m Bakhtawar, Frontend Developer, Digital Marketer and Graphic Designer
            </span>

            <span aria-hidden="true" className="block text-4xl sm:text-5xl 2xl:text-7xl drop-shadow-[0_0_24px_rgba(94,234,212,0.35)]">
              I&apos;m Bakhtawar,
            </span>

            {/* The typed role sits on its own line, so long titles never push the name around.
                min-h keeps the height steady while the text is empty between titles. */}
            <span
              aria-hidden="true"
              className="mt-2 block min-h-[1.3em] text-2xl sm:text-4xl 2xl:text-6xl font-medium text-teal-300"
            >
              {text}
              <span className="blinking-cursor">|</span>
            </span>
          </h1>

          <p className="text-white/75 2xl:pb-10 2xl:text-3xl text-[15px] leading-relaxed sm:text-base font-body max-w-xl mx-auto md:mx-0">
            I build fast, responsive websites, design interfaces people love,
            and market them to the right audience, turning ideas into
            digital experiences that actually grow your business.
          </p>

          {/* Role badges — quick visual summary of the three skill areas */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 text-xs sm:text-sm font-body text-white/90 bg-white/5 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-sm"
              >
                <Icon className="text-teal-300" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* CTA button — teal gradient pill like the reference */}
          <motion.div
            className="inline-block 2xl:pb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              className="block rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-2.5 font-body font-medium text-white shadow-[0_0_24px_rgba(45,212,191,0.35)] transition duration-300 hover:from-teal-400 hover:to-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 2xl:text-2xl"
            >
              Let&apos;s Connect
            </Link>
          </motion.div>

          {/* Mobile-only socials: the arc around the photo is hidden on small screens */}
          <ul className="flex md:hidden justify-center gap-3 pt-2" aria-label="Social links">
            {socials.map(({ label, href, icon: Icon }) => {
              const isExternal = !href.startsWith("mailto:");
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/40 bg-white/5 text-lg text-teal-300 backdrop-blur-sm transition active:scale-95 hover:bg-teal-300 hover:text-[#00383b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Right Side: circular photo + social icons on an arc (hidden on mobile) */}
        <motion.div
          className="hidden md:flex justify-center md:justify-end"
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Gentle float — the photo, arc and icons move together so they stay aligned */}
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            // Right margin leaves room for the icons that sit on the outer edge of the arc
            className="relative aspect-square w-[280px] lg:w-[340px] xl:w-[400px] 2xl:w-[560px] mr-6 2xl:mr-10"
          >
            {/* Teal glow behind the photo */}
            <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-teal-300 via-teal-500 to-teal-700 blur-2xl opacity-50" />

            {/* Circular profile photo */}
            <div className="absolute inset-[6%] rounded-full overflow-hidden border-4 border-white/15 shadow-lg">
              <Image
                src="/ji.jpg"
                alt="Bakhtawar's profile photo"
                fill
                priority
                sizes="(min-width: 1536px) 500px, (min-width: 1280px) 350px, 300px"
                className="object-cover"
              />
            </div>

            {/* Orbit arc with dots at both ends */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="arcGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={ARC_FROM} />
                  <stop offset="100%" stopColor={ARC_TO} />
                </linearGradient>
              </defs>
              <path
                d={arcPath}
                fill="none"
                stroke="url(#arcGradient)"
                strokeWidth={2}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx={arcStart.x} cy={arcStart.y} r={1.6} fill={ARC_FROM} />
              <circle cx={arcEnd.x} cy={arcEnd.y} r={1.6} fill={ARC_TO} />
            </svg>

            {/* Social icons placed along the arc */}
            <ul className="absolute inset-0 list-none" aria-label="Social links">
              {socials.map(({ label, href, icon: Icon, angle }, i) => {
                const { x, y } = polar(angle);
                const isExternal = !href.startsWith("mailto:");
                return (
                  // Outer <li> handles positioning; inner link handles the animation
                  <li
                    key={label}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <motion.a
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      initial={shouldReduceMotion ? undefined : { scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.7 + i * 0.12 }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 2xl:w-14 2xl:h-14 rounded-full bg-[#00383b]/90 text-teal-300 border border-teal-400/40 backdrop-blur-sm text-base lg:text-lg 2xl:text-2xl transition-colors duration-300 hover:bg-teal-300 hover:text-[#00383b] hover:border-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300"
                    >
                      <Icon aria-hidden="true" />
                      {/* Tooltip label appears on hover / keyboard focus */}
                      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#00383b]/95 px-2 py-1 text-xs font-body text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                        {label}
                      </span>
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>

        {/* Scroll-down hint — now visible on mobile too */}
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          className="flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-white/60 hover:text-white transition duration-300"
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-body tracking-wide">Scroll</span>
          <FiChevronDown size={20} />
        </motion.a>
      </section>
    </div>
  );
};

export default MainSection;