import { SettingsDialog } from "../../settings/settings-dialog";

export default function Header() {
  return (
    <header className="w-full select-none">
      <div className="container max-w-5xl mx-auto px-4 py-3 flex items-center justify-end">
        <SettingsDialog />
      </div>
    </header>
  );
}
