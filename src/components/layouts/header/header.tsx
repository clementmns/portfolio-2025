import { SettingsDialog } from "@/components/settings/settings-dialog";
import GMT from "./header-gmt";

export default function Header() {
  return (
    <header className="w-full">
      <div className="container max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <GMT />
        <SettingsDialog />
      </div>
    </header>
  );
}
