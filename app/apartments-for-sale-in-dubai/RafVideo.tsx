"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Autoplaying muted video with native controls and a click-to-unmute
 * overlay. Muting and play() are (re)applied via ref on mount because
 * React SSR drops the muted attribute, which breaks autoplay.
 */
export default function RafVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
    const onVolume = () => {
      if (!v.muted) setShowOverlay(false);
    };
    v.addEventListener("volumechange", onVolume);
    return () => v.removeEventListener("volumechange", onVolume);
  }, []);

  const unmute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {});
    setShowOverlay(false);
  };

  return (
    <div className="relative">
      <video
        ref={ref}
        src="/video/raf-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label="RAF Real Estate introduction video"
        className="h-[72vh] max-h-[680px] w-auto max-w-full border border-line bg-black object-contain"
      />
      {showOverlay && (
        <button
          type="button"
          onClick={unmute}
          aria-label="Unmute video"
          className="absolute inset-x-[8%] top-1/2 flex -translate-y-1/2 flex-col items-center gap-4 rounded-lg border-2 border-white/80 bg-[#176b70]/85 px-6 py-10 text-white backdrop-blur-[2px] transition-opacity hover:bg-[#176b70]/95"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M3 9v6h4l5 5V4L7 9H3z" />
            <path
              d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-semibold leading-snug sm:text-2xl">
            Your video is playing
            <br />
            Click to unmute
          </span>
        </button>
      )}
    </div>
  );
}
