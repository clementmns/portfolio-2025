"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { CONTACT_EMAIL } from "@/lib/contact";

interface Command {
  id: string;
  label: string;
  group?: string;
  keywords?: string[];
  action: () => void;
}

export function CommandPalette() {
  const tHeader = useTranslations("Header");
  const tg = useTranslations("Generic");
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const panelRef = React.useRef<HTMLDivElement | null>(null);

  // Toggle palette with ⌘K / Ctrl+K
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    function handler() {
      setOpen(true);
    }
    window.addEventListener("open-command-palette", handler);
    return () => window.removeEventListener("open-command-palette", handler);
  }, []);

  React.useEffect(() => {
    if (open) {
      setVisible(true);
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(id);
    } else {
      setQuery("");
      setActiveIndex(0);
      const timeout = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  // Close on any outside pointer down; let underlying button still receive event
  React.useEffect(() => {
    if (!open) return;
    function handlePointerDown(e: PointerEvent) {
      const panel = panelRef.current;
      if (!panel) return;
      if (!panel.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener("pointerdown", handlePointerDown, true);
    return () =>
      window.removeEventListener("pointerdown", handlePointerDown, true);
  }, [open]);

  React.useEffect(() => {
    if (open && visible && inputRef.current) {
      const t = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open, visible]);

  function dispatchSettingsOpen() {
    window.dispatchEvent(new Event("open-settings"));
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function scrollToProjects() {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  }

  function copyEmail() {
    navigator.clipboard.writeText(CONTACT_EMAIL).catch(() => {});
  }

  function switchLocale(locale: string) {
    const parts = window.location.pathname.split("/").filter(Boolean);
    if (parts.length) {
      parts[0] = locale;
    }
    const newPath = `/${parts.join("/")}${window.location.search}${window.location.hash}`;
    window.location.assign(newPath);
  }

  const commands: Command[] = [
    {
      id: "open-settings",
      label: tHeader("settingsDialogTitle"),
      group: tg("settings"),
      keywords: ["settings", "preferences", "config"],
      action: () => dispatchSettingsOpen(),
    },
    {
      id: "toggle-theme",
      label: theme === "dark" ? tg("actionLightMode") : tg("actionDarkMode"),
      group: tg("appearance"),
      keywords: ["theme", "dark", "light", "mode"],
      action: toggleTheme,
    },
    {
      id: "goto-projects",
      label: tg("gotoProjects") || "Go to Projects",
      group: tg("navigation"),
      keywords: ["projects", "work", "portfolio"],
      action: scrollToProjects,
    },
    {
      id: "copy-email",
      label: tg("copyEmail") || "Copy Email",
      group: tg("contact") || "Contact",
      keywords: ["email", "contact"],
      action: copyEmail,
    },
    {
      id: "locale-en",
      label: "Switch to English",
      group: tg("language") || "Language",
      keywords: ["lang", "english", "en"],
      action: () => switchLocale("en"),
    },
    {
      id: "locale-fr",
      label: "Passer en Français",
      group: tg("language") || "Language",
      keywords: ["lang", "francais", "fr"],
      action: () => switchLocale("fr"),
    },
  ];

  const filtered = commands.filter((c) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      c.label.toLowerCase().includes(q) ||
      c.keywords?.some((k) => k.toLowerCase().includes(q))
    );
  });

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(filtered.length - 1, i + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(0, i - 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        filtered[activeIndex]?.action();
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, activeIndex]);

  if (!visible) return null;

  const groups = Array.from(new Set(filtered.map((c) => c.group || "")));

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      data-state={open ? "open" : "closed"}
      data-command-palette-root
      className={cn(
        "fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh] backdrop-blur-sm bg-background/40 pointer-events-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 duration-200"
      )}
      // overlay no longer consumes clicks; pointerdown handled globally
    >
      <div
        ref={panelRef}
        data-state={open ? "open" : "closed"}
        className={cn(
          "bg-background border shadow-xs w-full max-w-xl overflow-hidden rounded-2xl grid pointer-events-auto",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-200"
        )}
      >
        <div className="flex items-center gap-2 border-b px-4">
          <span className="text-xs text-muted-foreground">
            {navigator.platform.includes("Mac") ? "⌘K" : "Ctrl+K"}
          </span>
          <input
            ref={inputRef}
            autoComplete="off"
            spellCheck={false}
            placeholder={
              tg("commandPlaceholder") || "Type a command or search..."
            }
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/60"
          />
        </div>
        <div className="max-h-[50vh] overflow-auto py-2">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-sm text-muted-foreground">
              {tg("noResults") || "No results"}
            </p>
          )}
          {groups.map((g) => (
            <div key={g || "nogroup"} className="py-1">
              {g && (
                <p className="px-4 pb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">
                  {g}
                </p>
              )}
              <ul className="flex flex-col">
                {filtered
                  .filter((c) => (c.group || "") === g)
                  .map((c) => {
                    const globalIndex = filtered.indexOf(c);
                    const active = globalIndex === activeIndex;
                    return (
                      <li key={c.id}>
                        <button
                          type="button"
                          onClick={() => {
                            c.action();
                            setOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 cursor-pointer ${
                            active
                              ? "bg-primary/10 text-foreground"
                              : "hover:bg-muted/70"
                          } transition-colors`}
                          onMouseEnter={() => setActiveIndex(globalIndex)}
                        >
                          {c.label}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t px-4 py-2 text-[10px] text-muted-foreground uppercase tracking-wide">
          <span>{tg("hintNavigate") || "↑↓ to navigate • Enter to run"}</span>
          <span>{tg("hintClose") || "Esc to close"}</span>
        </div>
      </div>
    </div>
  );
}
