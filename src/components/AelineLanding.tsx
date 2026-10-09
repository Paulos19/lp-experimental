"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
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
  Play,
  ShieldCheck,
  MousePointerClick,
  Cpu,
} from "lucide-react";

export default function AelineLanding() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [tickerHovered, setTickerHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Efeito Parallax Dinâmico e Iluminação com Cursor do Mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Rotações sutis e translação das nuvens
  const cloud1X = useTransform(smoothMouseX, [-500, 500], [-25, 25]);
  const cloud1Y = useTransform(smoothMouseY, [-500, 500], [-15, 15]);
  const cloud2X = useTransform(smoothMouseX, [-500, 500], [35, -35]);
  const cloud2Y = useTransform(smoothMouseY, [-500, 500], [20, -20]);
  const heroTiltX = useTransform(smoothMouseY, [-400, 400], [3, -3]);
  const heroTiltY = useTransform(smoothMouseX, [-400, 400], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  // 7 CARDS DO ARCO 3D DA REFERÊNCIA
  const cards = [
    {
      id: 0,
      title: "Intelligence in Every Decision",
      rotateZ: -14,
      translateX: -270,
      translateY: 48,
      scale: 0.9,
      zIndex: 1,
      content: (
        <div className="h-full bg-slate-900/90 text-white p-3.5 flex flex-col justify-between backdrop-blur-md border border-white/10 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-bold tracking-widest text-emerald-400 uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Engine
              </span>
              <span className="text-[10px] text-slate-400">#01</span>
            </div>
            <p className="text-[11px] font-semibold leading-tight text-slate-200">
              Intelligence in Every Decision
            </p>
          </div>
          <div className="my-1.5 bg-slate-800/80 rounded-xl p-2 border border-slate-700/60">
            <div className="flex items-end justify-between h-10 gap-1.5 px-1">
              {[40, 75, 55, 95, 80].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1.2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                  className="w-full bg-gradient-to-t from-cyan-500 to-emerald-400 rounded-sm"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800 pt-1.5">
            <span>Accuracy</span>
            <span className="font-bold text-cyan-400">+38.4%</span>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Pricing Matrix",
      rotateZ: -9,
      translateX: -180,
      translateY: 26,
      scale: 0.94,
      zIndex: 2,
      content: (
        <div className="h-full bg-white/95 text-slate-900 p-3.5 flex flex-col justify-between rounded-2xl shadow-xl border border-white/80 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Tier Pro</span>
            <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[8px] font-bold">ACTIVE</span>
          </div>
          <div className="my-1">
            <div className="text-xl font-extrabold tracking-tight text-slate-900 flex items-baseline gap-1">
              $4,900
              <span className="text-[10px] text-slate-500 font-normal">/mo</span>
            </div>
            <p className="text-[9px] text-slate-500 mt-0.5">Enterprise Strategy AI</p>
          </div>
          <div className="space-y-1">
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "20%" }}
                animate={{ width: "85%" }}
                transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
                className="bg-blue-600 h-full rounded-full"
              />
            </div>
            <div className="flex justify-between text-[8px] text-slate-500 font-medium">
              <span>Bandwidth</span>
              <span className="font-bold text-slate-700">85% utilized</span>
            </div>
          </div>
          <div className="text-[8px] font-bold text-blue-600 flex items-center justify-between pt-1 border-t border-slate-100">
            <span>ROI ESTIMATE</span>
            <span>4.8x Multiplier</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Leader Avatar",
      rotateZ: -4,
      translateX: -90,
      translateY: 10,
      scale: 0.98,
      zIndex: 3,
      content: (
        <div className="h-full bg-gradient-to-b from-sky-100/90 to-white/95 rounded-2xl p-2.5 flex flex-col justify-between border border-white/80 shadow-xl relative overflow-hidden group">
          <div className="relative w-full h-24 rounded-xl overflow-hidden bg-slate-200">
            {/* Visual estilizado de retrato executivo */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-sky-400">
              <Users className="w-10 h-10 text-white/80" />
            </div>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1.5 left-2 z-20"
            >
              <p className="text-[9px] font-bold text-white leading-tight">Dr. Elena Vance</p>
              <p className="text-[7.5px] text-white/80">Chief Strategist</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <div className="bg-white/80 rounded-lg p-1.5 text-center shadow-xs">
              <span className="block text-[7px] text-slate-400 uppercase font-bold">Metrics</span>
              <span className="text-[10px] font-black text-slate-800">$2,670</span>
            </div>
            <div className="bg-white/80 rounded-lg p-1.5 text-center shadow-xs">
              <span className="block text-[7px] text-slate-400 uppercase font-bold">Ops Score</span>
              <span className="text-[10px] font-black text-emerald-600">99.8%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Decision Trend Curve",
      rotateZ: 0,
      translateX: 0,
      translateY: 0,
      scale: 1.05,
      zIndex: 10,
      content: (
        <div className="h-full bg-white text-slate-900 p-4 flex flex-col justify-between rounded-2xl shadow-2xl border-2 border-white ring-8 ring-blue-500/10 relative overflow-hidden group">
          {/* Shimmer sweep animado */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent pointer-events-none" />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
                Decision Trend
              </span>
            </div>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
              AI Forecast
            </span>
          </div>

          <div className="relative h-18 my-1 flex items-center justify-center">
            {/* Linha de onda estilizada SVG animada */}
            <svg viewBox="0 0 160 55" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="gradientWave" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#d2fb46" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 5,45 Q 35,5 75,30 T 155,10"
                fill="none"
                stroke="url(#gradientWave)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
              />
              <motion.circle
                cx="155"
                cy="10"
                r="4.5"
                fill="#2563eb"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </svg>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-[10px]">
            <div>
              <p className="text-slate-400 text-[8px] uppercase font-bold">Confidence</p>
              <p className="font-extrabold text-slate-800 text-xs">99.4% Max</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-[8px] uppercase font-bold">Speed</p>
              <p className="font-black text-emerald-600 text-xs">0.14 ms</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Strategy & AI Dark Badge",
      rotateZ: 4,
      translateX: 90,
      translateY: 10,
      scale: 0.98,
      zIndex: 3,
      content: (
        <div className="h-full bg-slate-950 text-white p-3.5 flex flex-col justify-between rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="w-2 h-2 rounded-full bg-[#d2fb46] animate-ping" />
            <span className="text-[9px] font-mono tracking-widest text-[#d2fb46] font-bold">
              SYSTEM ONLINE
            </span>
          </div>
          <div className="my-1">
            <p className="text-[11px] font-bold leading-snug text-white">
              Expertise that Combines Strategy, Data, and Artificial Intelligence
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-[8.5px] text-slate-400 bg-slate-900/90 rounded-lg p-1.5 border border-slate-800">
            <Zap className="w-3.5 h-3.5 text-[#d2fb46] shrink-0" />
            <span>Autonomous agent workflow synchronized</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[8px] text-slate-500 font-mono">
            <span>LATENCY: 12ms</span>
            <span className="text-emerald-400">OPTIMAL</span>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Data Training Cloud",
      rotateZ: 9,
      translateX: 180,
      translateY: 26,
      scale: 0.94,
      zIndex: 2,
      content: (
        <div className="h-full bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 text-white p-3.5 flex flex-col justify-between rounded-2xl shadow-xl border border-white/30 relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/15 blur-xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <Database className="w-4 h-4 text-white/90" />
            <span className="text-[9px] font-bold tracking-widest uppercase bg-white/20 px-1.5 py-0.5 rounded-full">
              Neural Net
            </span>
          </div>
          <div>
            <h4 className="text-xs font-black">Data Pipeline</h4>
            <p className="text-[9px] text-white/80 leading-tight mt-0.5">
              1.4B parameters synthesized per minute
            </p>
          </div>
          <div className="space-y-1">
            <div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "30%" }}
                animate={{ width: "95%" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="bg-white h-full rounded-full"
              />
            </div>
            <div className="flex justify-between text-[8px] text-white/80 font-bold">
              <span>SYNC STATUS</span>
              <span>COMPLETE</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Data Points Stat",
      rotateZ: 14,
      translateX: 270,
      translateY: 48,
      scale: 0.9,
      zIndex: 1,
      content: (
        <div className="h-full bg-white/95 text-slate-900 p-3.5 flex flex-col justify-between rounded-2xl shadow-xl border border-white/80 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Scale</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <div className="my-1">
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-2xl font-black text-blue-600 tracking-tight"
            >
              520k+
            </motion.div>
            <p className="text-[9px] font-semibold text-slate-600 mt-0.5">
              Validated Predictions & Decisions
            </p>
          </div>
          <div className="flex items-center gap-1 text-[8px] font-bold text-slate-500 pt-1.5 border-t border-slate-100">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Top Tier Reliability Score</span>
          </div>
        </div>
      ),
    },
  ];

  // Marcas parceiras do ticker
  const brands = [
    { name: "METACORP", symbol: "✦", desc: "Enterprise Cloud" },
    { name: "NEXUS AI", symbol: "▲", desc: "Generative Models" },
    { name: "PULSE STRATEGY", symbol: "●", desc: "Predictive Analytics" },
    { name: "SYNAPSE LABS", symbol: "❖", desc: "Data Architectures" },
    { name: "VORTEX CAP", symbol: "◆", desc: "Venture Intelligence" },
    { name: "ASTRAL SYSTEMS", symbol: "✶", desc: "Autonomous Ops" },
  ];

  // Métricas interativas adicionais
  const stats = [
    { value: "$2.4B+", label: "Capital Strategized", icon: TrendingUp },
    { value: "99.98%", label: "Model Reliability", icon: ShieldCheck },
    { value: "< 14ms", label: "Decision Latency", icon: Zap },
    { value: "4,900+", label: "Global Enterprises", icon: Users },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-gradient-to-b from-[#1877f2] via-[#2f88ff] to-[#f4f7fb] text-slate-900 selection:bg-[#d2fb46] selection:text-slate-950 font-sans relative overflow-x-hidden"
    >
      {/* ========================================================
          CAMADA 1: NUVENS E ATMOSFERA CINEMATOGRÁFICA INTERATIVA
          ======================================================== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Glow Solar Superior */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-white/35 via-sky-200/20 to-transparent rounded-full blur-3xl" />

        {/* Nuvem Esquerda com Parallax Suave */}
        <motion.div
          style={{ x: cloud1X, y: cloud1Y }}
          className="absolute -top-10 -left-28 w-[580px] h-[340px] opacity-75 filter blur-2xl animate-float-slow pointer-events-none"
        >
          <div className="w-full h-full bg-gradient-to-br from-white via-white/80 to-transparent rounded-full" />
        </motion.div>

        {/* Nuvem Direita com Parallax Inverso */}
        <motion.div
          style={{ x: cloud2X, y: cloud2Y }}
          className="absolute top-12 -right-36 w-[640px] h-[380px] opacity-70 filter blur-2xl animate-float-reverse pointer-events-none"
        >
          <div className="w-full h-full bg-gradient-to-bl from-white via-white/85 to-transparent rounded-full" />
        </motion.div>

        {/* Nuvem Central Translúcida */}
        <div className="absolute top-64 left-1/2 -translate-x-1/2 w-[850px] h-[320px] bg-gradient-to-b from-white/20 via-white/50 to-transparent rounded-full blur-3xl opacity-60" />

        {/* Micro Partículas e Feixes Solares de Fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
      </div>

      {/* ========================================================
          CAMADA 2: HEADER & NAVEGAÇÃO EDITORIAL (AELINE)
          ======================================================== */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-50 max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-4"
      >
        <div className="flex items-center justify-between bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-5 py-2.5 shadow-lg shadow-blue-900/10 transition-all hover:bg-white/20">
          {/* Logo Aeline */}
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md border border-white"
            >
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-600" />
            </motion.div>
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#d2fb46] transition-colors">
              Aeline
            </span>
          </div>

          {/* Menus Centrais */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider text-white/90">
            {["HOME", "SERVICES", "ABOUT US"].map((link, i) => (
              <a
                key={i}
                href="#"
                className="relative py-1 hover:text-white transition-colors group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d2fb46] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors group">
              <span>MORE LINKS</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </nav>

          {/* Botão de Destaque Verde-Limão (#d2fb46) */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(210, 251, 70, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-[#d2fb46] text-slate-950 font-bold text-xs tracking-wide shadow-md flex items-center gap-1.5 transition-all"
            >
              <span>BUY TEMPLATE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* ========================================================
          CAMADA 3: HERO CONTENT (TÍTULOS E BOTÕES DE AÇÃO)
          ======================================================== */}
      <section className="relative z-30 pt-8 sm:pt-14 pb-4 px-4 max-w-5xl mx-auto text-center">
        {/* Badge Flutuante de Inovação */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium mb-6 shadow-sm hover:bg-white/25 transition-all cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d2fb46] animate-pulse" />
          <span className="text-[#d2fb46] font-bold">NEXT-GEN</span>
          <span className="text-white/80">Autonomous Strategic Intelligence</span>
        </motion.div>

        {/* Headline Principal da Referência */}
        <motion.h1
          style={{ rotateX: heroTiltX, rotateY: heroTiltY }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-sm select-none"
        >
          Building the future with <br className="hidden sm:inline" />
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-white">
              AI and strategy
            </span>
            {/* Brilho sublinhado sutil */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#d2fb46] to-transparent"
            />
          </span>
        </motion.h1>

        {/* Subtítulo Descritivo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-xs"
        >
          Unifying multi-agent machine decision systems, enterprise financial workflows, and high-stakes strategy into one seamless operating surface.
        </motion.p>

        {/* Botões de Ação Duplos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-white/15 backdrop-blur-md text-white font-bold text-xs sm:text-sm border border-white/30 transition-all flex items-center gap-2 shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>VIEW DEMO</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(210, 251, 70, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-full bg-[#d2fb46] text-slate-950 font-black text-xs sm:text-sm shadow-xl flex items-center gap-2 transition-all"
          >
            <span>GET STARTED</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </section>

      {/* ========================================================
          CAMADA 4: O ARCO 3D CURVADO DOS 7 CARDS (DESTAQUE MÁXIMO)
          ======================================================== */}
      <section className="relative z-40 max-w-6xl mx-auto px-4 mt-6 sm:mt-10">
        <div className="relative flex items-center justify-center min-h-[340px] sm:min-h-[380px] perspective-1500">
          {cards.map((card, index) => {
            const isHovered = activeCard === index;
            const hasHover = activeCard !== null;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  zIndex: isHovered ? 50 : card.zIndex,
                }}
                animate={{
                  x: isHovered ? card.translateX : card.translateX,
                  y: isHovered ? card.translateY - 24 : card.translateY,
                  rotateZ: isHovered ? 0 : card.rotateZ,
                  scale: isHovered ? 1.15 : hasHover ? card.scale * 0.96 : card.scale,
                  opacity: hasHover && !isHovered ? 0.75 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="absolute w-44 sm:w-52 h-60 sm:h-72 cursor-pointer transition-shadow rounded-2xl select-none"
              >
                {/* Efeito Glow no Card Ativo */}
                {isHovered && (
                  <motion.div
                    layoutId="cardGlow"
                    className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-[#d2fb46] rounded-3xl blur-md opacity-75 -z-10"
                  />
                )}
                {card.content}
              </motion.div>
            );
          })}
        </div>

        {/* Avaliação e Social Proof sob os Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 text-white/90 text-xs sm:text-sm font-medium"
        >
          <div className="flex items-center gap-1 text-amber-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-300" />
            ))}
            <span className="ml-1 text-white font-bold text-xs">4.9 / 5.0</span>
          </div>
          <p className="text-white/80">
            Trusted by more than <span className="text-white font-extrabold underline decoration-[#d2fb46]">4,900+ high-growth teams</span> worldwide
          </p>
        </motion.div>
      </section>

      {/* ========================================================
          CAMADA 5: TICKER INFINITO DE LOGOTIPOS / PARCEIROS
          ======================================================== */}
      <section className="relative z-30 mt-16 sm:mt-24 border-y border-white/20 bg-white/10 backdrop-blur-md py-6 overflow-hidden">
        <div
          onMouseEnter={() => setTickerHovered(true)}
          onMouseLeave={() => setTickerHovered(false)}
          className="flex whitespace-nowrap"
        >
          <motion.div
            animate={{ x: tickerHovered ? 0 : [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex items-center gap-12 sm:gap-20 text-white/80 shrink-0 pr-12"
          >
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center gap-3 group cursor-pointer">
                <span className="text-[#d2fb46] text-base group-hover:scale-125 transition-transform">
                  {brand.symbol}
                </span>
                <span className="font-extrabold text-sm sm:text-base tracking-widest text-white group-hover:text-[#d2fb46] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-white/50 hidden sm:inline font-mono">
                  / {brand.desc}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          CAMADA 6: NÚMEROS E MÉTRICAS DE IMPACTO
          ======================================================== */}
      <section className="relative z-30 max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/80 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-[#d2fb46] group-hover:text-slate-950 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          CAMADA 7: FOOTER MINIMALISTA & EDITORIAL
          ======================================================== */}
      <footer className="relative z-30 border-t border-white/30 bg-white/40 backdrop-blur-md py-10 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-white" />
            </div>
            <span className="font-extrabold text-slate-900 text-sm">Aeline Strategy AI</span>
          </div>
          <p>© 2025 Aeline Systems Inc. Engineered for high-speed executive teams.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-950 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-950 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-950 transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
