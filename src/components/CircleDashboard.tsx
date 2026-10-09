"use client";

import React, { useState } from "react";
import {
  BarChart2,
  Star,
  FileText,
  Settings,
  ArrowLeft,
  Search,
  Sparkles,
  TrendingUp,
  Send,
  ChevronRight,
  DollarSign,
  Calendar,
  Globe2,
  Users,
  Bell,
  HelpCircle,
  ExternalLink
} from "lucide-react";

export default function CircleDashboard() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "insights" | "channels">("dashboard");
  const [activeNav, setActiveNav] = useState("overview");

  return (
    <div className="min-h-screen w-full bg-[#466571] text-[#2b3a4a] flex items-center justify-center p-3 md:p-6 lg:p-8 font-sans selection:bg-[#208390] selection:text-white">
      {/* Outer App Frame with Rounded Borders matching the image */}
      <div className="w-full max-w-[1440px] bg-[#466571] flex flex-col md:flex-row gap-4 items-stretch">
        
        {/* Left Vertical App Sidebar */}
        <aside className="w-full md:w-20 lg:w-24 flex md:flex-col items-center justify-between py-2 md:py-6 px-3 text-[#d1e1e8]">
          <div className="flex md:flex-col items-center gap-6 md:gap-8 w-full">
            {/* Logo: Circle with 6-dot cluster */}
            <div className="flex items-center gap-2 md:flex-col md:gap-1.5 cursor-pointer group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="grid grid-cols-3 gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </div>
              </div>
              <span className="text-white text-xs font-semibold tracking-wide">Circle</span>
            </div>

            {/* Nav Menu Icons */}
            <nav className="flex md:flex-col items-center gap-4 md:gap-6 mt-0 md:mt-6 w-full">
              <button 
                onClick={() => setActiveNav("rate")}
                className={`flex flex-col items-center gap-1 group transition-all ${activeNav === "rate" ? "text-white" : "text-[#9cb5be] hover:text-white"}`}
              >
                <div className="p-2 rounded-xl group-hover:bg-white/10 transition-colors">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <span className="text-[9px] uppercase tracking-wider font-medium">Rate</span>
              </button>

              <button 
                onClick={() => setActiveNav("overview")}
                className={`flex flex-col items-center gap-1 group transition-all relative ${activeNav === "overview" ? "text-white" : "text-[#9cb5be] hover:text-white"}`}
              >
                <div className={`p-2.5 rounded-full transition-all ${activeNav === "overview" ? "bg-white text-[#466571] shadow-md shadow-black/10" : "hover:bg-white/10 text-white"}`}>
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[9px] uppercase tracking-wider font-bold">Overview</span>
              </button>

              <button 
                onClick={() => setActiveNav("reports")}
                className={`flex flex-col items-center gap-1 group transition-all ${activeNav === "reports" ? "text-white" : "text-[#9cb5be] hover:text-white"}`}
              >
                <div className="p-2 rounded-xl group-hover:bg-white/10 transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[9px] uppercase tracking-wider font-medium">Reports</span>
              </button>

              <button 
                onClick={() => setActiveNav("settings")}
                className={`flex flex-col items-center gap-1 group transition-all ${activeNav === "settings" ? "text-white" : "text-[#9cb5be] hover:text-white"}`}
              >
                <div className="p-2 rounded-xl group-hover:bg-white/10 transition-colors">
                  <Settings className="w-5 h-5" />
                </div>
                <span className="text-[9px] uppercase tracking-wider font-medium">Settings</span>
              </button>
            </nav>
          </div>

          {/* Bottom user avatar */}
          <div className="mt-auto pt-4 hidden md:block">
            <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-white/20 hover:ring-white transition-all cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </aside>

        {/* Main Content Card Container */}
        <div className="flex-1 flex flex-col bg-transparent">
          
          {/* Top Bar inside the main slate background */}
          <header className="flex items-center justify-between pb-3 px-2 md:px-4 text-white">
            {/* Back button */}
            <button className="flex items-center gap-2 text-xs font-medium text-white/90 hover:text-white transition-opacity bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
              <span className="w-4 h-4 rounded-full bg-white text-[#466571] flex items-center justify-center text-[10px]">‹</span>
              <span>Back</span>
            </button>

            {/* Header Tabs Navigation */}
            <div className="flex items-center gap-6 md:gap-10 text-xs tracking-wider uppercase font-semibold">
              <button 
                onClick={() => setActiveTab("dashboard")}
                className={`pb-1 transition-all ${activeTab === "dashboard" ? "text-white border-b-2 border-white" : "text-white/60 hover:text-white"}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab("insights")}
                className={`pb-1 transition-all ${activeTab === "insights" ? "text-white border-b-2 border-white" : "text-white/60 hover:text-white"}`}
              >
                Insights
              </button>
              <button 
                onClick={() => setActiveTab("channels")}
                className={`pb-1 transition-all ${activeTab === "channels" ? "text-white border-b-2 border-white" : "text-white/60 hover:text-white"}`}
              >
                Channels
              </button>
            </div>

            {/* Right Members Avatars */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img className="w-7 h-7 rounded-full border-2 border-[#466571] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Member" />
                <img className="w-7 h-7 rounded-full border-2 border-[#466571] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Member" />
                <img className="w-7 h-7 rounded-full border-2 border-[#466571] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Member" />
              </div>
              <span className="text-xs text-white/90 font-medium">12 members</span>
            </div>
          </header>

          {/* Large White Rounded Canvas */}
          <main className="flex-1 bg-white rounded-[32px] md:rounded-[40px] p-5 md:p-8 shadow-2xl overflow-hidden flex flex-col gap-6">
            
            {/* Top Row: Hero Banner & Popularity Rate */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              
              {/* Left Hero Card with Illustration & Gradient (Visits for today) */}
              <div className="lg:col-span-8 relative overflow-hidden rounded-[28px] p-6 md:p-8 flex flex-col justify-between min-h-[300px] md:min-h-[340px] text-white"
                   style={{
                     background: "linear-gradient(135deg, #1b7389 0%, #308b9f 40%, #c4cfd2 90%, #f6ebe1 100%)"
                   }}>
                
                {/* Background artistic elements and subtle glow */}
                <div className="absolute top-0 right-0 w-80 h-full opacity-30 bg-radial from-white/40 to-transparent pointer-events-none" />

                {/* Left content metrics */}
                <div className="relative z-10 max-w-[280px]">
                  <p className="text-white/80 text-xs md:text-sm font-medium tracking-wide">Visits for today</p>
                  <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mt-1">824</h1>

                  <div className="mt-8 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center text-white">
                        <Star className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/70 uppercase tracking-wider">Popularity</p>
                        <p className="text-base font-semibold leading-tight text-white">93</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center text-white">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/70 uppercase tracking-wider">General rate</p>
                        <p className="text-base font-semibold leading-tight text-white">4.7</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center/Right Hand-Drawn Style Character Illustration */}
                <div className="absolute right-4 md:right-12 bottom-0 top-4 w-[240px] md:w-[320px] pointer-events-none flex items-end justify-center">
                  {/* Clean SVG Vector Illustration matching the line-art style */}
                  <svg viewBox="0 0 300 280" className="w-full h-auto max-h-[300px] drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Plant pot in corner */}
                    <path d="M40 240 L55 240 L50 270 L45 270 Z" fill="#d2a07c" />
                    <path d="M48 240 C48 210, 30 200, 32 190 C34 205, 46 220, 48 240 Z" fill="#2d6d7a" />
                    <path d="M48 240 C52 215, 65 210, 60 200 C58 215, 52 225, 48 240 Z" fill="#4fa1b3" />
                    
                    {/* Small table */}
                    <line x1="70" y1="230" x2="120" y2="230" stroke="#334155" strokeWidth="2.5" />
                    <line x1="95" y1="230" x2="95" y2="270" stroke="#334155" strokeWidth="2" />
                    <ellipse cx="95" cy="270" rx="15" ry="3" stroke="#334155" strokeWidth="1.5" />
                    {/* Cup */}
                    <rect x="85" y="218" width="12" height="12" rx="2" stroke="#334155" strokeWidth="1.5" fill="#fff" />
                    
                    {/* Armchair */}
                    <path d="M120 220 Q110 240 130 250 L180 250 Q205 240 190 200 L185 150 Q180 130 160 135" stroke="#334155" strokeWidth="2" fill="none" />
                    <line x1="140" y1="250" x2="135" y2="275" stroke="#334155" strokeWidth="2.5" />
                    <line x1="175" y1="250" x2="180" y2="275" stroke="#334155" strokeWidth="2.5" />

                    {/* Character Legs & Torso */}
                    {/* Legs */}
                    <path d="M140 185 L135 220 L125 255 L135 260" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M150 185 L145 225 L160 260 L170 262" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Shoes */}
                    <ellipse cx="130" cy="260" rx="8" ry="4" fill="#fff" stroke="#334155" strokeWidth="1.5" />
                    <ellipse cx="168" cy="262" rx="8" ry="4" fill="#fff" stroke="#334155" strokeWidth="1.5" />

                    {/* Torso & Shirt */}
                    <path d="M140 140 L130 185 L160 185 L165 140 Z" fill="#eed9cc" stroke="#334155" strokeWidth="2" />
                    {/* Suspenders */}
                    <line x1="138" y1="142" x2="136" y2="185" stroke="#334155" strokeWidth="2.5" />
                    <line x1="152" y1="142" x2="150" y2="185" stroke="#334155" strokeWidth="2.5" />

                    {/* Head & Face */}
                    <circle cx="152" cy="115" r="14" fill="#eed9cc" stroke="#334155" strokeWidth="2" />
                    {/* Hair */}
                    <path d="M142 110 C140 98, 160 95, 164 105 C166 112, 164 116, 162 118" fill="#fff" stroke="#334155" strokeWidth="2" />
                    {/* Eye & Smile */}
                    <circle cx="156" cy="114" r="1.5" fill="#334155" />
                    <path d="M154 121 Q158 123 160 120" stroke="#334155" strokeWidth="1.2" fill="none" />

                    {/* Left Arm with Laptop */}
                    <path d="M135 145 L120 160 L135 170" stroke="#334155" strokeWidth="2" fill="none" />
                    {/* Laptop on Lap */}
                    <polygon points="110,165 135,165 140,172 105,172" fill="#fff" stroke="#334155" strokeWidth="1.5" />
                    <rect x="108" y="145" width="26" height="20" rx="2" transform="rotate(-15 108 145)" fill="#fff" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="118" cy="153" r="2.5" fill="#466571" />

                    {/* Right Raised Arm presenting ideas */}
                    <path d="M160 145 L180 140 L195 125" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
                    {/* Hand */}
                    <path d="M195 125 Q198 120 202 122 Q200 128 196 128" fill="#eed9cc" stroke="#334155" strokeWidth="1.5" />

                    {/* Floating Idea / Atom spheres */}
                    <circle cx="198" cy="100" r="8" fill="#8bc3d1" fillOpacity="0.7" stroke="#2d6d7a" strokeWidth="1.5" />
                    <ellipse cx="198" cy="100" rx="14" ry="4" stroke="#2d6d7a" strokeWidth="1" transform="rotate(30 198 100)" fill="none" />
                    <circle cx="188" cy="94" r="1.5" fill="#2d6d7a" />
                    <circle cx="206" cy="106" r="1.5" fill="#2d6d7a" />
                  </svg>
                </div>

                {/* Bottom Call to Action Tab-like Pill */}
                <div className="relative z-10 self-end mt-auto -mb-6 md:-mb-8 -mr-6 md:-mr-8">
                  <button className="bg-[#1b7389] hover:bg-[#155e70] transition-colors text-white text-[11px] font-semibold tracking-wider uppercase px-6 py-3.5 rounded-tl-2xl flex items-center gap-2 shadow-lg">
                    <span>View full statistic</span>
                    <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                  </button>
                </div>
              </div>

              {/* Right Popularity Rate Card (Warm Peach Tint) */}
              <div className="lg:col-span-4 bg-[#fceddf] rounded-[28px] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#3b4c55] text-sm font-semibold tracking-tight">Popularity rate</h3>
                  
                  {/* Score & Gauge Section */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-start">
                      <span className="text-5xl md:text-6xl font-light text-[#22333b] tracking-tight">87</span>
                      <span className="text-xs font-bold text-[#f28e2b] ml-1 bg-[#fde3cf] px-1.5 py-0.5 rounded-full">+2</span>
                    </div>

                    {/* Semicircle Gauge Visual */}
                    <div className="relative w-24 h-16 flex items-end justify-center">
                      <svg viewBox="0 0 100 55" className="w-full h-full overflow-visible">
                        {/* Background track */}
                        <path
                          d="M 10 50 A 40 40 0 0 1 90 50"
                          fill="none"
                          stroke="#ebd3c0"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        {/* Colored progress */}
                        <path
                          d="M 10 50 A 40 40 0 0 1 76 22"
                          fill="none"
                          stroke="#f28e2b"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        {/* Pointer indicator */}
                        <circle cx="76" cy="22" r="3" fill="#ffffff" stroke="#f28e2b" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  {/* Motivational feedback text */}
                  <p className="text-xs text-[#5f6f77] mt-5 leading-relaxed">
                    Your Rate has increased because of your recent update activity. <strong className="text-[#22333b] font-medium">Keep moving</strong> forward and get more points!
                  </p>
                </div>

                {/* Bottom Promo / Tips Banner Pill */}
                <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-3 flex items-center justify-between border border-[#edd7c7] shadow-sm hover:shadow transition-shadow cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#faeae0] flex items-center justify-center text-[#d97736]">
                      <Send className="w-4 h-4 transform -rotate-45" />
                    </div>
                    <p className="text-[10px] text-[#4b5a63] font-medium leading-tight max-w-[140px]">
                      Learn insights how to manage all aspects of your startup
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#f28e2b] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                    <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Row: 3 Modular Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mt-2">
              
              {/* Widget 1: Finance Performance (Bar Chart) */}
              <div className="lg:col-span-4 bg-[#f8fafb] rounded-[24px] p-6 border border-[#eef2f5] flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-[#2d3f4a] tracking-tight">Finance Perfomance</h4>
                  
                  {/* Monthly Income Metric */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#1b7389] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        $
                      </div>
                      <div>
                        <div className="text-xl font-bold text-[#1f2d3d] tracking-tight">12 841</div>
                        <div className="text-[10px] text-[#8697a2] font-medium">Monthly income</div>
                      </div>
                    </div>
                    <button className="text-[#8697a2] hover:text-[#1b7389] p-1.5 rounded-lg hover:bg-white transition-colors">
                      <Calendar className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Minimalist Bar Chart (Months Dec to May) */}
                <div className="mt-8 flex items-end justify-between px-2 pt-4 border-t border-dashed border-[#e4ebf0]">
                  {[
                    { month: "DEC", h: "h-10", active: false },
                    { month: "JAN", h: "h-14", active: false },
                    { month: "FEB", h: "h-8", active: false },
                    { month: "MAR", h: "h-16", active: false },
                    { month: "APR", h: "h-12", active: true },
                    { month: "MAY", h: "h-14", active: false }
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group">
                      <div className="w-2.5 h-20 bg-transparent flex items-end justify-center">
                        <div className={`w-2 rounded-full transition-all group-hover:bg-[#1b7389] ${bar.active ? "bg-[#1b7389] w-2.5" : "bg-[#5fa2b0]/50"} ${bar.h}`} />
                      </div>
                      <span className="text-[9px] text-[#8a9ca7] font-semibold">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget 2: TOP Performers */}
              <div className="lg:col-span-4 bg-[#f8fafb] rounded-[24px] p-6 border border-[#eef2f5] flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-[#2d3f4a] tracking-tight">TOP performers</h4>
                  
                  {/* List of members with status and ratings */}
                  <div className="mt-4 flex flex-col gap-4">
                    {/* Bessie Cooper */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80" alt="Bessie" />
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#1f2d3d]">Bessie Cooper</p>
                          <p className="text-[10px] text-[#48a979] flex items-center gap-1 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Online
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#d97736] bg-[#fef2e8] px-2 py-0.5 rounded-full">4.3</span>
                    </div>

                    {/* Albert Flores */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80" alt="Albert" />
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#1f2d3d]">Albert Flores</p>
                          <p className="text-[10px] text-[#48a979] flex items-center gap-1 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Online
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#308b9f] bg-[#e6f4f7] px-2 py-0.5 rounded-full">4.7</span>
                    </div>

                    {/* Guy Hawkins */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80" alt="Guy" />
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-slate-300 ring-2 ring-white" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#1f2d3d]">Guy Hawkins</p>
                          <p className="text-[10px] text-[#8697a2] font-medium">2 minutes ago</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#d97736] bg-[#fef2e8] px-2 py-0.5 rounded-full">4.4</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Widget 3: Targeting by Region (World Map with Radar Pulses) */}
              <div className="lg:col-span-4 bg-[#f8fafb] rounded-[24px] p-6 border border-[#eef2f5] flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-[#2d3f4a] tracking-tight">Targeting by region</h4>
                </div>

                {/* Styled SVG World Map Background */}
                <div className="relative my-3 h-32 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full opacity-40" fill="#cbd5e1">
                    {/* Continents simplified vector contours */}
                    {/* North America */}
                    <path d="M40 40 Q70 30 100 45 Q120 70 90 95 Q60 85 45 65 Z" />
                    {/* South America */}
                    <path d="M95 105 Q120 115 110 150 Q95 180 85 155 Q80 120 95 105 Z" />
                    {/* Europe */}
                    <path d="M180 35 Q220 30 225 55 Q205 75 185 65 Z" />
                    {/* Africa */}
                    <path d="M185 75 Q220 80 230 120 Q205 160 180 130 Q170 95 185 75 Z" />
                    {/* Asia */}
                    <path d="M230 35 Q320 25 350 75 Q320 115 270 95 Q240 65 230 35 Z" />
                    {/* Australia */}
                    <path d="M310 135 Q350 135 345 165 Q315 170 310 135 Z" />
                  </svg>

                  {/* Pin 1: West Coast / Latam with pulse */}
                  <div className="absolute left-[20%] top-[40%] flex items-center justify-center">
                    <span className="absolute w-5 h-5 rounded-full bg-[#308b9f]/30 animate-ping" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1b7389] border-2 border-white shadow-sm" />
                  </div>

                  {/* Pin 2: Poland Highlight Floating Pill */}
                  <div className="absolute left-[50%] top-[15%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white rounded-xl p-1.5 pr-2.5 shadow-md border border-[#e2e8f0] flex items-center gap-2">
                      <img 
                        src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=80&auto=format&fit=crop&q=80" 
                        alt="Poland" 
                        className="w-5 h-5 rounded-md object-cover" 
                      />
                      <div>
                        <p className="text-[10px] font-bold text-[#1e293b] leading-tight">Poland</p>
                        <p className="text-[8px] text-[#64748b] leading-tight">23.03% <span className="text-[#10b981] font-semibold">+4.7</span></p>
                      </div>
                    </div>
                    {/* Stem to map */}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1b7389] border-2 border-white mx-auto mt-0.5 shadow-sm" />
                  </div>

                  {/* Pin 3: East Asia Pulse */}
                  <div className="absolute right-[20%] bottom-[25%] flex items-center justify-center">
                    <span className="absolute w-6 h-6 rounded-full bg-[#308b9f]/20 animate-pulse" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5fa2b0] border-2 border-white shadow-sm" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-[#8697a2] pt-2 border-t border-dashed border-[#e4ebf0]">
                  <span>Global coverage: <strong>74%</strong></span>
                  <span className="text-[#1b7389] font-medium flex items-center gap-0.5 hover:underline cursor-pointer">
                    View report <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

            </div>

          </main>
        </div>
      </div>
    </div>
  );
}