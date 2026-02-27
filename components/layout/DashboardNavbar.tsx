// components/layout/DashboardNavbar.tsx
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSidebar } from "@/context/SidebarContext";

type DashboardNavbarProps = {
  nombre: string;
  avatarUrl: string | null;
  rol: "profesor" | "estudiante";
};

export default function DashboardNavbar({ nombre, avatarUrl, rol }: DashboardNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggle } = useSidebar();
  const supabase = createClient();
  const router = useRouter();

  const rolLabel = rol === "profesor" ? "Profesor" : "Estudiante";
  const rolBg = rol === "profesor"
    ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
    : "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200";
  const avatarBg = rol === "profesor" ? "bg-blue-500" : "bg-emerald-500";
  const avatarRing = rol === "profesor"
    ? "ring-2 ring-blue-200 hover:ring-blue-400"
    : "ring-2 ring-emerald-200 hover:ring-emerald-400";

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  const initials = nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase() || "?";

  const firstName = nombre.split(" ")[0] || "Usuario";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-green-600 backdrop-blur-sm border-b border-green-900 shadow-sm flex items-center px-3 sm:px-5 gap-3">

      <button
        onClick={toggle}
        type="button"
        aria-label="Toggle sidebar"
        className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-green-700 
        hover:bg-green-800 hover:text-green-400 text-green-500 transition-all duration-200 cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h10" />
        </svg>
      </button>

      <a href="/" className="flex items-center gap-2 shrink-0 group">
        <div className="relative w-8 h-8 shrink-0">
          <Image
            src="/images/LogoPoliNotas.png"
            alt="PoliNotas"
            fill
            className="object-contain"
          />
        </div>
        <span className="hidden sm:block text-lg font-bold text-black tracking-tight group-hover:text-emerald-600 transition-colors">
          Poli<span className="text-yellow-500">Notas</span>
        </span>
      </a>

      <div className="flex-1" />

      <div className="flex items-center gap-2 sm:gap-3">

        <span className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${rolBg}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
          {rolLabel}
        </span>

        <span className="hidden md:block text-sm font-medium text-black max-w-[130px] truncate">
          {nombre || "Usuario"}
        </span>

        <div className="hidden sm:block w-px h-6 bg-yellow-500" />

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`relative w-9 h-9 rounded-full overflow-hidden transition-all duration-200 focus:outline-none ${avatarRing}`}
            aria-label="Menú de usuario"
          >
            {avatarUrl ? (
              <Image src={avatarUrl} alt={nombre} fill className="object-cover" />
            ) : (
              <span className={`w-full h-full flex items-center justify-center ${avatarBg} text-white text-xs font-bold`}>
                {initials}
              </span>
            )}
          </button>

          {menuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 top-11 z-20 w-56 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/60 py-2 overflow-hidden">

                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center ${avatarBg} text-white text-xs font-bold overflow-hidden`}>
                      {avatarUrl ? (
                        <Image src={avatarUrl} alt={nombre} width={36} height={36} className="object-cover" />
                      ) : initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{nombre || "Usuario"}</p>
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-1.5 py-0.5 rounded-full ${rolBg}`}>
                        {rolLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="py-1">
                  <a
                    href={`/${rol}/perfil`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors group"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-500" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Mi perfil
                  </a>

                  <a
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors group"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-500" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v9a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-9" />
                    </svg>
                    Ir al inicio
                  </a>
                </div>

                <div className="border-t border-gray-100 py-1">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors group"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                    </svg>
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}