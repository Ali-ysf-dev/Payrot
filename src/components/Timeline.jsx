import { useEffect, useRef, useState, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Timeline() {
  const { t } = useLanguage();
  const EVENTS = t("timeline.events");
  const TOTAL = EVENTS.length;

  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoPlay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL);
    }, 4000);
  }, [TOTAL]);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoPlay]);

  const handleDotHover = (i) => {
    clearInterval(intervalRef.current);
    setActiveIndex(i);
  };


  // Each spoke angle: evenly distributed around the circle
  const spokeAngle = 360 / TOTAL;
  // Rotate wheel so the active spoke points to the right (0°)
  const wheelRotation = -activeIndex * spokeAngle;

  return (
    <section ref={sectionRef} id="timeline" className="py-14 md:py-20 px-6 bg-[#F1F6F9] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-center mb-3">
          <div className="section-accent" />
        </div>
        <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2 text-center">
          {t("timeline.badge")}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-2 tracking-tight">
          {t("timeline.title")}
        </h2>
        <p className="text-center text-slate-500 mb-10 text-base">
          {t("timeline.subtitle")}
        </p>

        {/* Wheel + Info layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          {/* Wheel */}
          <div
            className="relative flex items-center justify-center shrink-0"
            style={{ width: 280, height: 280 }}
            onMouseEnter={() => clearInterval(intervalRef.current)}
            onMouseLeave={startAutoPlay}
          >
            {/* Rotating wheel */}
            <div
              className="absolute inset-0"
              style={{
                transform: `rotate(${wheelRotation}deg)`,
                transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-emerald-200" />

              {/* Spokes + dots */}
              {EVENTS.map((event, i) => {
                const angle = i * spokeAngle;
                const rad = (angle * Math.PI) / 180;
                const r = 110; // radius to dot
                const cx = 140 + r * Math.cos(rad);
                const cy = 140 + r * Math.sin(rad);
                const isActive = i === activeIndex;

                return (
                  <div key={event.year}>
                    {/* Spoke line */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 280 280"
                    >
                      <line
                        x1="140" y1="140"
                        x2={cx} y2={cy}
                        stroke={isActive ? "#10b981" : "#cbd5e1"}
                        strokeWidth={isActive ? 2 : 1}
                      />
                    </svg>
                    {/* Year dot */}
                    <div
                      className="absolute flex items-center justify-center rounded-full font-bold text-xs transition-all duration-300 cursor-pointer"
                      style={{
                        width: isActive ? 44 : 36,
                        height: isActive ? 44 : 36,
                        left: cx - (isActive ? 22 : 18),
                        top: cy - (isActive ? 22 : 18),
                        background: isActive ? "#10b981" : "#fff",
                        color: isActive ? "#fff" : "#64748b",
                        border: `2px solid ${isActive ? "#10b981" : "#cbd5e1"}`,
                        boxShadow: isActive ? "0 0 0 4px rgba(16,185,129,0.15)" : "none",
                        transform: `rotate(${-wheelRotation}deg)`,
                      }}
                      onClick={() => handleDotHover(i)}
                    >
                      {event.year}
                    </div>
                  </div>
                );
              })}

              {/* Center hub */}
              <div
                className="absolute rounded-full bg-emerald-500 shadow-lg"
                style={{ width: 28, height: 28, left: 126, top: 126 }}
              />
            </div>

            {/* Fixed pointer arrow on right */}
            <div
              className="absolute right-0 translate-x-1/2 z-10 flex items-center justify-center"
              style={{ top: "50%", transform: "translateY(-50%) translateX(8px)" }}
            >
              <div className="w-4 h-4 rotate-45 bg-emerald-500 shadow" />
            </div>
          </div>

          {/* Active event info */}
          <div className="flex-1 max-w-md">
            <div
              key={activeIndex}
              className="bg-white rounded-2xl border border-emerald-100 shadow-md p-6 transition-all duration-300"
              style={{ animation: "fadeSlide 0.4s ease" }}
            >
              <span className="text-5xl font-extrabold text-emerald-500 block mb-3">
                {EVENTS[activeIndex].year}
              </span>
              <p className="text-slate-700 text-base leading-relaxed">
                {EVENTS[activeIndex].text}
              </p>
            </div>

            {/* Progress dots */}
            <div className="flex gap-2 mt-5 justify-center md:justify-start">
              {EVENTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotHover(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 h-2.5 bg-emerald-500"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-emerald-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
