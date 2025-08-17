"use client";

import { SettingsDialog } from "@/components/settings/settings-dialog";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-999">
      <div className="container mx-auto max-w-5xl px-4 py-2 flex items-center justify-end gap-3">
        <div className="flex items-center justify-center gap-2">
          <SettingsDialog />
        </div>
      </div>
    </header>
  );
}
