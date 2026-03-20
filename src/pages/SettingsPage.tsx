import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserSettings {
  name: string;
  email: string;
  theme: "dark" | "light" | "system";
  budget: string;
  preferredCategory: string;
}

const defaultSettings: UserSettings = {
  name: "",
  email: "",
  theme: "dark",
  budget: "50",
  preferredCategory: "all",
};

const SettingsPage = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState<UserSettings>(() => {
    const saved = localStorage.getItem("ai-universe-settings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const handleSave = () => {
    localStorage.setItem("ai-universe-settings", JSON.stringify(settings));
    toast({ title: "Settings saved", description: "Your preferences have been updated." });
  };

  const update = (key: keyof UserSettings, value: string) =>
    setSettings((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your profile and preferences</p>
      </div>

      <motion.div className="surface-card p-6 space-y-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-sm font-semibold text-foreground">Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
            <input value={settings.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
            <input value={settings.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" type="email" className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" />
          </div>
        </div>
      </motion.div>

      <motion.div className="surface-card p-6 space-y-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h2 className="text-sm font-semibold text-foreground">Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Theme</label>
            <select value={settings.theme} onChange={(e) => update("theme", e.target.value)} className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50">
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Monthly Budget</label>
            <input value={settings.budget} onChange={(e) => update("budget", e.target.value)} placeholder="50" type="number" className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Preferred Category</label>
            <select value={settings.preferredCategory} onChange={(e) => update("preferredCategory", e.target.value)} className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50">
              <option value="all">All Categories</option>
              <option value="website-builders">Website Builders</option>
              <option value="code-assistants">Code Assistants</option>
              <option value="chatbots">Chatbots</option>
              <option value="image-gen">Image Generation</option>
            </select>
          </div>
        </div>
      </motion.div>

      <button onClick={handleSave} className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
        <Save className="h-4 w-4" /> Save Settings
      </button>
    </div>
  );
};

export default SettingsPage;
