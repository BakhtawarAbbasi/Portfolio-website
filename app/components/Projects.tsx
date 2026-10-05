"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FiCode,
  FiTrendingUp,
  FiFeather,
  FiArrowUpRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type Project = {
  title: string;
  description: string;
  link?: string; // leave out while a project has no live page yet
  image?: string; // file inside /public, e.g. "/food.PNG". Leave out to show gradient art instead
  tags?: string[]; // optional small chips, e.g. ["Next.js", "TypeScript"]
};

type CategoryId = "development" | "marketing" | "design";

type Category = {
  id: CategoryId;
  label: string;
  tagline: string; // short line shown under the tabs
  icon: IconType;
  from: string; // gradient start colour
  to: string; // gradient end colour
  projects: Project[];
};

// How many projects are visible before "Show more" is clicked
const INITIAL_COUNT = 3;

// All projects grouped by category — add new projects to the matching list below.
// Example: { title: "My Project", description: "What it does.", link: "https://...", image: "/my-project.png", tags: ["React"] },
const categories: Category[] = [
  {
    id: "development",
    label: "Development",
    tagline: "Web apps and websites built with modern tools.",
    icon: FiCode,
    from: "#025043",
    to: "#037c6e",
    projects: [
      {
        title: "Chronova Premium Watch E-Commerce Platform",
        description:
          "A fully responsive luxury watch e-commerce platform featuring product discovery, filtering, wishlist, persistent cart, checkout flow, interactive product experiences, and premium motion-driven UI.",
        link: "https://watch-website-beryl.vercel.app/",
        image: "/watch-web.png",
      },
      {
        title: "E-commerce Shoes Website",
        description: "An online shopping platform with responsive design.",
        link: "https://hackathon-ecommerce-git-master-bakhtawars-projects-ab28cde8.vercel.app/",
        image: "/e-commerce.png",
      },
      {
        title: "Shareable Resume Builder",
        description: "A web app that allows users to create, edit, and share their resume.",
        link: "https://hackathon-milestone5-beta.vercel.app/",
        image: "/shareableResume.png",
      },
      {
        title: "To-do List",
        description:
          "This Todo List app helps you manage and track your daily tasks, keeping you productive and organized. Easily add, update, and delete tasks to keep an overview of all your tasks in one place",
        link: "https://todolist-git-main-bakhtawars-projects-ab28cde8.vercel.app/",
        image: "/todo-list.png",
      },
      {
        title: "Food Website",
        description: "Food Website using next.js and typescript",
        link: "https://food-website-alpha-umber.vercel.app/",
        image: "/food.PNG",
        tags: ["Next.js", "TypeScript"],
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    tagline: "Campaigns and strategies that grow an audience.",
    icon: FiTrendingUp,
    from: "#048c7f",
    to: "#28a99e",
    // SAMPLE PROJECTS — made-up placeholders. Replace them with your real work before sharing.
    projects: [
      {
        title: "SEO Growth Campaign",
        description:
          "Keyword research, on-page optimisation and content planning to help a small business rank higher on Google.",
      },
      {
        title: "Instagram Content Strategy",
        description:
          "A monthly content calendar with post ideas, captions and hashtags to grow an engaged audience.",
      },
      {
        title: "Google Ads Lead Campaign",
        description:
          "A paid search campaign built to bring in quality leads with clear targeting and tracked conversions.",
      },
      {
        title: "Email Marketing Funnel",
        description:
          "A welcome sequence and newsletter setup that turns new subscribers into loyal customers.",
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    tagline: "Brand and interface work with a consistent look.",
    icon: FiFeather,
    from: "#4fb9af",
    to: "#81cdc6",
    // SAMPLE PROJECTS — made-up placeholders. Replace them with your real work before sharing.
    projects: [
      {
        title: "Brand Identity Kit",
        description:
          "Logo, colour palette and typography guidelines that give a new brand a consistent look.",
      },
      {
        title: "Social Media Post Pack",
        description:
          "A set of ready-to-use Canva templates for posts and stories, matched to the brand style.",
      },
      {
        title: "Mobile App UI Kit",
        description:
          "Clean app screens and reusable components designed in Figma, ready to hand over to developers.",
      },
      {
        title: "Restaurant Menu Design",
        description:
          "A print-ready menu layout with easy-to-scan sections and a warm, appetising style.",
      },
    ],
  },
];

// One project card: soft 3D tilt + cursor glow on desktop, always-visible link on touch screens.
const ProjectCard: React.FC<{ project: Project; index: number; category: Category }> = ({
  project,
  index,
  category,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const CategoryIcon = category.icon;

  // Tilt values (-0.5 to 0.5 across the card), smoothed with a spring
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), { stiffness: 220, damping: 22 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), { stiffness: 220, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mx", `${x}px`);
    e.currentTarget.style.setProperty("--my", `${y}px`);
    if (!shouldReduceMotion) {
      px.set(x / rect.width - 0.5);
      py.set(y / rect.height - 0.5);
    }
  };

  const handleMouseLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#dceeee] bg-white shadow-[0_6px_22px_rgba(0,80,80,0.05)] transition-[border-color,box-shadow] duration-500 focus-within:border-[#078589] hover:border-[#9fd6d6] hover:shadow-[0_22px_48px_rgba(0,90,90,0.16)]"
    >
      {/* Glow that follows the cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(7,133,137,0.12), transparent 70%)",
        }}
      />

      {/* Visual area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#eef9f9]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className="relative flex h-full w-full items-center justify-center overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${category.from}, ${category.to})` }}
          >
            {/* subtle dot texture */}
            <span
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <span className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/20" />
            <span className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-black/10" />
            <CategoryIcon className="relative text-5xl text-white drop-shadow-md sm:text-6xl" />
          </div>
        )}

        {/* Dark fade + "View live" pill, shown on hover (desktop) */}
        {project.link && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-[#063f42]/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span className="inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 font-body text-xs font-semibold text-[#07565a] shadow-lg transition-transform duration-300 group-hover:translate-y-0">
              Open live site
              <FiArrowUpRight />
            </span>
          </div>
        )}

      
      </div>

      {/* Text content */}
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-xl font-bold tracking-tight text-[#07565a] sm:text-[22px] 2xl:text-2xl">
          {project.title}
        </h3>

        <p className="mt-2.5 line-clamp-3 flex-1 font-body text-sm leading-6 text-[#35666a] 2xl:text-base">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[#e3f4f3] px-2.5 py-1 font-body text-xs font-medium text-[#07565a]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-[#e4f1f1] pt-4">
          {project.link ? (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} (opens in a new tab)`}
              // after:absolute makes the whole card clickable, not just the text
              className="inline-flex items-center gap-1.5 rounded-sm font-heading font-semibold text-[#078589] transition-colors duration-300 after:absolute after:inset-0 after:z-30 hover:text-[#07565a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#078589]"
            >
              View Project
              <FiArrowUpRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 font-body text-sm text-[#35666a]/70">
              <span className="h-2 w-2 rounded-full bg-[#f5b942]" aria-hidden="true" />
              Details coming soon
            </span>
          )}
        </div>
      </div>

      {/* Accent line: grows from the left on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-20 h-[3px] w-0 rounded-r-full transition-all duration-500 group-hover:w-full"
        style={{ background: `linear-gradient(90deg, ${category.from}, ${category.to})` }}
      />
    </motion.article>
  );
};

const ProjectsPage: React.FC = () => {
  const [activeId, setActiveId] = useState<CategoryId>("development");
  // Remembers which categories have "Show more" opened
  const [expanded, setExpanded] = useState<Record<CategoryId, boolean>>({
    development: false,
    marketing: false,
    design: false,
  });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const active = categories.find((c) => c.id === activeId) ?? categories[0];
  const isExpanded = expanded[active.id];
  const hasMore = active.projects.length > INITIAL_COUNT;
  const hiddenCount = active.projects.length - INITIAL_COUNT;
  const visibleProjects = isExpanded ? active.projects : active.projects.slice(0, INITIAL_COUNT);
  const gridId = `projects-grid-${active.id}`;

  const toggleExpanded = () => setExpanded((prev) => ({ ...prev, [active.id]: !prev[active.id] }));

  // Left / Right arrow keys move between tabs (standard tab keyboard behaviour)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const step = e.key === "ArrowRight" ? 1 : categories.length - 1;
    const next = (index + step) % categories.length;
    setActiveId(categories[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f7fcfc] via-[#e9f7f6] to-[#d6efed] px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:min-h-screen lg:px-14 lg:py-24 xl:px-16"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl"
      />
      {/* Soft grid texture, fades out toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e3f1f1 1px, transparent 1px), linear-gradient(to bottom, #e3f1f1 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black, transparent 75%)",
        }}
      />
      {/* Tint that follows the selected category */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-colors duration-500"
        style={{
          background: `radial-gradient(ellipse 70% 45% at 50% 30%, ${active.to}1f, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center 2xl:max-w-[1500px]">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#063f42] sm:text-4xl md:text-[42px] lg:text-5xl 2xl:text-6xl">
            My Projects
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-[#078589] to-[#55c6c0]"
          />
          <p className="mx-auto mt-4 max-w-2xl text-balance font-body text-sm text-[#35666a] sm:text-base 2xl:text-xl">
            Explore some of the projects I&apos;ve worked on. Pick a category to see related work.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="mb-6 grid w-full max-w-2xl grid-cols-3 gap-1 rounded-2xl border border-[#dceeee] bg-[#f1fafb]/90 p-1.5 shadow-[0_6px_22px_rgba(0,80,80,0.06)] backdrop-blur sm:gap-2 sm:p-2"
        >
          {categories.map((category, index) => {
            const isActive = category.id === activeId;
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${category.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${category.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(category.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`relative flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl px-1.5 py-2.5 font-body font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#078589] sm:flex-row sm:gap-2.5 sm:px-4 ${
                  isActive ? "text-[#07565a]" : "text-[#35666a] hover:bg-white/70 hover:text-[#07565a]"
                }`}
              >
                {/* White pill that slides between tabs */}
                {isActive && (
                  <motion.span
                    layoutId="active-project-tab"
                    aria-hidden="true"
                    className="absolute inset-0 overflow-hidden rounded-xl border border-[#addada] bg-white shadow-[0_6px_16px_rgba(0,100,100,0.12)]"
                    transition={
                      shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }
                    }
                  >
                    <span
                      className="absolute inset-x-0 bottom-0 h-[3px]"
                      style={{ background: `linear-gradient(90deg, ${category.from}, ${category.to})` }}
                    />
                  </motion.span>
                )}

                <Icon aria-hidden="true" className={`relative text-lg sm:text-xl ${isActive ? "text-[#078589]" : ""}`} />
                <span className="relative flex items-center gap-1.5 text-[11px] leading-tight sm:text-base 2xl:text-lg">
                  {category.label}
                  
                </span>
              </button>
            );
          })}
        </div>

        {/* Short line that changes with the selected category */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`tagline-${active.id}`}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="mb-10 px-2 text-center font-body text-sm text-[#35666a] sm:mb-12 sm:text-base"
          >
            {active.tagline}
          </motion.p>
        </AnimatePresence>

        {/* Projects for the selected category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            initial={shouldReduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex w-full flex-col items-center"
          >
            <div
              id={gridId}
              className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8"
            >
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  // Cards revealed by "Show more" animate in from the start of their own batch
                  index={index >= INITIAL_COUNT ? index - INITIAL_COUNT : index}
                  category={active}
                />
              ))}
            </div>

            {/* Show more / Show less — only when the category has more than 3 projects */}
            {hasMore && (
              <button
                type="button"
                onClick={toggleExpanded}
                aria-expanded={isExpanded}
                aria-controls={gridId}
                className="group/btn mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#078589] bg-white px-7 py-2.5 font-body font-medium text-[#078589] shadow-sm transition duration-300 hover:bg-[#078589] hover:text-white hover:shadow-lg hover:shadow-[#078589]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#078589] sm:w-auto 2xl:text-xl"
              >
                {isExpanded ? "Show less" : `Show more ${hiddenCount === 1 ? "project" : "projects"}`}
                {isExpanded ? (
                  <FiChevronUp aria-hidden="true" className="transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                ) : (
                  <FiChevronDown aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                )}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsPage;