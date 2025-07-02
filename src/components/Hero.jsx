"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "./Button";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

      // Headline animation
      timeline.from(".hero-heading", { opacity: 0, y: 40 });

      // Paragraph
      timeline.from(".hero-subtext", { opacity: 0, y: 30 }, "-=0.7");

      // Star rating
      timeline.from(".hero-stars img", {
        scale: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      }, "-=0.5");

      // Rating text
      timeline.from(".hero-rating", { opacity: 0, x: 30 }, "-=0.6");

      // Buttons
      timeline.from(".hero-btn", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
      }, "-=0.6");

      // Info Card
      timeline.from(".hero-infocard", {
        opacity: 0,
        x: 50,
        duration: 1,
      }, "-=0.8");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <img
          src="/images/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]"
        />

        <h1 className="hero-heading bold-52 lg:bold-88">
          Journey Beyond Limits with Globeora
        </h1>

        <p className="hero-subtext regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          At Globeora, every journey is a step into the extraordinary. Discover untouched
          beauty, hidden worlds, and unforgettable adventures — all in one seamless travel
          experience.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="hero-stars flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <img
                  src="/images/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="hero-rating bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Explorers Trust Globeora
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" className="hero-btn" />
          <Button
            type="button"
            title="How we work?"
            icon="/images/play.svg"
            variant="btn_white_text"
            className="hero-btn"
          />
        </div>
      </div>

      {/* Info Card */}
      <div className="relative flex flex-1 items-start">
        <div className="hero-infocard relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <img src="/images/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Glacial Rift Camp</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
