"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Star,
  Sparkles,
  TrendingUp,
  Brain,
  Layers,
  BarChart3,
  Globe2,
  CheckCircle2,
  Database,
  LineChart,
  Users,
  Compass,
  Zap,
} from "lucide-react";

export default function AelineLanding() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Cards curvados da Hero em 3D arc
  const heroCards = [
    {
      id: 1,
      title: "Intelligence in Every Decision",
      subtitle: "Enterprise Forecast",
      type: "chart-bars",
      rotation: -18,
      translateY: 42,
      scale: 0.92,
      zIndex: 1,
      content: (
        <div className="p-3.5 flex flex-col h-full justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Growth</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">+38.4%</span>
          </div>
          <div className="my-2">
            <p className="text-[11px] font-bold text-slate-800 leading-tight">Intelligence in Every Decision</p>
          </div>
          <div className="flex items-end gap-1.5 h-16 pt-2">
            {[35, 55, 45, 75, 60, 95, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-slate-100 rounded-t-sm flex flex-col justify-end h-full">
                <div
                  style={{ height: `${h}%` }}
                  className={`w-full rounded-t-sm ${i === 5 ? "bg-cyan-500" : "bg-cyan-200"}`}
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Financial Matrix",
      type: "pricing",
      rotation: -10,
      translateY: 18,
      scale: 0.96,
      zIndex: 2,
      content: (
        <div className="p-3.5 flex flex-col h-full justify-between">
          <div className="flex justify-between items-baseline">
            <span className="text-base font-extrabold text-slate-900">$4,900</span>
            <span className="text-[10px] text-slate-400">/mo tier</span>
          </div>
          <div className="space-y-1.5 my-1.5">
            {[
              { label: "Predictive Ops", val: "$2.4k" },
              { label: "Data Pipeline", val: "$1.8k" },
              { label: "Automations", val: "$700" },
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between text-[10px] border-b border-slate-100 pb-1">
                <span className="text-slate-500">{row.label}</span>
                <span className="font-semibold text-slate-700">{row.val}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-emerald-600 bg-emerald-50/80 p-1 rounded">
            <TrendingUp className="w-3 h-3" />
            <span>ROI target 340% achieved</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Executive Profile",
      type: "profile",
      rotation: -3,
      translateY: 4,
      scale: 1,
      zIndex: 3,
      content: (
        <div className="h-full flex flex-col justify-between overflow-hidden relative">
          <div className="h-28 relative bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-2.5">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
              alt="Leader"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="relative z-10 text-white">
              <span className="text-[9px] uppercase tracking-wider font-medium text-lime-300">Strategy Lead</span>
              <p className="text-xs font-bold leading-tight">Elena Vance</p>
            </div>
          </div>
          <div className="p-2.5 bg-white grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-slate-50 p-1.5 rounded">
              <span className="text-slate-400 block text-[9px]">Revenue</span>
              <span className="font-bold text-slate-900">$2,670</span>
            </div>
            <div className="bg-slate-50 p-1.5 rounded">
              <span className="text-slate-400 block text-[9px]">Efficiency</span>
              <span className="font-bold text-slate-900">$1,200</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Decision Trend",
      type: "chart-curve",
      rotation: 0,
      translateY: 0,
      scale: 1.02,
      zIndex: 4,
      isCenter: true,
      content: (
        <div className="p-3.5 flex flex-col h-full justify-between">
          <div>
            <span className="text-[9px] font-bold text-cyan-600 uppercase tracking-widest block">AI Forecast</span>
            <p className="text-xs font-bold text-slate-800 mt-0.5">Intelligence In Every Decision</p>
          </div>
          <div className="my-1">
            <svg viewBox="0 0 160 50" className="w-full h-12 overflow-visible">
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,40 Q 30,35 60,25 T 120,12 T 160,5"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 0,40 Q 30,35 60,25 T 120,12 T 160,5 L 160,50 L 0,50 Z"
                fill="url(#curveGrad)"
              />
              <circle cx="160" cy="5" r="3.5" fill="#0284c7" className="animate-pulse" />
            </svg>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 font-mono">
            <span>Q1 BASE</span>
            <span className="text-cyan-700 font-semibold">Q4 +142%</span>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Dark Badge",
      type: "dark-badge",
      rotation: 4,
      translateY: 6,
      scale: 1,
      zIndex: 3,
      content: (
        <div className="h-full bg-slate-950 text-white p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 text-lime-400">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping inline-block" />
            <span className="text-[9px] font-bold tracking-wider uppercase">Strategic Core</span>
          </div>
          <div className="my-auto">
            <p className="text-[12px] font-medium leading-snug text-slate-200">
              Expertise that Combines <span className="text-white font-bold underline decoration-lime-400 underline-offset-2">Strategy</span>, Data, and Artificial Intelligence
            </p>
          </div>
          <div className="text-[9px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-1.5">
            <span>ADAPTIVE OPS</span>
            <span className="text-lime-400 font-mono">v4.2</span>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Data Training",
      type: "cyan-blur",
      rotation: 11,
      translateY: 20,
      scale: 0.96,
      zIndex: 2,
      content: (
        <div className="h-full bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 text-white p-3.5 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/10 blur-xl pointer-events-none" />
          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <Database className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-bold leading-tight">Data training</h4>
            <p className="text-[9px] text-sky-100/90 mt-0.5">Empowering your core model</p>
          </div>
          <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
            <div className="bg-white h-full w-[82%] rounded-full" />
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Data Points",
      type: "stats-lime",
      rotation: 18,
      translateY: 42,
      scale: 0.92,
      zIndex: 1,
      content: (
        <div className="p-3.5 flex flex-col h-full justify-between bg-white">
          <div className="grid grid-cols-2 gap-1 text-[9px] text-slate-400">
            <div className="bg-slate-50 p-1 rounded text-center font-mono">Smarter</div>
            <div className="bg-slate-50 p-1 rounded text-center font-mono">Strategic</div>
          </div>
          <div>
            <span className="text-[9px] text-slate-400 block">Data Points</span>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">520k+</span>
          </div>
          <div className="flex items-center justify-between text-[9px] text-slate-500 border-t border-slate-100 pt-1">
            <span>Verified node</span>
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
          </div>
        </div>
      ),
    },
  ];

  const brandLogos = [
    { name: "Logoipsum One", icon: Sparkles },
    { name: "Logoipsum Two", icon: Globe2 },
    { name: "Logoipsum Three", icon: Layers },
    { name: "Logoipsum Four", icon: Brain },
    { name: "Logoipsum Five", icon: Zap },
    { name: "Logoipsum Six", icon: Compass },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-lime-300 selection:text-black">
      {/* ========================================================
          HERO SKY SECTION (Azul Céu com Nuvens Suaves em 3D)
          ======================================================== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#1877f2] via-[#248afb] to-[#60a5fa] pb-24 pt-4 sm:pt-6">
        {/* Nuvens Procedurais & Atmosfera */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Luz solar suave */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/20 blur-3xl rounded-full" />
          {/* Nuvem inferior grande e macia */}
          <div className="absolute -bottom-16 left-0 right-0 h-72 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-[2px]" />
          <div className="absolute -bottom-10 -left-20 w-[450px] h-48 bg-white/70 blur-2xl rounded-full" />
          <div className="absolute -bottom-12 -right-20 w-[550px] h-56 bg-white/75 blur-2xl rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-[350px] h-32 bg-white/40 blur-3xl rounded-full" />
        </div>

        {/* CONTAINER DO TOPO */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-20">
          {/* NAVBAR */}
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <span className="font-extrabold text-lg text-white">▲</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Aeline</span>
            </div>

            {/* Menu Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
              <a href="#home" className="hover:text-white transition-colors">
                HOME
              </a>
              <a href="#services" className="hover:text-white transition-colors">
                SERVICES
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                ABOUT US
              </a>
              <button className="flex items-center gap-1 hover:text-white transition-colors">
                <span>MORE LINKS</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CTA Navbar */}
            <div>
              <a
                href="#get-started"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#d2fb46] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-black/10 hover:bg-[#bcf026] hover:scale-105 active:scale-95 transition-all"
              >
                BUY TEMPLATE
              </a>
            </div>
          </nav>

          {/* HERO HEADLINE */}
          <div className="text-center pt-16 sm:pt-20 pb-12 max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Building the future with <br className="hidden sm:inline" />
              AI and strategy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mt-5 text-sm sm:text-base text-blue-50/90 max-w-xl mx-auto font-normal leading-relaxed"
            >
              We help organizations unlock growth and efficiency through data-driven consulting and intelligent automation.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="mt-8 flex items-center justify-center gap-3.5 flex-wrap"
            >
              <button className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95">
                VIEW DEMO
              </button>
              <button className="px-6 py-3 rounded-full bg-[#d2fb46] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-sky-900/30 hover:bg-[#bcf026] hover:scale-105 active:scale-95 transition-all">
                <span>GET STARTED</span>
                <span className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center text-[10px]">
                  ↗
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* ========================================================
            3D CURVED CAROUSEL DE CARDS (O Arco da Referência)
            ======================================================== */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 mt-2 sm:mt-6">
          <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[290px] overflow-visible perspective-1000">
            <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 transform-style-preserve-3d">
              {heroCards.map((card, idx) => {
                const isHovered = hoveredCard === card.id;
                return (
                  <motion.div
                    key={card.id}
                    onHoverStart={() => setHoveredCard(card.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    initial={{ opacity: 0, y: 60, rotateZ: card.rotation }}
                    animate={{
                      opacity: 1,
                      y: card.translateY,
                      rotateZ: isHovered ? 0 : card.rotation,
                      scale: isHovered ? 1.08 : card.scale,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: idx * 0.06,
                    }}
                    style={{ zIndex: isHovered ? 50 : card.zIndex }}
                    className={`w-[130px] sm:w-[155px] h-[190px] sm:h-[220px] rounded-2xl bg-white shadow-2xl shadow-sky-950/20 border border-white/80 overflow-hidden cursor-pointer transition-shadow duration-300 ${
                      card.isCenter ? "ring-2 ring-white/60 shadow-sky-900/40" : ""
                    }`}
                  >
                    {card.content}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Social Proof / Avaliação no Arco */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-6 relative z-30"
          >
            <p className="text-[11px] font-medium text-white/90">
              Rated <span className="font-bold text-white">4.9/5</span> by 4,900+ clients
            </p>
            <div className="flex items-center justify-center gap-1 mt-1 text-[#facc15]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#facc15]" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          LOGO TICKER SECTION (Parceiros em Linha com Ícones)
          ======================================================== */}
      <section className="border-b border-slate-100 bg-white py-9 relative z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-8 opacity-65 grayscale hover:grayscale-0 transition-all">
            {brandLogos.map((brand, i) => {
              const Icon = brand.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-slate-700" />
                  </div>
                  <span className="font-bold text-sm tracking-tight">{brand.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT US & BENTO GRID SECTION (Fiel ao layout inferior)
          ======================================================== */}
      <section id="about" className="py-20 sm:py-28 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6">
          {/* Subtítulo & Headline Editorial */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              <span>ABOUT US</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              A global consulting partner <br />
              dedicated to building{" "}
              <span className="inline-flex items-center align-middle mx-1.5 px-3 py-1 rounded-full bg-sky-400 text-white text-2xl sm:text-4xl font-bold">
                <Brain className="w-5 h-5 sm:w-7 sm:h-7 mr-1.5 inline animate-pulse" />
                smarter
              </span>
              <br />
              <span className="text-slate-400 font-normal">and </span>
              <span className="inline-flex items-center align-middle mx-1 px-3 py-1 rounded-full bg-[#d2fb46] text-slate-950 text-2xl sm:text-4xl font-bold">
                <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 mr-1.5 inline" />
                more adaptive
              </span>
            </h2>
          </div>

          {/* BENTO GRID (Cards da referência) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Card 1: 120+ Collaborating com foto do executivo (Col 4) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-4 rounded-3xl bg-[#0284c7] text-white p-6 flex flex-col justify-between overflow-hidden relative shadow-lg shadow-sky-900/10 min-h-[340px]"
            >
              <div className="flex items-center justify-between relative z-10">
                <span className="text-xl font-black tracking-tight">IPSUM</span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Foto flutuante do executivo */}
              <div className="relative my-4 flex justify-center">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    alt="Team Leader"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Caixa branca inferior com 120+ */}
              <div className="bg-white rounded-2xl p-4 text-slate-900 relative z-10 shadow-sm">
                <span className="text-3xl font-extrabold tracking-tight text-slate-900">120+</span>
                <p className="text-xs text-slate-500 mt-1 font-medium leading-snug">
                  Collaborating with leading AI and cloud technology providers.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Commitment to measurable 100% (Col 4) */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-4 rounded-3xl bg-white border border-slate-200/80 p-6 flex flex-col justify-between shadow-sm min-h-[340px]"
            >
              <div>
                <span className="text-xs font-semibold text-slate-400 block">Commitment to measurable</span>
                <h3 className="text-5xl font-black text-slate-950 tracking-tight mt-2">100%</h3>
              </div>

              <div className="pt-6 border-t border-slate-100">
                {/* Avatares dos clientes */}
                <div className="flex items-center -space-x-2 mb-3">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                    alt="User 1"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="User 2"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
                    alt="User 3"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                    alt="User 4"
                  />
                </div>
                <p className="text-xs text-slate-600 italic font-medium leading-relaxed">
                  “Their automation strategy completely reshaped how we work. It&apos;s efficient, intelligent, and seamless.”
                </p>
              </div>
            </motion.div>

            {/* Coluna 3: Split dos 2 Cards da Direita (Data Points + Continents) (Col 4) */}
            <div className="md:col-span-4 flex flex-col gap-5 justify-between">
              {/* Card Verde Lime: 520k+ Data Points */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-[#d2fb46] text-slate-950 p-6 flex flex-col justify-between flex-1 shadow-sm"
              >
                <div>
                  <span className="text-xs font-semibold text-slate-800">Data Points</span>
                  <h3 className="text-4xl font-black tracking-tight mt-1">520k+</h3>
                </div>
                <p className="text-xs font-medium text-slate-800 mt-4 leading-relaxed">
                  Analyzed monthly to power smarter business strategies.
                </p>
              </motion.div>

              {/* Card Preto: Continents 20+ */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-slate-950 text-white p-5 flex items-center justify-between shadow-md"
              >
                <div>
                  <span className="text-xs text-slate-400 font-medium">Continents</span>
                  <p className="text-[10px] text-slate-500">Global footprint</p>
                </div>
                <span className="text-3xl font-extrabold tracking-tight">20+</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DISCRETO */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900">Aeline</span>
            <span>— AI & Strategic Architecture</span>
          </div>
          <p>© 2025 Aeline Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
