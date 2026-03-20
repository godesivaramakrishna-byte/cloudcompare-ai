import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ExternalLink } from "lucide-react";
import { aiTools, categories } from "@/data/aiTools";
import type { AITool } from "@/data/aiTools";

const Tools = () => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"accuracy" | "price">("accuracy");
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);

  const filtered = useMemo(() => {
    let list = [...aiTools];
    if (search) list = list.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()) || t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase())));
    if (categoryFilter !== "all") list = list.filter((t) => t.category === categoryFilter);
    list.sort((a, b) => sortBy === "accuracy" ? b.accuracy - a.accuracy : a.priceValue - b.priceValue);
    return list;
  }, [search, categoryFilter, sortBy]);

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">AI Tools</h1>
        <p className="text-sm text-muted-foreground">Browse and compare {aiTools.length} AI tools</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "accuracy" | "price")}
          className="bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
        >
          <option value="accuracy">Sort by Accuracy</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      {/* Table */}
      <div className="surface-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium">Name</th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium hidden sm:table-cell">Category</th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium">Price</th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium">Accuracy</th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground font-medium hidden md:table-cell">Tags</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((tool) => (
                <tr
                  key={tool.id}
                  onClick={() => setSelectedTool(tool)}
                  className="border-b border-border/50 hover:bg-secondary/30 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-foreground">{tool.name}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell capitalize">{tool.category.replace(/-/g, " ")}</td>
                  <td className="px-4 py-3 text-foreground font-mono">{tool.price}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${tool.accuracy}%` }} />
                      </div>
                      <span className="text-xs font-mono text-foreground">{tool.accuracy}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <div className="flex gap-1 flex-wrap">
                      {tool.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">{tag}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              className="surface-card p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-foreground">{selectedTool.name}</h2>
                  <p className="text-xs text-muted-foreground capitalize">{selectedTool.category.replace(/-/g, " ")}</p>
                </div>
                <button onClick={() => setSelectedTool(null)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{selectedTool.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground">Accuracy</p>
                  <p className="text-lg font-bold text-foreground">{selectedTool.accuracy}%</p>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground">Price</p>
                  <p className="text-lg font-bold text-foreground">{selectedTool.price}</p>
                </div>
              </div>
              <h3 className="text-xs font-semibold text-foreground mb-2">Features</h3>
              <ul className="space-y-1 mb-4">
                {selectedTool.features.map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-1.5 flex-wrap mb-4">
                {selectedTool.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                ))}
              </div>
              <a
                href={selectedTool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Visit Website <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tools;
