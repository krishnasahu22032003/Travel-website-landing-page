"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import { PEOPLE_URL } from "../../constant";

gsap.registerPlugin(ScrollTrigger);

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.03}
      scale={1}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="camp-tilt"
    >
      <div
        className="camp-card h-[640px] w-full sm:w-[640px] md:w-[760px] lg:w-[980px] min-w-[320px] bg-cover bg-no-repeat will-change-transform lg:rounded-r-5xl 2xl:rounded-5xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
          <div className="flexCenter gap-4">
            <div className="rounded-full bg-green-50 p-4">
              <img src="/images/folded-map.svg" alt="map" width={28} height={28} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="bold-18 text-black camp-title">
                {title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="inline-block mr-1 opacity-0 translate-y-[10px] will-change-transform"
                  >
                    {word}
                  </span>
                ))}
              </h4>
              <p className="regular-14 text-black">{subtitle}</p>
            </div>
          </div>

          <div className="camp-images flexCenter gap-6">
            <span className="flex -space-x-4 overflow-hidden">
              {PEOPLE_URL.map((url, index) => (
                <img
                  key={index}
                  className="inline-block h-10 w-10 rounded-full will-change-transform transition-transform duration-500"
                  src={url}
                  alt="person"
                  width={52}
                  height={52}
                />
              ))}
            </span>
            <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const Camp = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".camp-card");
      const words = gsap.utils.toArray(".camp-title span");
      const peopleImgs = gsap.utils.toArray(".camp-images img");

      cards.forEach((card) => {
        gsap.set(card, { opacity: 0, y: 60 });
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      words.forEach((word) => {
        gsap.set(word, { opacity: 0, y: 10 });
        gsap.to(word, {
          scrollTrigger: {
            trigger: word,
            start: "top 90%",
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      peopleImgs.forEach((img) => {
        gsap.set(img, { opacity: 0, scale: 0.8 });
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
          },
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      });

      // Wait until images load before refreshing ScrollTrigger
      const images = sectionRef.current?.querySelectorAll("img");
      const waitForImages = () =>
        new Promise((resolve) => {
          if (!images || images.length === 0) return resolve();
          let loaded = 0;
          images.forEach((img) => {
            if (img.complete) {
              loaded++;
              if (loaded === images.length) resolve();
            } else {
              img.onload = img.onerror = () => {
                loaded++;
                if (loaded === images.length) resolve();
              };
            }
          });
        });

      waitForImages().then(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"
    >
      <div className="hide-scrollbar px-2 flex w-full items-center justify-start gap-8 overflow-x-auto min-h-[640px]">
        <CampSite
          backgroundImage="/images/bg-bg-img-1.jpg"
          title="Neo Dunes Retreat"
          subtitle="Martian Redlands, Hyperzone"
          peopleJoined="320+ Explorers"
        />
        <CampSite
          backgroundImage="/images/bg-bg-img-2.jpg"
          title="Glacial Void Base"
          subtitle="Icelands of Antora"
          peopleJoined="210+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            Lost in the Map? Discover Hidden Worlds with Globeora.
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Exploring new heights can be overwhelming — from the fear of the unknown to the risk of losing your way. That’s why Globeora exists: to guide every step of your adventure.
          </p>
          <img
            src="/images/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
