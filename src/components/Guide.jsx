// Guide Section with GSAP Scroll Animation
"use client";

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Guide = () => {
  const cardRef = useRef(null);

  useGSAP(() => {
    const titlesplit = SplitText.create("#guide h2", {
      type: "words"
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#guide",
        start: "top center"
      }
    });

    scrollTimeline
      .from(titlesplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02
      })
      .from("#globeora-powered", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.8")
      .from(".guide-description", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.5")
      .from(".guide-video", {
        opacity: 0,
        scale: 1.02,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5")
      .from("#meter-img", {
        x: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power1.out"
      }, "-=0.5")
      .from("#guide-card-info", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");
  }, []);

  return (
    <section className="flexCenter flex-col">
      <div id="guide" className="padding-container max-container w-full pb-24">
        <img src="/images/camp.svg" alt="camp" width={50} height={50} className="pb-3"/>
        <p id="globeora-powered" className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Powered by Globeora’s Journey Intelligence
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Navigate the Wild with Globeora Precision
          </h2>
          <p className="regular-16 text-black xl:max-w-[520px] guide-description">
            With Globeora, getting lost is a thing of the past. Explore confidently with offline maps, smart navigation, and seamless guidance—no signal required. Bring your crew and conquer every trail, valley, and summit together.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <video
          src="/images/guide-video.mp4"
          alt="boat"
          width={1440}
          height={580}
          className="w-full h-[700px] object-cover object-center 2xl:rounded-5xl guide-video"
          autoPlay
          loop
          preload="true"
          muted
        />

        <div
          ref={cardRef}
          className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20"
        >
          <div id="meter-img" className="flex items-center">
            <img
              src="/images/meter.svg"
              alt="meter"
              width={16}
              height={158}
              className="h-full w-auto"
            />
          </div>
          <div id="guide-card-info" className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">58 min</p>
              </div>
              <p className="bold-20 mt-2">Zerora Outpost</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
             Nexora Gateway
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
