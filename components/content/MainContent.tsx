"use client";

import { useEffect, useState, useRef } from "react";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
      </svg>
    ),
    title: "Consulta tus notas",
    description: "Accede a todas tus calificaciones de forma rápida y organizada, en cualquier momento.",
    accent: "#22c55e",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3l-4 4-4-4H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      </svg>
    ),
    title: "Reclamos y dudas",
    description: "Comunica tus inquietudes directamente con el sistema de comentarios integrado.",
    accent: "#3b82f6",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
      </svg>
    ),
    title: "Promedio en tiempo real",
    description: "Obtén porcentajes y estadísticas precisas de tu rendimiento académico al instante.",
    accent: "#f59e0b",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
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
    <div
      ref={ref}
      className="relative group rounded-2xl p-6 border border-default bg-neutral-primary-soft overflow-hidden cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${feature.accent}, transparent 70%)` }}
      />

      <div
        className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full rounded-t-2xl transition-all duration-500"
        style={{ background: feature.accent }}
      />

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${feature.accent}18`, color: feature.accent }}
      >
        {feature.icon}
      </div>

      <h3 className="text-heading font-semibold text-lg mb-2">{feature.title}</h3>
      <p className="text-body text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function MainContent() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #16a34a08 0%, transparent 50%, #3b82f608 100%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px opacity-[0.2]"
            style={{
              width: "140%",
              left: "-20%",
              top: `${15 + i * 18}%`,
              background: "linear-gradient(90deg, transparent, #22c55e, transparent)",
              transform: "rotate(-8deg)",
            }}
          />
        ))}
      </div>

      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #22c55e08, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-500 mb-3">
            ¿Qué puedes hacer?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-heading leading-tight">
            Todo lo que necesitas,{" "}
            <span className="text-green-500">en un solo lugar</span>
          </h2>
          <p className="mt-4 text-body max-w-xl mx-auto text-base">
            PoliApoyo centraliza tu vida académica para que puedas enfocarte en lo que importa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}