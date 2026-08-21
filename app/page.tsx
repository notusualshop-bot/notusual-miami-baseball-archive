"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// [此处保留你原有的 miamiArchives 数组内容，完全不动]
// (请确保你刚才的 100 条原版数据都在这里)

export default function Home() {
  const [selectedArchive, setSelectedArchive] = useState(miamiArchives[0]);
  const [shareButtonText, setShareButtonText] = useState("SHARE WITH THE FAITHFUL");

  // [保留你原有的逻辑部分，完全不动]

  return (
    <main className="min-h-screen bg-[#f47321] text-white flex flex-col justify-between selection:bg-white selection:text-[#f47321]">
      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'AlfaSlabOne';
          src: url('/AlfaSlabOne-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        .vintage-number {
          font-family: 'AlfaSlabOne', Impact, sans-serif;
        }
      `}} />

      {/* --- 版头优化：去敏感化，调整间距 --- */}
      <header className="w-full pt-6 pb-4 px-4 text-center">
        <div className="max-w-md mx-auto space-y-1">
          <p className="tracking-[0.3em] uppercase text-[10px] text-white/80 font-light">
            EST. ARCHIVE • BASEBALL LEGACY
          </p>
          <p className="tracking-[0.25em] uppercase text-xs text-white/95 font-medium">
            NOTUSUAL CREATIVE STUDIO
          </p>
          <p className="tracking-[0.2em] uppercase text-xs text-white/80 font-sans font-light">
            CORAL GABLES BASEBALL CHRONICLES
          </p>
        </div>
      </header>

      {/* --- 卡片区域：调整顶部间距，防止文字遮挡 --- */}
      <div className="max-w-md sm:max-w-lg mx-auto px-4 pt-4 pb-6 w-full relative">
        <div className="absolute inset-x-4 top-8 bottom-2 bg-stone-300 border-2 border-stone-900 translate-y-3 translate-x-2 pointer-events-none"></div>
        <div className="absolute inset-x-4 top-6 bottom-1 bg-stone-100 border-2 border-stone-900 translate-y-1.5 translate-x-1 pointer-events-none"></div>

        <div className="relative bg-white text-stone-950 overflow-hidden border-2 border-stone-900 rounded-none">
          <div className="relative w-full h-[260px] flex flex-col items-center justify-start overflow-hidden border-b-2 border-stone-900 pt-10">
            <div className="absolute inset-0 z-0 grayscale contrast-150 brightness-90">
              <Image src={randomBg} alt="Background" fill className="object-cover object-center" priority />
            </div>
            <div className="absolute inset-0 z-1 bg-black/25"></div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-4">
              <p className="tracking-[0.15em] uppercase text-[10px] sm:text-xs font-bold text-stone-900 bg-white/95 px-3 py-1 border border-stone-900 shadow-sm">
                {selectedArchive.era}
              </p>
              <div className="transform -rotate-1">
                <span className="block tracking-tight text-[55px] leading-none text-[#f47321] vintage-number drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
                  {selectedArchive.year}
                </span>
              </div>
            </div>
          </div>

          {/* --- 内容部分：完全不动 --- */}
          <div className="p-6 sm:p-8 bg-white text-center">
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold mb-3 leading-snug text-stone-950 tracking-tight">
              &ldquo;{selectedArchive.headline}&rdquo;
            </h3>
            <p className="text-stone-800 text-xs sm:text-sm leading-relaxed font-serif mb-7 font-medium tracking-wide">
              &ldquo;{selectedArchive.body}&rdquo;
            </p>
            <div className="flex flex-col space-y-3 items-center">
              <button onClick={handleRandomShuffle} className="w-full bg-[#005030] text-white font-serif font-bold tracking-widest text-xs uppercase py-3.5 transition-all duration-300 text-center rounded-none border border-black cursor-pointer">
                NEXT ARCHIVE CHAPTER
              </button>
              <button onClick={handleShare} className="w-full bg-stone-100 text-stone-900 font-serif font-bold tracking-widest text-xs uppercase py-3 transition-all duration-300 text-center rounded-none border border-black cursor-pointer">
                {shareButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- 版尾优化：保持极简风格 --- */}
      <footer className="w-full bg-[#f47321] pt-6 pb-10 px-4 text-center">
        <div className="max-w-md mx-auto space-y-2">
          <p className="font-serif italic text-[10px] tracking-widest text-white/90 uppercase font-bold">
            NOTUSUAL EDITION • BASEBALL CHRONICLES
          </p>
          <a href="https://www.etsy.com/shop/notusualcreative" target="_blank" rel="noopener noreferrer" className="inline-block text-white font-serif tracking-widest text-xs uppercase underline underline-offset-4 font-bold">
            VISIT OUR ETSY SHOP
          </a>
          <div className="pt-3 border-t border-white/15">
            <p className="text-[9px] tracking-widest uppercase text-white/50 font-light">
              INDEPENDENT ART STUDIO
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
