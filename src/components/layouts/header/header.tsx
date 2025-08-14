import { SettingsDialog } from "@/components/settings/settings-dialog";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-999">
      <div className="container max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div></div>
        <div className="flex items-center justify-center gap-4">
          <SettingsDialog />
        </div>
      </div>
    </header>
  );
}
