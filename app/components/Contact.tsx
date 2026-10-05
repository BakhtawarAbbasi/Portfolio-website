
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const socials: { label: string; href: string; icon: IconType }[] = [
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
    icon: FaTwitter,
  },
];

/* =========================================
   FORM FIELD STYLING
========================================= */

const fieldClass =
  "w-full rounded-xl border border-[#d9eeee] bg-white px-4 py-3.5 text-[#164e52] placeholder:text-[#7b999b] outline-none shadow-[0_2px_10px_rgba(15,118,110,0.04)] transition-all duration-300 focus:border-[#159a91] focus:ring-4 focus:ring-[#159a91]/10 focus:shadow-[0_4px_18px_rgba(15,118,110,0.08)]";

const labelClass =
  "mb-2 block font-body text-sm font-medium text-[#275b5f]";

/* =========================================
   CONTACT COMPONENT
========================================= */

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const shouldReduceMotion = useReducedMotion();

  /* =========================================
     SEND EMAIL
  ========================================== */

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_o968ffv",
        "template_3rzut6e",
        form.current,
        "H4soOxPaGjO2ScWV6"
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          setStatus("error");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f5fbfb] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#5eead4]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-[#159a91]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#159a91]/30 to-transparent"
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="
            overflow-hidden
            rounded-3xl
            border border-[#dceeee]
            bg-white/80
            shadow-[0_20px_70px_rgba(15,118,110,0.08)]
            backdrop-blur-sm
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">

            {/* =====================================
                LEFT SIDE — CONTACT INFORMATION
            ====================================== */}

            <div
              className="
                relative
                border-b border-[#e1eeee]
                bg-gradient-to-br from-[#effafa] via-[#f7fcfc] to-white
                p-7
                sm:p-10
                lg:border-b-0
                lg:border-r
                lg:p-12
                xl:p-14
              "
            >
              

              <div className="relative">
                {/* Heading */}

                <motion.h2
                  initial={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, x: -20 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="
                    font-heading
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-[#07565a]
                    sm:text-4xl
                  "
                >
                  Get In Touch
                </motion.h2>

                {/* Description */}

                <motion.p
                  initial={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, x: -20 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="
                    mt-3
                    max-w-md
                    font-body
                    text-sm
                    leading-6
                    text-[#658486]
                    sm:text-base
                  "
                >
                  Have a project in mind? Fill in the form and I&apos;ll get
                  back to you soon.
                </motion.p>

                {/* =================================
                    CONTACT INFORMATION
                ================================== */}

                <div className="mt-8 flex flex-col gap-5">

                  {/* EMAIL */}

                  <motion.a
                    href="mailto:your@email.com"
                    initial={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, y: 15 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      p-2
                      -ml-2
                      transition-all
                      duration-300
                      hover:bg-white/70
                    "
                  >
                    <span
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#8dddd5]
                        bg-[#dff8f5]
                        text-[#0b8f87]
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:bg-[#159a91]
                        group-hover:text-white
                        group-hover:shadow-[0_8px_20px_rgba(21,154,145,0.2)]
                      "
                    >
                      <FiMail size={20} aria-hidden="true" />
                    </span>

                    <div className="min-w-0">
                      <p className="font-body text-sm font-semibold text-[#275b5f]">
                        Email
                      </p>
                      <p
                        className="
                          mt-0.5
                          break-all
                          font-body
                          text-sm
                          text-[#4e777a]
                          transition-colors
                          duration-300
                          group-hover:text-[#07827b]
                        "
                      >
                        bakhtawarabbasi009@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  {/* LOCATION */}

                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, y: 15 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.25 }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      p-2
                      -ml-2
                      transition-all
                      duration-300
                      hover:bg-white/70
                    "
                  >
                    <span
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#8dddd5]
                        bg-[#dff8f5]
                        text-[#0b8f87]
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:bg-[#159a91]
                        group-hover:text-white
                        group-hover:shadow-[0_8px_20px_rgba(21,154,145,0.2)]
                      "
                    >
                      <FiMapPin size={20} aria-hidden="true" />
                    </span>

                    <div>
                      <p className="font-body text-sm font-semibold text-[#275b5f]">
                        Location
                      </p>

                      <p className="mt-0.5 font-body text-sm text-[#4e777a]">
                        Karachi, Pakistan
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* =================================
                    SOCIAL ICONS
                ================================== */}

                <motion.ul
                  initial={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, y: 15 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="mt-8 flex flex-wrap gap-3 list-none"
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
                            ? undefined
                            : {
                                y: -4,
                                scale: 1.05,
                              }
                        }
                        whileTap={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: 0.95,
                              }
                        }
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#cce6e5]
                          bg-white
                          text-[#287276]
                          shadow-[0_3px_12px_rgba(15,118,110,0.06)]
                          transition-all
                          duration-300
                          hover:border-[#159a91]
                          hover:bg-[#159a91]
                          hover:text-white
                          hover:shadow-[0_8px_20px_rgba(21,154,145,0.18)]
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[#159a91]
                          focus-visible:ring-offset-2
                        "
                      >
                        <Icon
                          aria-hidden="true"
                          className="text-base"
                        />
                      </motion.a>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>

            {/* =====================================
                RIGHT SIDE — CONTACT FORM
            ====================================== */}

            <div className="bg-white p-7 sm:p-10 lg:p-12 xl:p-14">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-5 font-body"
              >
                {/* FIRST + LAST NAME */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className={labelClass}
                    >
                      First name
                    </label>

                    <input
                      required
                      id="first_name"
                      name="first_name"
                      type="text"
                      placeholder="Alex"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="last_name"
                      className={labelClass}
                    >
                      Last name
                    </label>

                    <input
                      required
                      id="last_name"
                      name="last_name"
                      type="text"
                      placeholder="Lee" 
                      className={fieldClass}
                    />
                  </div>
                </div>

                {/* EMAIL + PHONE */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className={labelClass}
                    >
                      Email
                    </label>

                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone_no"
                      className={labelClass}
                    >
                      Phone no
                    </label>

                    <input
                      required
                      id="phone_no"
                      name="phone_no"
                      type="tel"
                      placeholder="+92 3xx xxxxxxx"
                      className={fieldClass}
                    />
                  </div>
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className={labelClass}
                  >
                    Message
                  </label>

                  <textarea
                    required
                    id="message"
                    name="message"
                    placeholder="Tell me a little about your project..."
                    rows={5}
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                {/* SEND BUTTON */}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -2,
                          scale: 1.01,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    bg-[#0b8f87]
                    px-6
                    py-3.5
                    font-medium
                    text-white
                    shadow-[0_8px_25px_rgba(11,143,135,0.2)]
                    transition-all
                    duration-300
                    hover:bg-[#087a74]
                    hover:shadow-[0_12px_30px_rgba(11,143,135,0.25)]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#159a91]
                    focus-visible:ring-offset-2
                  "
                >
                  {status === "sending" ? (
                    <>
                      <span
                        className="
                          h-4
                          w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend aria-hidden="true" />
                    </>
                  )}
                </motion.button>

                {/* STATUS */}

                <p
                  role="status"
                  aria-live="polite"
                  className="min-h-[1.25rem] text-sm font-body"
                >
                  {status === "success" && (
                    <motion.span
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 0, y: 5 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#0b8f87]"
                    >
                      Your message has been sent successfully!
                    </motion.span>
                  )}

                  {status === "error" && (
                    <motion.span
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 0, y: 5 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500"
                    >
                      Failed to send message, please try again.
                    </motion.span>
                  )}
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

