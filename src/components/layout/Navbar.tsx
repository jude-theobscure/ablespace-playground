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
      { label: "Overview",          description: "See everything AbleSpace can do",     href: "#" },
      { label: "Features",          description: "Tools built for modern schools",      href: "#" },
      { label: "Integrations",      description: "Connect your existing tools",         href: "#" },
      { label: "Security",          description: "Enterprise-grade protection",         href: "#" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Blog",              description: "Insights and best practices",         href: "#" },
      { label: "Case Studies",      description: "How schools use AbleSpace",           href: "#" },
      { label: "Help Center",       description: "Guides and documentation",            href: "#" },
      { label: "Webinars",          description: "Live and on-demand sessions",         href: "#" },
    ],
  },
  { label: "Schools / Districts", href: "#" },
  { label: "Pricing",             href: "#" },
  {
    label: "Built for",
    dropdown: [
      { label: "Special Education", description: "IEP tools and compliance",           href: "#" },
      { label: "Administrators",    description: "District-wide oversight",             href: "#" },
      { label: "Teachers",          description: "Classroom management made easy",      href: "#" },
      { label: "Parents",           description: "Stay connected and informed",         href: "#" },
    ],
  },
];

/* ─── Icons ───────────────────────────────────────────────────── */
function ArrowDown({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={className}>
      <path d="M9 4.50002C9 4.50002 6.79053 7.49999 5.99998 7.5C5.20942 7.50001 3 4.5 3 4.5" stroke="#5D636F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.15468 1.125C9.70697 1.125 10.1547 1.57272 10.1547 2.125V3.625C10.1547 4.17728 9.70697 4.625 9.15468 4.625C8.6024 4.625 8.15468 4.17728 8.15468 3.625V2.125C8.15468 1.57272 8.6024 1.125 9.15468 1.125ZM3.41789 3.41789C3.80842 3.02737 4.44158 3.02737 4.83211 3.41789L5.83211 4.41789C6.22263 4.80842 6.22263 5.44158 5.83211 5.83211C5.44158 6.22263 4.80842 6.22263 4.41789 5.83211L3.41789 4.83211C3.02737 4.44158 3.02737 3.80842 3.41789 3.41789ZM14.8321 3.41789C15.2226 3.80842 15.2226 4.44158 14.8321 4.83211L13.8321 5.83211C13.4416 6.22263 12.8084 6.22263 12.4179 5.83211C12.0274 5.44158 12.0274 4.80842 12.4179 4.41789L13.4179 3.41789C13.8084 3.02737 14.4416 3.02737 14.8321 3.41789ZM1.125 9.15475C1.125 8.60246 1.57272 8.15475 2.125 8.15475H3.625C4.17728 8.15475 4.625 8.60246 4.625 9.15475C4.625 9.70703 4.17728 10.1547 3.625 10.1547H2.125C1.57272 10.1547 1.125 9.70703 1.125 9.15475ZM5.83211 12.4179C6.22263 12.8084 6.22263 13.4416 5.83211 13.8321L4.83211 14.8321C4.44158 15.2226 3.80842 15.2226 3.41789 14.8321C3.02737 14.4416 3.02737 13.8084 3.41789 13.4179L4.41789 12.4179C4.80842 12.0274 5.44158 12.0274 5.83211 12.4179Z" fill="currentColor"/>
      <path d="M22.5867 11.809C22.7202 11.9837 22.8771 12.2526 22.875 12.5885C22.8697 13.404 22.3134 13.9616 21.7738 14.3146C21.2195 14.6771 20.5073 14.945 19.8149 15.1514C19.1126 15.3609 18.3761 15.5226 17.7479 15.6528C17.3101 15.742 16.5326 15.901 16.3096 15.9636C15.9419 16.0667 15.8675 16.1334 15.8434 16.1594C15.8158 16.1891 15.751 16.2783 15.6649 16.6699L15.6616 16.685L15.6616 16.6851C15.2584 18.5187 14.9415 19.9598 14.6025 20.942C14.4331 21.4327 14.2367 21.8762 13.9787 22.211C13.7067 22.5641 13.3197 22.851 12.7992 22.874C12.4564 22.8891 12.1811 22.7327 12.0072 22.6036C11.8219 22.4659 11.6532 22.2857 11.5025 22.0975C11.1992 21.7186 10.8858 21.2013 10.5783 20.6137C9.95921 19.4306 9.30628 17.8498 8.75479 16.2272C8.2036 14.6055 7.74246 12.909 7.51973 11.4936C7.40874 10.7884 7.35226 10.1245 7.38357 9.56176C7.41277 9.03706 7.52496 8.43525 7.90865 8.02206C8.30445 7.59583 8.90729 7.45116 9.43472 7.40033C9.99767 7.34607 10.6634 7.38264 11.3697 7.47527C12.7875 7.66125 14.4935 8.0905 16.127 8.61631C17.7619 9.14257 19.359 9.7768 20.5593 10.3869C21.1557 10.69 21.6815 11.0009 22.069 11.3045C22.2617 11.4554 22.4452 11.6239 22.5867 11.809Z" fill="currentColor"/>
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M1.75 11.9425C1.74999 9.75225 1.75012 8.03186 1.93066 6.6886C2.11575 5.31194 2.50313 4.21965 3.36133 3.36145C4.21953 2.50325 5.31182 2.11587 6.68848 1.93079C8.03174 1.75024 9.75212 1.75011 11.9424 1.75012L12.0576 1.75012C14.2479 1.75011 15.9683 1.75024 17.3115 1.93079C18.6882 2.11587 19.7805 2.50325 20.6387 3.36145C21.4969 4.21965 21.8842 5.31194 22.0693 6.6886C22.2499 8.03186 22.25 9.75224 22.25 11.9425L22.25 12.0577C22.25 14.248 22.2499 15.9684 22.0693 17.3116C21.8842 18.6883 21.4969 19.7806 20.6387 20.6388C19.7805 21.497 18.6882 21.8844 17.3115 22.0695C15.9683 22.25 14.2479 22.2501 12.0576 22.2501L11.9424 22.2501C9.75213 22.2501 8.03174 22.25 6.68848 22.0695C5.31182 21.8844 4.21953 21.497 3.36133 20.6388C2.50313 19.7806 2.11575 18.6883 1.93066 17.3116C1.75012 15.9684 1.74999 14.248 1.75 12.0577L1.75 11.9425ZM9.78613 7.29895C9.3992 7.69297 9.40584 8.32702 9.7998 8.71399L10.248 9.17004C10.5216 9.45467 10.8835 9.84256 11.2432 10.2589C11.6063 10.6794 11.95 11.1095 12.1973 11.4825C12.3212 11.6695 12.4079 11.8224 12.46 11.9376C12.4714 11.9628 12.48 11.9837 12.4863 12.0001C12.48 12.0166 12.4714 12.0374 12.46 12.0626C12.4079 12.1778 12.3212 12.3307 12.1973 12.5177C11.95 12.8907 11.6063 13.3209 11.2432 13.7413C10.8835 14.1577 10.5216 14.5456 10.248 14.8302L9.7998 15.2863C9.40597 15.6731 9.39958 16.3063 9.78613 16.7003C10.173 17.0942 10.8061 17.1006 11.2002 16.714L11.6895 16.2159C11.9784 15.9153 12.3667 15.5006 12.7568 15.0489C13.1434 14.6015 13.5491 14.0977 13.8643 13.6222C14.0215 13.3848 14.1703 13.1345 14.2822 12.8868C14.3862 12.6568 14.5 12.3418 14.5 12.0001C14.5 11.6585 14.3863 11.3435 14.2822 11.1134C14.1702 10.8658 14.0216 10.6154 13.8643 10.3781C13.5491 9.90254 13.1434 9.39878 12.7568 8.95129C12.3667 8.49962 11.9784 8.08494 11.6895 7.7843L11.2002 7.28625C10.8061 6.89964 10.173 6.90507 9.78613 7.29895Z" fill="currentColor"/>
    </svg>
  );
}

