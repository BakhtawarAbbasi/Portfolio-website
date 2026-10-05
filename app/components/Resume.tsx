"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiFileText,
  FiArrowUpRight,
} from "react-icons/fi";

const Resume = () => {
  return (
    <section
      id="resume"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-10
        lg:px-14
        xl:px-16
      "
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          top-10
          h-64
          w-64
          rounded-full
          bg-teal-100/40
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          bottom-0
          h-56
          w-56
          rounded-full
          bg-cyan-100/30
          blur-3xl
        "
      />

      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div className="relative mx-auto w-full max-w-6xl">

        {/* =========================
            HEADING
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-8
                w-1
                rounded-full
                bg-[#078589]
                sm:h-9
              "
            />

            <h2
              className="
                text-2xl
                font-bold
                tracking-tight
                text-[#07565a]
                sm:text-3xl
                md:text-4xl
              "
            >
              My Resume
            </h2>
          </div>

          <p
            className="
              mt-2
              pl-4
              text-sm
              leading-6
              text-[#35666a]/75
              sm:text-base
            "
          >
            Download my CV for more details
          </p>
        </motion.div>

        {/* =========================
            RESUME CARD
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          whileHover={{
            y: -3,
          }}
          className="
            group
            relative
            mt-7
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#d5eeee]
            bg-gradient-to-r
            from-[#f2fbfb]
            via-[#eefafa]
            to-[#e8f8f8]
            p-5
            shadow-[0_8px_30px_rgba(0,90,90,0.05)]
            transition-all
            duration-500
            hover:border-[#9dd9d9]
            hover:shadow-[0_15px_40px_rgba(0,100,100,0.10)]
            sm:rounded-[20px]
            sm:p-6
            md:p-7
            lg:p-8
          "
        >
          {/* =========================
              CARD GLOW
          ========================== */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-teal-300/10
              blur-3xl
              transition-all
              duration-500
              group-hover:bg-teal-300/20
            "
          />

          {/* =========================
              CARD CONTENT
          ========================== */}

          <div
            className="
              relative
              flex
              w-full
              flex-col
              gap-6
              sm:gap-7
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* =========================
                LEFT CONTENT
            ========================== */}

            <div
              className="
                flex
                min-w-0
                flex-1
                items-center
                gap-4
                sm:gap-5
                md:gap-6
              "
            >
              {/* =========================
                  DOCUMENT ICON
              ========================== */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  relative
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#d5eeee]
                  bg-white
                  shadow-[0_5px_20px_rgba(0,100,100,0.08)]
                  sm:h-[72px]
                  sm:w-[72px]
                  sm:rounded-2xl
                  md:h-20
                  md:w-20
                "
              >
                {/* Icon Glow */}

                <div
                  className="
                    absolute
                    inset-2
                    rounded-xl
                    bg-[#078589]/10
                    blur-md
                  "
                />

                <FiFileText
                  className="
                    relative
                    text-[#078589]
                
                  "
                  size={42}
                  strokeWidth={1.5}
                />

                {/* Small Badge */}

                <div
                  className="
                    absolute
                    -right-1.5
                    -top-1.5
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#078589]
                    text-white
                    shadow-md
                  "
                >
                  <FiArrowUpRight
                    size={12}
                    strokeWidth={2.5}
                  />
                </div>
              </motion.div>

              {/* =========================
                  TEXT
              ========================== */}

              <div className="min-w-0">
                <h3
                  className="
                    text-base
                    font-bold
                    text-[#07565a]
                    sm:text-lg
                    md:text-xl
                  "
                >
                  Resume / CV
                </h3>

                <p
                  className="
                    mt-1
                    max-w-xl
                    text-xs
                    leading-5
                    text-[#35666a]/75
                    sm:mt-1.5
                    sm:text-sm
                    sm:leading-6
                    md:text-base
                  "
                >
                  View or download my complete resume with
                  all my skills, experience and qualifications.
                </p>
              </div>
            </div>

            {/* =========================
                DOWNLOAD BUTTON
            ========================== */}

            <motion.a
              href="/resume/Bakhtawar-CV.pdf"
              download
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group/button
                flex
                w-full
                shrink-0
                items-center
                justify-center
                gap-2.5
                rounded-xl
                bg-[#078589]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_6px_18px_rgba(0,120,120,0.18)]
                transition-all
                duration-300
                hover:bg-[#056d70]
                hover:shadow-[0_8px_25px_rgba(0,120,120,0.28)]
                sm:w-auto
                sm:min-w-[155px]
                sm:px-6
                sm:py-4
                sm:text-[15px]
              "
            >
              <span>Download CV</span>

              <FiDownload
                size={18}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-y-0.5
                "
              />
            </motion.a>
          </div>

          {/* =========================
              BOTTOM ACCENT LINE
          ========================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              h-[2px]
              w-0
              bg-[#078589]
              transition-all
              duration-500
              group-hover:w-full
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;