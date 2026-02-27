"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";

const Icons = {
  dashboard: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
      />
    </svg>
  ),
  cursos: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
      />
    </svg>
  ),
  grupos: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  ),
  evaluaciones: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 3H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7.5L14.5 3H10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 3v4.5H14.5M8 12h8m-8 4h4"
      />
    </svg>
  ),
  notas: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
      />
    </svg>
  ),
  perfil: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  ),
};

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const PROFESOR_NAV: NavItem[] = [
  { label: "Dashboard", href: "/profesor", icon: Icons.dashboard },
  { label: "Cursos", href: "/profesor/cursos", icon: Icons.cursos },
  { label: "Grupos", href: "/profesor/grupos", icon: Icons.grupos },
  {
    label: "Evaluaciones",
    href: "/profesor/evaluaciones",
    icon: Icons.evaluaciones,
  },
  { label: "Notas", href: "/profesor/notas", icon: Icons.notas },
  { label: "Perfil", href: "/profesor/perfil", icon: Icons.perfil },
];

const ESTUDIANTE_NAV: NavItem[] = [
  { label: "Dashboard", href: "/estudiante", icon: Icons.dashboard },
  { label: "Notas", href: "/estudiante/notas", icon: Icons.notas },
  { label: "Perfil", href: "/estudiante/perfil", icon: Icons.perfil },
];

type SidebarProps = {
  role: "profesor" | "estudiante";
};

const HEADER_HEIGHT = "64px";

export default function Sidebar({ role }: SidebarProps) {
  const { isOpen, toggle } = useSidebar();
  const pathname = usePathname();

  const navItems = role === "profesor" ? PROFESOR_NAV : ESTUDIANTE_NAV;
  const roleLabel = role === "profesor" ? "Profesor" : "Estudiante";
  const roleColor =
    role === "profesor"
      ? "bg-blue-100 text-blue-700"
      : "bg-green-100 text-green-700";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/40 md:hidden"
          onClick={toggle}
        />
      )}
      <aside
        style={{ top: HEADER_HEIGHT, height: `calc(100vh - ${HEADER_HEIGHT})` }}
        className={`fixed left-0 z-20 w-64 bg-green-600 border-r border-green-900 flex flex-col transition-transform duration-300 shadow-sm ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-1 px-4 py-4 border-b border-green-900">
          <p className="text-xs font-semibold text-shadow-2xs text-black">Conectado como:</p>
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${roleColor}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {roleLabel}
          </span>
        </div>

        <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group ${
                  isActive
                    ? "bg-green-50 text-green-700 shadow-sm"
                    : "text-black hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span
                  className={`shrink-0 transition-colors duration-150 ${
                    isActive
                      ? "text-green-600"
                      : "text-black group-hover:text-gray-600"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="flex-1 whitespace-nowrap">{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-4 border-t border-green-900">
          <p className="text-xs text-black font-semibold text-center">
            PoliNotas © {new Date().getFullYear()}
          </p>
        </div>
      </aside>

      <div
        className={`hidden md:block transition-all duration-300 shrink-0 ${isOpen ? "w-64" : "w-0"}`}
      />
    </>
  );
}
