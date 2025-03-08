"use client";

import { Playfair_Display, Space_Grotesk, Crimson_Pro } from "next/font/google";
import clsx from "clsx";
import { motion } from "framer-motion";

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
          <source src="/sunset.mp4" type="video/mp4" />
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
        <div className="relative w-12 h-12 rotate-45 hover:rotate-[135deg] transition-transform duration-700">
          <div className="absolute inset-0 bg-white/10 transform-gpu preserve-3d cube-front" />
          <div className="absolute inset-0 bg-white/5 transform-gpu preserve-3d cube-right" />
          <div className="absolute inset-0 bg-white/20 transform-gpu preserve-3d cube-top" />
        </div>

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
