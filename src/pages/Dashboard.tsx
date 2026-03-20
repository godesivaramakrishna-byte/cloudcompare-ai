import { motion } from "framer-motion";
import { TrendingUp, Star, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, getTrendingTools, aiTools } from "@/data/aiTools";

const trendingTools = getTrendingTools();

const Dashboard = () => {
  return (
    <div className="p-6 lg:p-8 space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
          Welcome to AI Universe
        </h1>
        <p className="text-muted-foreground">
          Discover the best AI tools for every task in one place
        </p>
      </motion.div>

      {/* Quick Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Total AI Tools", value: aiTools.length.toString(), icon: Zap, color: "text-primary" },
          { label: "Most Used Category", value: "Chatbots", icon: TrendingUp, color: "text-glow-purple" },
          { label: "Best Value AI", value: "Codeium", icon: Star, color: "text-yellow-400" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="surface-card card-glow p-5 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={`p-2.5 rounded-xl bg-secondary ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Categories */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-foreground">Featured Categories</h2>
          <Link to="/categories" className="text-xs text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/categories/${cat.id}`}
                className="surface-card card-glow p-4 flex flex-col items-center text-center gap-2 group block h-full"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className="text-xs font-semibold text-foreground">{cat.name}</span>
                <span className="text-[10px] text-muted-foreground">{cat.toolCount} tools</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending AI Tools */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-foreground">⭐ Trending AI Tools</h2>
          <Link to="/tools" className="text-xs text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {trendingTools.map((tool, i) => (
            <motion.div
              key={tool.id}
              className="surface-card card-glow p-5 flex flex-col gap-3 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {tool.badge && (
                <span className={`absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  tool.badge === "Popular" ? "bg-primary/20 text-primary" :
                  tool.badge === "Trending" ? "bg-glow-purple/20 text-glow-purple" :
                  tool.badge === "Recommended" ? "bg-green-500/20 text-green-400" :
                  "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {tool.badge}
                </span>
              )}
              <h3 className="text-sm font-bold text-foreground">{tool.name}</h3>
              <p className="text-[10px] text-muted-foreground">{tool.category.replace("-", " ")}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${tool.accuracy}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-foreground">{tool.accuracy}%</span>
              </div>
              <p className="text-xs font-semibold text-foreground">{tool.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
