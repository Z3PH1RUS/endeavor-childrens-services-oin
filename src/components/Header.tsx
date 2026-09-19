"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ContentImage } from "@/components/ContentImage";
import { siteImages } from "@/lib/images";
import { programLinks, siteConfig } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isProgramsActive(pathname: string) {
  return pathname.startsWith("/programs");
}

export function Header() {
  const pathname = usePathname();
  const programsMenuId = useId();
  const programsRef = useRef<HTMLLIElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setProgramsOpen(false);
  }, []);

  const getProgramMenuItems = () =>
    programsRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]');

  const focusProgramItem = (index: number) => {
    const items = getProgramMenuItems();
    if (!items?.length) return;
    const clamped = ((index % items.length) + items.length) % items.length;
    items[clamped]?.focus();
  };

  const handleProgramsButtonKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setProgramsOpen(true);
      focusProgramItem(0);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setProgramsOpen(true);
      const items = getProgramMenuItems();
      focusProgramItem((items?.length ?? 1) - 1);
    }
  };

  const handleProgramMenuKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    const items = getProgramMenuItems();
    if (!items?.length) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusProgramItem(index + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusProgramItem(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusProgramItem(0);
        break;
      case "End":
        event.preventDefault();
        focusProgramItem(items.length - 1);
        break;
      case "Escape":
        event.preventDefault();
        setProgramsOpen(false);
        document.getElementById(`${programsMenuId}-button`)?.focus();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!mobileOpen && !programsOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProgramsOpen(false);
        setMobileOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (
        programsOpen &&
        programsRef.current &&
        !programsRef.current.contains(event.target as Node)
      ) {
        setProgramsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [mobileOpen, programsOpen]);

  const renderNavLink = (href: string, label: string) => {
    const active = isActive(pathname, href);
    return (
      <li key={href}>
        <Link
          href={href}
          className={`block px-3 py-2 text-sm font-semibold transition-colors hover:text-brand ${
            active ? "text-brand" : "text-text"
          }`}
          aria-current={active ? "page" : undefined}
          onClick={closeMobile}
        >
          {label}
        </Link>
      </li>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="relative mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="flex shrink-0 items-center text-text no-underline"
          aria-label={`${siteConfig.name} home`}
          onClick={closeMobile}
        >
          <ContentImage
            src={siteImages.logo.src}
            alt={siteImages.logo.alt}
            width={siteImages.logo.width}
            height={siteImages.logo.height}
            priority
            className="h-10 w-auto max-w-[200px] sm:h-11 sm:max-w-[240px]"
          />
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-6 w-6"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <nav
          id="mobile-nav"
          className={`${
            mobileOpen
              ? "absolute left-0 right-0 top-[68px] flex flex-col border-b border-border bg-white p-4 shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
              : "hidden lg:flex lg:items-center"
          }`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col gap-0 lg:flex-row lg:items-center">
            {renderNavLink("/", "Home")}
            {renderNavLink("/about", "About")}

            <li ref={programsRef} className="group relative">
              <button
                type="button"
                id={`${programsMenuId}-button`}
                className={`flex w-full items-center justify-between px-3 py-2 text-sm font-semibold transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:w-auto ${
                  isProgramsActive(pathname) ? "text-brand" : "text-text"
                }`}
                aria-expanded={programsOpen}
                aria-haspopup="true"
                aria-controls={programsMenuId}
                onClick={() => setProgramsOpen(!programsOpen)}
                onKeyDown={handleProgramsButtonKeyDown}
              >
                Programs
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`ml-1 h-3.5 w-3.5 transition-transform ${programsOpen ? "rotate-180" : ""} lg:group-hover:rotate-180`}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <ul
                id={programsMenuId}
                role="menu"
                aria-labelledby={`${programsMenuId}-button`}
                className={`${
                  programsOpen ? "block" : "hidden"
                } rounded-lg border border-border bg-white py-1 shadow-md lg:absolute lg:left-0 lg:mt-0 lg:min-w-[200px] lg:group-hover:block lg:group-focus-within:block`}
              >
                {programLinks.map((link, index) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.href} role="none">
                      <Link
                        href={link.href}
                        role="menuitem"
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-brand-light hover:text-brand focus-visible:bg-brand-light focus-visible:outline-none ${
                          active ? "font-semibold text-brand" : "text-text"
                        }`}
                        aria-current={active ? "page" : undefined}
                        onClick={closeMobile}
                        onKeyDown={(event) =>
                          handleProgramMenuKeyDown(event, index)
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            {renderNavLink("/board", "Board")}
            {renderNavLink("/get-involved", "Get Involved")}
            {renderNavLink("/contact", "Contact")}
          </ul>

          <div className="mt-3 border-t border-border pt-3 lg:ml-4 lg:mt-0 lg:border-0 lg:pt-0">
            <a
              href={siteConfig.paypalDonate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-bg-dark transition-colors hover:bg-accent-dark lg:w-auto"
              onClick={closeMobile}
            >
              Donate Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
