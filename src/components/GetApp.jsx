"use client";

import React, { useLayoutEffect, useRef } from "react";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetApp = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app relative w-full max-container rounded-[32px] bg-[#f9f9f9] px-8 py-16 lg:py-24 xl:px-16 flex flex-col-reverse lg:flex-row justify-between items-center gap-12 overflow-hidden shadow-xl z-10">

        {/* Text content */}
        <div
          ref={textRef}
          className="z-20 flex w-full lg:w-[50%] flex-col items-start justify-center gap-8"
        >
          <h2 className="bold-40 lg:bold-64 max-w-[400px] text-white  drop-shadow-md">
            Get for free now!
          </h2>
          <p className="regular-16 text-white">
            Available on iOS and Android. Experience seamless navigation even offline.
          </p>
          <div className="flex w-full flex-col gap-3 xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/images/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/images/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

       
        <div
          ref={imageRef}
          className="z-20 flex justify-center items-center w-full lg:w-[50%]"
        >
          <img
            src="/images/phones.png"
            alt="phones"
            width={550}
            height={870}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