/* ─── Desktop Dropdown ────────────────────────────────────────── */
function Dropdown({ items, open }: { items: DropdownItem[]; open: boolean }) {
  return (
    <div
      className={`
        absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64
        bg-[#FFFEFC] border border-[var(--color-border)] rounded-[var(--radius-lg)]
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
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
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
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black/20 transition-opacity duration-200 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`
          fixed top-16 left-0 right-0 z-30 bg-[#FFFEFC] border-b border-[var(--color-border)]
          shadow-[var(--shadow-lg)] lg:hidden
          transition-all duration-200 origin-top
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto">
          {/* Nav items */}
          <div className="px-4 py-4 flex flex-col gap-0.5 border-b border-[var(--color-border)]">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={onClose} />
            ))}
          </div>

          {/* CTAs */}
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link
              href="#"
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 w-full px-4 py-3 rounded-[var(--radius-md)] text-sm font-semibold text-[#7A716B] bg-[#EDECEB] hover:bg-[#E6E6E4] hover:text-[#0B172B] transition-colors"
            >
              Book a Demo
              <CursorIcon className="opacity-80" />
            </Link>
            <Link
              href="#"
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 w-full px-4 py-3 rounded-[var(--radius-md)] bg-[#00A9F8] text-[#F8FAFC] text-sm font-semibold hover:bg-[#2596F3] transition-colors"
            >
              Sign Up for Free
              <ArrowRightIcon className="opacity-70" />
            </Link>
            <div className="flex items-center justify-center pt-1 pb-2">
              <Link
                href="#"
                onClick={onClose}
                className="text-sm font-semibold text-[#5D636F] hover:text-[var(--color-text)] transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Logo ────────────────────────────────────────────────────── */
function Logo() {
  return (
    <Link href="/" className="shrink-0">
      <Image src="/assets/navbar/ablespace-text-logo.svg" alt="AbleSpace" width={142} height={32} />
    </Link>
  );
}

/* ─── Navbar ──────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          sticky top-0 z-40 w-full bg-[#FFFEFC] transition-shadow duration-200
          border-b border-[#F8F8F8] ${scrolled ? "shadow-[var(--shadow-md)]" : ""}
        `}
      >
        <nav className="relative max-w-[1000px] mx-auto px-6 h-16 flex items-center justify-between">

          {/* Left: Logo */}
          <Logo />

          {/* Center: Nav links — absolutely centered in full nav */}
          <div className="hidden lg:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </div>

          {/* Right: Actions (desktop) */}
          <div className="hidden lg:flex items-center gap-1 shrink-0">
<Link
              href="#"
              className="px-3 py-2 text-sm font-semibold text-[#5D636F] hover:text-[var(--color-text)] transition-colors"
            >
              Login
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius-md)] bg-[#00A9F8] text-[#F8FAFC] text-sm font-semibold hover:bg-[#2596F3] transition-colors"
            >
              Sign Up
              <ArrowRightIcon className="opacity-70" />
            </Link>
          </div>

          {/* Mobile: Hamburger → X */}
          <button
            className="lg:hidden p-2 rounded-[var(--radius-md)] hover:bg-[var(--color-neutral-100)] transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-[5px]">
              <span
                className={`block h-[1.5px] w-5 bg-[var(--color-text)] rounded-full origin-center transition-all duration-300 ease-in-out ${
                  mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-[var(--color-text)] rounded-full transition-all duration-200 ease-in-out ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-[var(--color-text)] rounded-full origin-center transition-all duration-300 ease-in-out ${
                  mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>

        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
