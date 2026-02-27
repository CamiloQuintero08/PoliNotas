
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Inicio",    href: "#inicio" },
  { label: "¿Qué es?", href: "#que-es" },
  { label: "Funciones", href: "#funciones" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-600 fixed w-full z-20 top-0 inset-s-0 border-b border-green-700">
      <div className="flex flex-wrap items-center justify-between px-4 py-3">
        <a
          href="https://www.politecnicojic.edu.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <Image
            src="/images/LogoPoliNotas.png"
            alt="logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black drop-shadow-sm">
            Poli<span className="text-yellow-500">Notas</span>
          </span>
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          )}
        </button>
        <div
          id="navbar-default"
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:items-center md:gap-6`}
        >
          <ul className="font-medium flex flex-col md:flex-row md:items-center md:gap-6 p-4 md:p-0 mt-4 md:mt-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 md:p-0 text-white hover:text-yellow-400 hover:underline transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row gap-2 px-4 md:px-0 pb-4 md:pb-0">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="text-center px-4 py-2 text-sm font-semibold text-green-700 bg-white rounded-lg hover:bg-yellow-400 hover:text-white transition-all duration-200"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="text-center px-4 py-2 text-sm font-semibold text-white border border-white rounded-lg hover:bg-white hover:text-green-700 transition-all duration-200"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}