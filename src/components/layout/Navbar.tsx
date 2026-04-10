"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Types ───────────────────────────────────────────────────── */
type DropdownItem = { label: string; description?: string; href: string };
type NavItem =
  | { label: string; href: string; dropdown?: never }
  | { label: string; href?: never; dropdown: DropdownItem[] };

/* ─── Nav config ──────────────────────────────────────────────── */
const NAV_ITEMS: NavItem[] = [
  {
    label: "Product",
    dropdown: [
      { label: "Overview",       description: "See everything AbleSpace can do",  href: "#" },
      { label: "Features",       description: "Tools built for modern schools",   href: "#" },
      { label: "Integrations",   description: "Connect your existing tools",      href: "#" },
      { label: "Security",       description: "Enterprise-grade protection",      href: "#" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Blog",           description: "Insights and best practices",      href: "#" },
      { label: "Case Studies",   description: "How schools use AbleSpace",        href: "#" },
      { label: "Help Center",    description: "Guides and documentation",         href: "#" },
      { label: "Webinars",       description: "Live and on-demand sessions",      href: "#" },
    ],
  },
  { label: "Schools/Districts", href: "#" },
  { label: "Pricing",           href: "#" },
];

/* ─── Icons ───────────────────────────────────────────────────── */
function ArrowDown({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={className}>
      <path d="M9 4.50002C9 4.50002 6.79053 7.49999 5.99998 7.5C5.20942 7.50001 3 4.5 3 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── Desktop Dropdown ────────────────────────────────────────── */
function Dropdown({ items, open }: { items: DropdownItem[]; open: boolean }) {
  return (
    <div
      className={`
        absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64
        bg-[#ffffff] border border-[var(--color-border)] rounded-[var(--radius-lg)]
        shadow-[var(--shadow-lg)] py-1.5 z-50
        transition-all duration-150 origin-top
        ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
      `}
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex flex-col px-4 py-2.5 hover:bg-[var(--color-neutral-50)] transition-colors group"
        >
          <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary-600)]">
            {item.label}
          </span>
          {item.description && (
            <span className="text-xs text-[var(--color-text-muted)] mt-0.5">
              {item.description}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}

/* ─── Desktop Nav link ────────────────────────────────────────── */
function NavLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu  = () => { if (timerRef.current) clearTimeout(timerRef.current); setOpen(true); };
  const closeMenu = () => { timerRef.current = setTimeout(() => setOpen(false), 120); };
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        className="text-sm font-medium text-[#5D636F] hover:text-[var(--color-text)] transition-colors whitespace-nowrap px-1"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <button
        className="flex items-center gap-1 text-sm font-medium text-[#5D636F] hover:text-[var(--color-text)] transition-colors whitespace-nowrap px-1 py-1"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {item.label}
        <ArrowDown className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
      </button>
      <Dropdown items={item.dropdown} open={open} />
    </div>
  );
}

/* ─── Mobile accordion item ───────────────────────────────────── */
function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block px-4 py-3 text-[15px] font-medium text-[var(--color-text)] hover:bg-[var(--color-neutral-50)] rounded-[var(--radius-md)] transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-medium text-[var(--color-text)] hover:bg-[var(--color-neutral-50)] rounded-[var(--radius-md)] transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <ArrowDown className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pl-4 pb-1 flex flex-col gap-0.5">
          {item.dropdown.map((sub) => (
            <Link
              key={sub.label}
              href={sub.href}
              onClick={onClose}
              className="flex flex-col px-4 py-2.5 rounded-[var(--radius-md)] hover:bg-[var(--color-neutral-50)] transition-colors group"
            >
              <span className="text-sm font-medium text-[var(--color-text)]">{sub.label}</span>
              {sub.description && (
                <span className="text-xs text-[var(--color-text-muted)] mt-0.5">{sub.description}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile menu ─────────────────────────────────────────────── */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/20 transition-opacity duration-200 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <div
        className={`
          fixed top-14 left-0 right-0 z-30 bg-[#ffffff] border-b border-[#ECEDED]
          rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] lg:hidden
          transition-all duration-200 origin-top
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-0.5 border-b border-[var(--color-border)]">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={onClose} />
            ))}
          </div>
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link
              href="#"
              onClick={onClose}
              className="flex items-center justify-center w-full px-4 py-3 rounded-[var(--radius-md)] border border-[#DDD8D0] text-sm font-semibold text-[#5D636F] hover:bg-[var(--color-neutral-50)] transition-colors"
            >
              Login
            </Link>
            <Link
              href="#"
              onClick={onClose}
              className="flex items-center justify-center w-full px-4 py-3 rounded-[var(--radius-md)] bg-[#00A9F8] text-white text-sm font-semibold hover:bg-[#2596F3] transition-colors"
            >
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Logo ────────────────────────────────────────────────────── */
function Logo() {
  return (
    <Link href="/" className="shrink-0 flex items-center gap-2">
      <Image src="/assets/navbar/ablespace-icon-logo.svg" alt="" width={28} height={28} />
      <span className="text-[15px] font-bold text-[#1A1814]">AbleSpace</span>
    </Link>
  );
}

/* ─── Navbar ──────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#ffffff] border-b border-[#ECEDED]">
        <nav className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">

          {/* Left: Logo */}
          <Logo />

          {/* Center: Nav links */}
          <div className="hidden lg:flex items-center gap-5 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </div>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              href="#"
              className="px-4 py-1.5 text-sm font-semibold rounded-[var(--radius-md)] text-[#7A716B] hover:bg-[#EDECEB] transition-colors"
            >
              Login
            </Link>
            <Link
              href="#"
              className="px-4 py-1.5 rounded-[var(--radius-md)] text-[#F8FAFC] text-sm font-semibold hover:brightness-105 transition-all"
              style={{ background: 'linear-gradient(to bottom, #00A9F8, #00A0EB)' }}
            >
              Sign up for free
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <button
            className="lg:hidden p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-neutral-100)] transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-[5px]">
              <span className={`block h-[1.5px] w-5 bg-[var(--color-text)] rounded-full origin-center transition-all duration-300 ease-in-out ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-[var(--color-text)] rounded-full transition-all duration-200 ease-in-out ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-[var(--color-text)] rounded-full origin-center transition-all duration-300 ease-in-out ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </div>
          </button>

        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
