"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ArrowUpRight, 
  QrCode, 
  Sparkles, 
  Compass, 
  CircleDot, 
  Layers, 
  Cpu, 
  Share2, 
  Maximize2 
} from "lucide-react";

export default function FuturisticHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const silhouetteX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const silhouetteY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const lightX = useTransform(smoothX, [-0.5, 0.5], ["25%", "45%"]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], ["30%", "60%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-screen h-screen min-h-[720px] bg-[#050811] text-white overflow-hidden flex flex-col justify-between p-6 md:p-10 select-none"
    >
      {/* 1. ATMOSPHERIC BACKDROP & LIGHTING */}
      {/* Dynamic Radial Ambient Spotlight (Cobalt / Ice Blue) */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          background: "radial-gradient(ellipse at 42% 48%, rgba(56, 128, 214, 0.42) 0%, rgba(18, 54, 114, 0.28) 42%, rgba(5, 8, 17, 0.95) 85%)",
        }}
      />

      {/* Floating Cyan Specular Flares */}
      <motion.div 
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 z-0"
        style={{
          background: "radial-gradient(circle, #60a5fa 0%, #1e3a8a 60%, transparent 80%)",
          left: lightX,
          top: lightY,
        }}
      />

      {/* Subtle Grid / Texture Matrix */}
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none z-0" />
      <div className="absolute inset-0 radial-vignette pointer-events-none z-10" />

      {/* Futuristic Scanline */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-15">
        <div className="w-full h-24 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scanline" />
      </div>

      {/* 2. TOP NAV / EDITORIAL HEADER */}
      <header className="relative z-20 flex items-center justify-between w-full text-xs font-mono tracking-wider">
        {/* Brand identity badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <div className="w-6 h-6 border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-md">
            <div className="w-2.5 h-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          </div>
          <span className="font-bold tracking-widest text-slate-200 uppercase">
            TIZI DESIGN <span className="text-white/40 font-light mx-1">×</span> BRANDING
          </span>
        </motion.div>

        {/* Center coordinates / minimal dot markers */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden md:flex items-center gap-6 text-[10px] text-slate-400 font-mono tracking-widest"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-slate-300">SYSTEM.ACTIVE</span>
          </div>
          <span className="text-white/20">|</span>
          <span>LAT: 34.0522° N</span>
          <span className="text-white/20">|</span>
          <span>LONG: 118.2437° W</span>
        </motion.div>

        {/* Top Right Action & Index */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-4 text-[11px]"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/30 transition-colors cursor-pointer group">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-cyan-300 transition-colors" />
            <span className="tracking-widest text-slate-300 group-hover:text-white transition-colors">EDITION // 2025</span>
          </div>
        </motion.div>
      </header>

      {/* 3. CENTERSTAGE HERO CANVAS */}
      <div className="relative z-10 flex-1 grid grid-cols-12 items-center w-full max-w-7xl mx-auto my-auto">
        
        {/* LEFT VERTICAL EDITORIAL BADGE */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden lg:flex col-span-1 flex-col items-center justify-center h-full text-[10px] font-mono tracking-[0.25em] text-slate-400 select-none"
        >
          <div className="rotate-[-90deg] whitespace-nowrap uppercase flex items-center gap-3">
            <span className="text-white/30">【</span>
            <span className="text-slate-300 font-semibold tracking-[0.3em]">TIZI DESIGN</span>
            <span className="text-white/30">】</span>
          </div>
        </motion.div>

        {/* CENTER SILHOUETTE & EYEWEAR SPECULAR REFLECTION */}
        <motion.div 
          className="col-span-12 lg:col-span-6 relative h-[480px] sm:h-[580px] md:h-[640px] flex items-center justify-center"
          style={{
            x: silhouetteX,
            y: silhouetteY,
            rotateX,
            rotateY,
            transformPerspective: 1000,
          }}
        >
          {/* Backlit Glow Ring */}
          <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-transparent blur-3xl pointer-events-none" />

          {/* Procedural High-Fashion Silhouette SVG (Sharp, dramatic contour like the reference) */}
          <svg 
            viewBox="0 0 600 750" 
            className="w-full h-full max-h-[640px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Backlit Blue Edge Gradient */}
              <linearGradient id="rimLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#1e3a8a" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#050811" stopOpacity="0" />
              </linearGradient>

              {/* Glossy Metallic White Glasses Specular */}
              <linearGradient id="glassesReflection" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                <stop offset="45%" stopColor="#e2e8f0" stopOpacity="0.88" />
                <stop offset="75%" stopColor="#94a3b8" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
              </linearGradient>

              {/* Neon Specular Glow */}
              <filter id="glassesGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Silhouette Outline Body & Trench Jacket */}
            <path 
              d="M 170 750 
                 L 220 540 
                 C 220 540, 240 480, 260 460 
                 C 275 445, 290 410, 290 380 
                 C 290 380, 260 380, 240 370 
                 C 225 362, 215 348, 205 325 
                 C 192 295, 185 270, 188 235 
                 C 190 205, 205 160, 240 120 
                 C 280 75, 335 60, 385 70 
                 C 440 82, 470 125, 480 180 
                 C 490 230, 485 300, 485 360 
                 C 485 410, 520 460, 540 520 
                 L 590 750 
                 Z" 
              fill="#060913" 
            />

            {/* Rim Lighting (Contorno ciano/azul iluminado da referência) */}
            <path 
              d="M 188 235 
                 C 190 205, 205 160, 240 120 
                 C 280 75, 335 60, 385 70 
                 C 440 82, 470 125, 480 180" 
              stroke="url(#rimLightGrad)" 
              strokeWidth="5" 
              strokeLinecap="round" 
              opacity="0.85"
            />

            {/* Profile Nose, Lips & Chin Razor-Sharp Edge */}
            <path 
              d="M 235 150 
                 C 215 190, 205 230, 202 260 
                 L 190 280 
                 C 185 288, 192 295, 198 296 
                 L 208 300 
                 C 205 315, 200 325, 195 332 
                 C 190 339, 200 345, 208 344 
                 C 215 352, 222 360, 235 365 
                 C 248 370, 260 376, 275 385" 
              stroke="#60a5fa" 
              strokeWidth="2.5" 
              strokeOpacity="0.45"
              fill="none"
            />

            {/* Collar & Trench Coat Edges */}
            <path 
              d="M 270 410 
                 L 245 480 
                 L 290 530 
                 M 275 440 
                 L 320 470 
                 L 310 540" 
              stroke="#1e3a8a" 
              strokeWidth="3.5" 
              strokeOpacity="0.7" 
              strokeLinecap="round"
            />

            {/* HIGH-FASHION LUMINESCENT GLASSES (O centro visual exato da foto!) */}
            {/* Left Lens */}
            <motion.ellipse 
              cx="250" 
              cy="235" 
              rx="42" 
              ry="32" 
              fill="url(#glassesReflection)" 
              filter="url(#glassesGlow)"
              transform="rotate(-12 250 235)"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            {/* Right Lens (Partial 3/4 perspective) */}
            <motion.ellipse 
              cx="330" 
              cy="215" 
              rx="38" 
              ry="30" 
              fill="url(#glassesReflection)" 
              filter="url(#glassesGlow)"
              transform="rotate(-8 330 215)"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />

            {/* Glasses Frame Bridge & Sleek Temples */}
            <path 
              d="M 288 222 C 298 217, 305 215, 312 216" 
              stroke="#ffffff" 
              strokeWidth="5" 
              strokeLinecap="round" 
            />
            <path 
              d="M 210 242 L 195 240" 
              stroke="#ffffff" 
              strokeWidth="4" 
              strokeLinecap="round" 
            />
            <path 
              d="M 368 212 L 405 210" 
              stroke="#ffffff" 
              strokeWidth="4" 
              strokeLinecap="round" 
            />

            {/* Intense Glass Specular Flare Beam */}
            <motion.line 
              x1="225" y1="215" x2="275" y2="255" 
              stroke="#ffffff" 
              strokeWidth="4" 
              strokeLinecap="round"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line 
              x1="310" y1="198" x2="350" y2="232" 
              stroke="#ffffff" 
              strokeWidth="3.5" 
              strokeLinecap="round"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {/* Interactive Floating Micro HUD Widget near Glasses */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-1/4 -right-2 md:right-10 bg-slate-950/70 border border-cyan-400/30 backdrop-blur-md px-3 py-2 rounded-sm text-[10px] font-mono shadow-[0_0_20px_rgba(34,211,238,0.15)] flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-cyan-300 font-bold uppercase tracking-wider">OPTIC.HUD // 98.4%</span>
              <span className="text-slate-400 text-[8px]">NEURAL SPECULAR LOCK</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT EDITORIAL TYPOGRAPHY & DATA MATRIX */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center space-y-8 pl-0 lg:pl-6">
          
          {/* SECTION 1: ASIAN EDITORIAL LOGO & BRAND TITLE */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Giant Graphic Kanji & Condensed Title Block */}
            <div className="flex items-start gap-4">
              {/* Graphic Letter "B" with Kanji */}
              <div className="flex items-start gap-2.5">
                <div className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-white font-mono leading-none border-r-2 border-white/40 pr-3">
                  B
                </div>
                <div className="flex flex-col justify-between py-0.5">
                  <span className="text-xl sm:text-2xl font-bold tracking-widest text-white leading-none">
                    品牌
                  </span>
                  <span className="text-xl sm:text-2xl font-bold tracking-widest text-slate-300 leading-none">
                    介绍
                  </span>
                </div>
              </div>

              {/* Ultra Condensed Subtitle */}
              <div className="flex-1 pt-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-sans leading-none">
                  BRAND
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-cyan-300 font-sans leading-none mt-1">
                  INTRODUCTION
                </h2>
              </div>
            </div>

            {/* Modern Hatch Stripe + Meta Status Bar */}
            <div className="flex items-center gap-4 text-xs font-mono pt-1">
              <div className="flex tracking-tighter text-cyan-400/80 font-bold select-none text-base">
                /////////
              </div>
              <span className="text-slate-400 tracking-widest text-[11px] font-semibold">
                B × T
              </span>
              <div className="w-3.5 h-3.5 rounded-full border border-white/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
              <span className="text-white/40">→</span>
              <span className="text-slate-300 tracking-wider text-[11px] uppercase font-mono">
                概述 / PROFILE
              </span>
            </div>
          </motion.div>

          {/* SECTION 2: EDITORIAL TECHNICAL PARAGRAPH BLOCKS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="space-y-4 max-w-lg text-slate-400 text-xs sm:text-sm font-sans leading-relaxed tracking-wide"
          >
            <p className="text-slate-300/90 font-light border-l border-cyan-500/40 pl-3">
              Experimental creative lab fusing futuristic cyberpunk minimalism, high-fashion silhouettes, and next-generation identity systems.
            </p>
            <p className="text-[11px] font-mono text-slate-500 leading-normal line-clamp-3">
              文字版式设计与数字艺术创新的结合。通过极简高反差的视觉语言，构建超越常规维度的品牌新体验。全球先锋美学探索者。
            </p>
          </motion.div>

          {/* SECTION 3: "ABOUT US" HEADLINE WITH GEOMETRIC PIXELS */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-2"
          >
            <div className="relative inline-block">
              <div className="flex items-center gap-2">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-white uppercase font-sans">
                  ABOUT
                </h3>
                {/* Modern Pixel Decors from Reference */}
                <div className="flex flex-col gap-1 -mt-4">
                  <div className="w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  <div className="w-2.5 h-2.5 bg-white/40 ml-2" />
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-slate-200 uppercase font-sans">
                US
              </h3>
            </div>

            {/* Slanted Slash Divider */}
            <div className="text-2xl font-mono text-cyan-400/90 font-bold my-2 select-none">
              /
            </div>
          </motion.div>

          {/* SECTION 4: TRENDING BADGE, QR CODE & CALL TO ACTION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex items-center justify-between pt-2 border-t border-white/10"
          >
            {/* QR Code and Meta Label */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-white text-slate-950 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform cursor-pointer">
                <QrCode className="w-8 h-8" />
              </div>
              <div className="flex flex-col font-mono text-[10px]">
                <span className="text-cyan-400 font-bold uppercase tracking-wider">TRENDING</span>
                <span className="text-slate-400 uppercase tracking-widest text-[9px]">SCAN FOR SHOWREEL</span>
              </div>
            </div>

            {/* Interactive Primary Button */}
            <button className="group relative px-6 py-3 bg-white text-slate-950 font-mono text-xs uppercase font-bold tracking-widest overflow-hidden transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] active:scale-95 flex items-center gap-2">
              <span>EXPLORE WORK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* 4. BOTTOM CORNER ACCENTS & FOOTER METADATA */}
      <footer className="relative z-20 flex items-end justify-between w-full pt-4 border-t border-white/5 text-[10px] font-mono text-slate-500">
        {/* Left Bottom Geometric Marker */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 border-l-2 border-b-2 border-cyan-400" />
          <span className="tracking-widest uppercase text-slate-400">DESIGN // ARCHITECTURE</span>
        </div>

        {/* Center Live Session */}
        <div className="hidden sm:flex items-center gap-6 tracking-widest">
          <span className="hover:text-slate-300 transition-colors cursor-pointer">01/ INTRODUCTION</span>
          <span className="hover:text-slate-300 transition-colors cursor-pointer">02/ WORKS</span>
          <span className="hover:text-slate-300 transition-colors cursor-pointer">03/ PHILOSOPHY</span>
        </div>

        {/* Right Stamp Badge */}
        <div className="flex items-center gap-4">
          <div className="px-2.5 py-1 border border-white/20 text-slate-300 tracking-widest font-mono text-[9px] uppercase bg-white/5 backdrop-blur-sm">
            TIZI.STUDIO
          </div>
        </div>
      </footer>
    </main>
  );
}
