"use client";

import { useEffect, useState, useRef } from "react";

export default function Recomendation() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 px-4 lg:px-12 overflow-hidden">


      <div className="absolute inset-0 bg-gray-50" />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #dcfce7 0%, #f0fdf4 40%, #fefce8 70%, #fef9c3 100%)",
          backgroundSize: "300% 300%",
          animation: "bgDrift 12s ease infinite",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #16a34a 1px, transparent 1px),
            linear-gradient(to bottom, #16a34a 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-105 h-105 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #bbf7d0, transparent 70%)",
          animation: "floatA 10s ease-in-out infinite",
        }}
      />

      <div
        className="absolute -right-40 top-1/4 w-[320px] h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fde68a, transparent 70%)",
          animation: "floatB 13s ease-in-out infinite",
        }}
      />

      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-125 h-50 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #d1fae5, transparent 70%)",
        }}
      />

      {[
        { top: "12%", left: "8%",  size: 5, delay: "0s",   color: "#16a34a" },
        { top: "70%", left: "15%", size: 3, delay: "1.5s", color: "#ca8a04" },
        { top: "30%", left: "88%", size: 5, delay: "3s",   color: "#16a34a" },
        { top: "80%", left: "75%", size: 3, delay: "2s",   color: "#ca8a04" },
        { top: "55%", left: "50%", size: 4, delay: "4s",   color: "#16a34a" },
        { top: "20%", left: "60%", size: 3, delay: "0.5s", color: "#ca8a04" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: 0.35,
            animation: `twinkle 4s ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      <div
        ref={ref}
        className="relative z-10 overflow-hidden rounded-3xl mx-auto max-w-8xl shadow-2xl shadow-green-200/60"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #15803d 0%, #16a34a 30%, #ca8a04 70%, #eab308 100%)",
            backgroundSize: "300% 300%",
            animation: "gradientShift 8s ease infinite",
          }}
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #fff, transparent 70%)", animation: "pulse 6s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #fde047, transparent 70%)", animation: "pulse 9s ease-in-out infinite reverse" }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 lg:p-16">

          <div
            className="flex-1 text-center lg:text-left"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "200ms",
            }}
          >
            <span className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" style={{ animation: "pulse 2s ease-in-out infinite" }} />
              Consejo académico
            </span>

            <h2 className="text-white font-bold text-4xl lg:text-6xl leading-tight tracking-tight drop-shadow-md">
              Recuerda entregar{" "}
              <span className="relative inline-block">
                todos tus trabajos
                <span
                  className="absolute bottom-1 left-0 h-0.75 rounded-full bg-yellow-300"
                  style={{
                    width: visible ? "100%" : "0%",
                    transition: "width 0.8s ease",
                    transitionDelay: "800ms",
                  }}
                />
              </span>{" "}
              a tiempo.
            </h2>

            <p className="mt-6 text-white/80 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              La puntualidad es clave para tu rendimiento. Con <span className="font-bold underline">PoliNotas</span> puedes hacer seguimiento de tus entregas y nunca perder una fecha importante.
            </p>

            <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
              {[
                { value: "100%", label: "Entregas a tiempo" },
                { value: "+GPA", label: "Mejor promedio" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center lg:items-start">
                  <span className="text-yellow-300 text-2xl font-bold">{s.value}</span>
                  <span className="text-white/70 text-xs tracking-wide uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex-1 flex justify-center lg:justify-end"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "350ms",
            }}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20" />
              <div className="absolute -inset-1 rounded-xl bg-linear-to-br from-yellow-300/30 to-transparent" />
              <img
                src="/images/MainContentImage.webp"
                alt="Estudiantes"
                className="relative rounded-xl w-full max-w-sm lg:max-w-md object-cover shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bgDrift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.25; }
        }
        @keyframes floatA {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-50%) translateX(30px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(2); }
        }
      `}</style>
    </section>
  );
}