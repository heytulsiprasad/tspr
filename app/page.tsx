"use client";

import { Playfair_Display, Space_Grotesk, Crimson_Pro } from "next/font/google";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HERO_VIDEOS = [
  "/hero/citynight.mp4",
  "/hero/hills.mp4",
  "/hero/sunset.mp4",
  "/hero/waterfall.mp4",
];

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400"],
});

const Home = () => {
  const [videoSrc, setVideoSrc] = useState(HERO_VIDEOS[0]);

  useEffect(() => {
    const randomVideo =
      HERO_VIDEOS[Math.floor(Math.random() * HERO_VIDEOS.length)];
    setVideoSrc(randomVideo);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative flex-1">
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-[48px] p-8"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Top Left Text */}
        <div
          className={`absolute top-12 left-12 z-10 ${spaceGrotesk.className}`}
        >
          <p className="text-white/70 text-sm tracking-wider uppercase mb-2">
            Developer + Designer
          </p>
          <h2 className="text-xl text-white/90">
            Building digital experiences
          </h2>
        </div>

        {/* Top Right Text */}
        <div
          className={`absolute top-12 right-12 text-right z-10 ${crimsonPro.className}`}
        >
          <p className="text-white/70 text-lg italic">Based in</p>
          <h2 className="text-2xl text-white/90">India</h2>
        </div>

        {/* Center Text */}
        <h1
          className={clsx(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "text-center drop-shadow-lg z-10",
            "font-bold text-white",
            playfair.className
          )}
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          Creating
          <br />
          Digital Magic
        </h1>

        {/* Bottom Left Text */}
        <div className="absolute bottom-12 left-12 z-10">
          <p className="text-white/70 text-sm tracking-wide uppercase mb-1">
            Portfolio 2024
          </p>
          <h2 className="text-xl text-white/90">Let&apos;s collaborate</h2>
        </div>
      </div>

      <footer className="h-24 px-8 -mt-6 flex items-center justify-between relative z-20">
        <div className="flex flex-col gap-0.5">
          <span className={`text-xl ${playfair.className}`}>Tulsi</span>
          <span className={`text-lg text-white/70 ${spaceGrotesk.className}`}>
            Prasad
          </span>
        </div>

        {/* 3D Logo */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          {/* Front face */}
          <path
            d="M3 17V7L12 3L21 7V17L12 21L3 17Z"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
          {/* Right edge */}
          <path
            d="M12 21V11M21 17L12 11"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Inner detail */}
          <path
            d="M12 11L3 7"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <motion.button
          className={`px-6 py-2.5 border border-white/20 rounded-lg ${spaceGrotesk.className} relative overflow-hidden group`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("https://wirescript.vercel.app/blog/")}
        >
          <motion.span
            className="relative z-10"
            whileHover={{ y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Read Blogs
          </motion.span>
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.button>
      </footer>
    </main>
  );
};

export default Home;
