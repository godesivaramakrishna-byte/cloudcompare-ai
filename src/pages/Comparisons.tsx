import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Trophy, Zap } from "lucide-react";
import { aiTools } from "@/data/aiTools";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Comparisons = () => {
  const [tool1Id, setTool1Id] = useState(aiTools[0].id);
  const [tool2Id, setTool2Id] = useState(aiTools[1].id);

  const tool1 = aiTools.find((t) => t.id === tool1Id)!;
  const tool2 = aiTools.find((t) => t.id === tool2Id)!;

  const chartData = useMemo(() => [
    { name: "Accuracy", [tool1.name]: tool1.accuracy, [tool2.name]: tool2.accuracy },
    { name: "Speed", [tool1.name]: tool1.speed === "Real-time" ? 95 : tool1.speed === "Very Fast" ? 90 : tool1.speed === "Fast" ? 80 : 60, [tool2.name]: tool2.speed === "Real-time" ? 95 : tool2.speed === "Very Fast" ? 90 : tool2.speed === "Fast" ? 80 : 60 },
    { name: "Value", [tool1.name]: Math.max(0, 100 - tool1.priceValue), [tool2.name]: Math.max(0, 100 - tool2.priceValue) },
  ], [tool1, tool2]);

  const winner = tool1.accuracy >= tool2.accuracy ? tool1 : tool2;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Compare AI Tools</h1>
        <p className="text-sm text-muted-foreground">Side-by-side comparison of any two AI tools</p>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-muted-foreground mb-1.5 block">Tool 1</label>
          <select
            value={tool1Id}
            onChange={(e) => setTool1Id(e.target.value)}
            className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
          >
            {aiTools.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-1.5 block">Tool 2</label>
          <select
            value={tool2Id}
            onChange={(e) => setTool2Id(e.target.value)}
            className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
          >
            {aiTools.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[tool1, tool2].map((tool, i) => {
          const isWinner = tool.id === winner.id;
          return (
            <motion.div
              key={tool.id}
              className={`surface-card p-6 border ${isWinner ? "border-green-500/40 shadow-[0_0_20px_hsl(142,71%,45%,0.1)]" : "border-border"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {isWinner && (
                <div className="flex items-center gap-1.5 mb-3">
                  <Trophy className="h-3.5 w-3.5 text-yellow-400" />
                  <span className="text-[10px] text-yellow-400 font-medium">Winner</span>
                </div>
              )}
              <h3 className="text-lg font-bold text-foreground mb-1">{tool.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{tool.description}</p>
              <div className="space-y-3">
                {[
                  { label: "Accuracy", value: `${tool.accuracy}%` },
                  { label: "Price", value: tool.price },
                  { label: "Speed", value: tool.speed },
                  { label: "Features", value: tool.features.length.toString() },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="text-foreground font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Chart */}
      <motion.div
        className="surface-card p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-sm font-semibold text-foreground mb-4">Visual Comparison</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 4%, 16%)" />
              <XAxis dataKey="name" tick={{ fill: "hsl(240, 5%, 52%)", fontSize: 12 }} stroke="hsl(240, 4%, 16%)" />
              <YAxis tick={{ fill: "hsl(240, 5%, 52%)", fontSize: 12 }} stroke="hsl(240, 4%, 16%)" />
              <Tooltip contentStyle={{ backgroundColor: "hsl(240, 4%, 7%)", border: "1px solid hsl(0, 0%, 100%, 0.08)", borderRadius: "8px", color: "hsl(0, 0%, 98%)", fontSize: "12px" }} />
              <Bar dataKey={tool1.name} fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey={tool2.name} fill="hsl(270, 60%, 55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* AI Verdict */}
      <motion.div
        className="surface-card p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Zap className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">AI Verdict</h3>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4 border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">{winner.name}</span> wins this comparison with{" "}
            <span className="font-mono text-foreground">{winner.accuracy}%</span> accuracy at{" "}
            <span className="font-mono text-foreground">{winner.price}</span>.
            {tool1.priceValue < tool2.priceValue
              ? ` ${tool1.name} is more budget-friendly, making it ideal for cost-conscious users.`
              : ` ${tool2.name} offers better value for the price point.`}
            {" "}Consider your specific needs — accuracy vs. budget — when making your choice.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Comparisons;
