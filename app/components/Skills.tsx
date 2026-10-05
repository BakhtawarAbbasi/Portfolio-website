"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { FiCode, FiTrendingUp, FiFeather, FiTool } from "react-icons/fi";

import type { IconType } from "react-icons";

/* =========================================================
   TYPES
========================================================= */

type Category = {
  title: string;
  description: string;
  icon: IconType;
  skills: string[];
};

/* =========================================================
   SKILLS DATA
========================================================= */

const categories: Category[] = [
  {
    title: "Full Stack Development",
    description: "Building modern, responsive and powerful web applications.",
    icon: FiCode,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
    ],
  },

  {
    title: "Digital Marketing",
    description:
      "Growing brands through SEO, social media and digital campaigns.",
    icon: FiTrendingUp,
    skills: [
      "SEO",
      "Social Media Marketing",
      "Meta Ads",
      "Marketing Automation",
      "Content Strategy",
    ],
  },

  {
    title: "Graphic Designing",
    description: "Creating engaging visuals, branding and digital experiences.",
    icon: FiFeather,
    skills: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Canva",
      "Social Media Design",
      "Branding",
      
    ],
  },

  {
    title: "Others",
    description:
      "Tools and technologies I use to build, manage and deliver projects.",
    icon: FiTool,
    skills: ["Git", "GitHub", "Libraries", "VS Code", "Docker", "AI Automation"],
  },
];

/* =========================================================
   SKILL ITEM (name only)
========================================================= */

const SkillItem: React.FC<{
  name: string;
  index: number;
}> = ({ name, index }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="
        min-w-0
        max-w-full
        break-words
        rounded-full
        border
        border-[#cfe7e7]
        bg-white/80
        px-3
        py-1.5
        text-[12px]
        font-medium
        leading-5
        text-[#35666a]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#078589]/50
        hover:bg-white
        hover:text-[#07565a]
        hover:shadow-[0_4px_12px_rgba(0,90,90,0.08)]
        active:scale-[0.97]
        sm:px-3.5
        sm:text-[13px]
      "
    >
      {name}
    </motion.li>
  );
};

/* =========================================================
   SKILL CARD
========================================================= */

const SkillCard: React.FC<{
  category: Category;
  index: number;
}> = ({ category, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const CategoryIcon = category.icon;

  // Cursor-following glow: stores the pointer position as CSS variables so the
  // radial highlight in the background can track the mouse on hover.
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[20px]
        border
        border-[#dceeee]
        bg-[#f1fafb]
        p-5
        shadow-[0_6px_22px_rgba(0,80,80,0.045)]
        transition-all
        duration-500
        hover:border-[#addada]
        hover:bg-[#eef9f9]
        hover:shadow-[0_16px_38px_rgba(0,90,90,0.11)]
        sm:p-6
        lg:p-7
      "
    >
      {/* Decorative glow (static, top-right corner) */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-[#55c6c0]/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-[#55c6c0]/20
        "
      />

      {/* Cursor-following glow (only visible on hover) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(7,133,137,0.10), transparent 70%)",
        }}
      />

      {/* Top accent */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-0
          right-0
          top-0
          h-[3px]
          bg-[#078589]
          opacity-70
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Category header */}
      <div className="relative">
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { scale: 1.07, rotate: 3 }}
          transition={{ duration: 0.25 }}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-white
            text-[#078589]
            shadow-[0_5px_16px_rgba(0,100,100,0.08)]
            sm:h-16
            sm:w-16
          "
        >
          <CategoryIcon size={31} strokeWidth={1.7} aria-hidden="true" />
        </motion.div>

        <h3
          className="
            mt-5
            text-[19px]
            font-bold
            tracking-tight
            text-[#07565a]
            sm:text-[21px]
          "
        >
          {category.title}
        </h3>

        <p
          className="
            mt-2
            max-w-sm
            text-[13px]
            leading-5
            text-[#35666a]/75
            sm:text-sm
            sm:leading-6
          "
        >
          {category.description}
        </p>
      </div>

      {/* Skills: names only, wrapped as pills */}
      <ul
        className="
          relative
          mt-5
          flex
          flex-wrap
          gap-2
          border-t
          border-[#d5eaea]
          pt-4
          sm:mt-6
          sm:pt-5
        "
      >
        {category.skills.map((skill, skillIndex) => (
          <SkillItem key={skill} name={skill} index={skillIndex} />
        ))}
      </ul>

      {/* Bottom hover line */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-[3px]
          w-0
          rounded-r-full
          bg-[#078589]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.article>
  );
};

/* =========================================================
   MAIN SKILLS SECTION
========================================================= */

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-12
        sm:px-6
        sm:py-14
        md:px-10
        md:py-16
        lg:px-14
        lg:py-20
        xl:px-16
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-16
          h-72
          w-72
          rounded-full
          bg-teal-100/40
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-80
          w-80
          rounded-full
          bg-cyan-100/30
          blur-3xl
        "
      />

      {/* Container */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          2xl:max-w-[1500px]
        "
      >
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="
              text-base
              font-semibold
              tracking-wide
              text-[#078589]
              sm:text-lg
            "
          >
            My Skills
          </p>

          <h2
            className="
              mt-1
              text-3xl
              font-bold
              tracking-tight
              text-[#063f42]
              sm:text-4xl
              md:text-[42px]
              lg:text-5xl
            "
          >
            Technical Skills
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            items-stretch
            gap-5
            sm:mt-9
            sm:gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;