"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-amber-50/70 flex items-center justify-center overflow-hidden relative">

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, var(--color-fg-brand, #00FF00), transparent 70%)",
          animation: "pulse 6s ease-in-out infinite",
        }}
      />

      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, var(--color-fg-brand, #DFF000), transparent 70%)",
          animation: "pulse 8s ease-in-out infinite reverse",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-default bg-white mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            transitionDelay: "0ms",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500" style={{ animation: "pulse 2s ease-in-out infinite" }} />
          <span className="text-xs font-medium text-body tracking-wide uppercase">
            Sistema de gestión académica
          </span>
        </div>

        <h1
          className="text-5xl lg:text-8xl font-bold text-heading leading-tight tracking-tight mb-6 text-shadow-sm text-shadow-green-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            transitionDelay: "150ms",
          }}
        >
          Bienvenidos a{" "}
          <span className="text-fg-brand relative inline-block text-green-500 text-shadow-sm text-shadow-black animate-bounce">
            PoliNotas
            <span
              className="absolute bottom-0 left-0 h-[3px] bg-fg-brand rounded-full"
              style={{
                width: visible ? "100%" : "0%",
                transition: "width 0.8s ease",
                transitionDelay: "700ms",
              }}
            />
          </span>
        </h1>

        <p
          className="text-lg lg:text-xl text-body max-w-xl mx-auto leading-relaxed mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            transitionDelay: "300ms",
          }}
        >
          Gestiona y revisa todas tus notas académicas en un solo lugar, de forma
          rápida, organizada y eficiente.
        </p>

        <div
          className="flex items-center justify-center gap-4 mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease",
            transitionDelay: "500ms",
          }}
        >
          <div className="h-px w-16 bg-border-default" />
          <div className="w-1.5 h-1.5 rounded-full bg-fg-brand" />
          <div className="h-px w-16 bg-border-default" />
        </div>

        <div
          className="flex flex-wrap justify-center gap-8 text-yellow-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            transitionDelay: "600ms",
          }}
        >
          {[
            { value: "100%", label: "En línea" },
            { value: "24/7", label: "Disponible" },
            { value: "Fácil", label: "De usar" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-heading">{stat.value}</span>
              <span className="text-sm text-fg-disabled tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.10; }
          50% { transform: scale(1.08); opacity: 0.18; }
        }
      `}</style>
    </div>
  );
}