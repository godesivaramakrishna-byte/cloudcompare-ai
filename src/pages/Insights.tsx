import { useMemo } from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { aiTools, categories } from "@/data/aiTools";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = ["hsl(217, 91%, 60%)", "hsl(270, 60%, 55%)", "hsl(142, 71%, 45%)", "hsl(35, 92%, 50%)", "hsl(0, 84%, 60%)", "hsl(195, 80%, 50%)"];

const Insights = () => {
  const accuracyByCategory = useMemo(() =>
    categories.slice(0, 8).map((cat) => {
      const tools = aiTools.filter((t) => t.category === cat.id);
      const avg = tools.length ? Math.round(tools.reduce((s, t) => s + t.accuracy, 0) / tools.length) : 0;
      return { name: cat.name.split(" ")[0], accuracy: avg };
    }), []);

  const cheapest = useMemo(() =>
    [...aiTools].filter((t) => t.priceValue > 0).sort((a, b) => a.priceValue - b.priceValue).slice(0, 5), []);

  const mostAccurate = useMemo(() =>
    [...aiTools].sort((a, b) => b.accuracy - a.accuracy).slice(0, 5), []);

  const distribution = useMemo(() =>
    categories.slice(0, 6).map((cat) => ({
      name: cat.name.split(" ")[0],
      value: aiTools.filter((t) => t.category === cat.id).length,
    })), []);

  const insights = [
    "Website builder AIs are generally cheaper but less accurate than coding AIs.",
    "Chatbot category has the highest average accuracy at 93%.",
    "Open-source tools like Stable Diffusion and Codeium offer great free alternatives.",
    "Enterprise tools in marketing cost significantly more but offer specialized features.",
    "Voice AI tools like ElevenLabs provide exceptional value starting at just $5/mo.",
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Insights</h1>
        <p className="text-sm text-muted-foreground">AI-powered analytics across all tools</p>
      </div>

      {/* Top tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="surface-card p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-sm font-semibold text-foreground mb-4">🎯 Most Accurate Tools</h3>
          <div className="space-y-3">
            {mostAccurate.map((tool, i) => (
              <div key={tool.id} className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground w-4">#{i + 1}</span>
                <span className="text-sm text-foreground flex-1">{tool.name}</span>
                <div className="w-20 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${tool.accuracy}%` }} />
                </div>
                <span className="text-xs font-mono text-foreground w-10 text-right">{tool.accuracy}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="surface-card p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h3 className="text-sm font-semibold text-foreground mb-4">💰 Cheapest AI Tools</h3>
          <div className="space-y-3">
            {cheapest.map((tool, i) => (
              <div key={tool.id} className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground w-4">#{i + 1}</span>
                <span className="text-sm text-foreground flex-1">{tool.name}</span>
                <span className="text-xs font-mono text-foreground">{tool.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div className="surface-card p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-sm font-semibold text-foreground mb-4">Accuracy by Category</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={accuracyByCategory}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 4%, 16%)" />
                <XAxis dataKey="name" tick={{ fill: "hsl(240, 5%, 52%)", fontSize: 10 }} stroke="hsl(240, 4%, 16%)" />
                <YAxis tick={{ fill: "hsl(240, 5%, 52%)", fontSize: 10 }} stroke="hsl(240, 4%, 16%)" domain={[70, 100]} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(240, 4%, 7%)", border: "1px solid hsl(0, 0%, 100%, 0.08)", borderRadius: "8px", color: "hsl(0, 0%, 98%)", fontSize: "12px" }} />
                <Bar dataKey="accuracy" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div className="surface-card p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-sm font-semibold text-foreground mb-4">Tool Distribution</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={distribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, value }) => `${name} (${value})`}>
                  {distribution.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "hsl(240, 4%, 7%)", border: "1px solid hsl(0, 0%, 100%, 0.08)", borderRadius: "8px", color: "hsl(0, 0%, 98%)", fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* AI Insights */}
      <motion.div className="surface-card p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-4 w-4 text-yellow-400" />
          <h3 className="text-sm font-semibold text-foreground">AI-Generated Insights</h3>
        </div>
        <div className="space-y-3">
          {insights.map((insight, i) => (
            <div key={i} className="flex items-start gap-3 bg-secondary/50 rounded-lg p-3 border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{insight}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Insights;
