"use client";

import React, { useLayoutEffect, useRef } from "react";
import { SOCIALS, FOOTER_CONTACT_INFO, FOOTER_LINKS } from "../../constant";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const columnsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      columnsRef.current.forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.1,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
          <a href="/" className="mb-8 md:mb-0">
            <img src="/images/globeora-logo.png" alt="Globeora Logo" width={94} height={49} />
          </a>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {/* Footer Columns */}
            {FOOTER_LINKS.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                innerRef={(el) => (columnsRef.current[index] = el)}
              >
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="/">{link}</a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact Info */}
            <FooterColumn
              title={FOOTER_CONTACT_INFO.title}
              innerRef={(el) => (columnsRef.current[FOOTER_LINKS.length] = el)}
            >
              <ul className="flex flex-col gap-4 text-gray-30">
                {FOOTER_CONTACT_INFO.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 md:flex-col lg:flex-row whitespace-nowrap"
                  >
                    <span>{link.label}:</span>
                    <span className="medium-14 text-blue-70">{link.value}</span>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            {/* Socials */}
            <FooterColumn
              title={SOCIALS.title}
              innerRef={(el) => (columnsRef.current[FOOTER_LINKS.length + 1] = el)}
            >
              <ul className="flex gap-4">
                {SOCIALS.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="/">
                      <img src={link} alt="social-icon" width={24} height={24} />
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="h-px w-full bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          © 2025 Globeora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children, innerRef }) => {
  return (
    <div ref={innerRef} className="flex flex-col gap-5 min-w-[150px]">
      <h4 className="bold-18 text-black">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
