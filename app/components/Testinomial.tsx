"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Testimonial {
  name: string;
  role: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Khan",
    role: " E-commerce Bussiness Owner",
    message:
    "Bakhtawar did a great job on my website. She understood my requirements, paid attention to the design details, and made sure the website was responsive across different devices. She was professional, easy to communicate with, and delivered the work with great attention to detail.",
    
  },
  {
    name: "Ahmed Khan",
    role: " Business Owner",
    message:
    "I really liked the design work Bakhtawar created for my project. She understood the style I was looking for and turned my ideas into a clean and professional design. She was creative, responsive to feedback, and made the whole process smooth."
,
  },
  {
    name: "Muhammad Hamza",
    role: "Founder & CEO",
    message:
    "Working with Bakhtawar on my digital marketing project was a great experience. She understood my goals, suggested useful ideas, and handled the work professionally. I especially appreciated her creativity, communication, and willingness to make improvements based on feedback.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[#00383b] px-3 py-20 sm:px-8 md:px-8 lg:px-5"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00c6c8]/10 blur-[140px]" />

      {/* Subtle Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,174,180,0.10),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1050px]">
        {/* =========================
            SECTION HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#5eead4] sm:text-4xl">
            Testimonials
          </h2>

          <p className="mt-2 text-sm  font-medium text-white/60 sm:text-base">
            What people say about me
          </p>
        </motion.div>

        {/* =========================
            TESTIMONIAL SLIDER
        ========================== */}
        <div className="flex w-full items-center justify-center gap-2 sm:gap-5 md:gap-8">
          {/* LEFT ARROW */}
          <button
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="group flex shrink-0 items-center justify-center text-white transition-all duration-300 hover:text-[#6ffcff]"
          >
            <FiChevronLeft
              size={38}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>

          {/* =========================
              CARD
          ========================== */}
          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -35,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="
                  relative
                  min-h-[205px]
                  rounded-[20px]
                  border
                  border-[#00c8ca]/70
                  bg-[#07565a]/55
                  px-6
                  py-8
                  shadow-[0_0_25px_rgba(0,210,210,0.08)]
                  backdrop-blur-sm
                  sm:min-h-[220px]
                  sm:px-8
                  md:px-10
                  lg:px-11
                "
              >
                {/* Top Left Quote */}
                <div className="absolute left-5 top-4 text-[38px] leading-none font-serif text-white/90 sm:left-7 sm:top-5 sm:text-[42px]">
                  “
                </div>

                {/* Content */}
                <div className="flex h-full flex-col items-center gap-6 sm:flex-row sm:gap-7">
                  

                  {/* =========================
                      TESTIMONIAL TEXT
                  ========================== */}
                  <div className="flex-1 text-center sm:text-left">
                    <p
                      className="
                        text-[15px]
                        leading-7
                        text-white/90
                        sm:text-[16px]
                        sm:leading-7
                        md:text-[17px]
                      "
                    >
                      "{testimonial.message}"
                    </p>

                    {/* Name + Role */}
                    <div className="mt-5">
                      <p className="text-sm font-semibold text-[#5eead4]  sm:text-[15px]">
                          {testimonial.name}
                      </p>

                      <p className="mt-1 text-xs text-white/55 sm:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="group flex shrink-0 items-center justify-center text-white transition-all duration-300 hover:text-[#6ffcff]"
          >
            <FiChevronRight
              size={38}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* =========================
            SLIDER DOTS
        ========================== */}
        <div className="mt-7 flex items-center justify-center gap-2.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                rounded-full
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "h-2.5 w-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;