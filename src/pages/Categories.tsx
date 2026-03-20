import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { categories, getToolsByCategory, getCategoryById } from "@/data/aiTools";

const CategoryDetail = ({ categoryId }: { categoryId: string }) => {
  const category = getCategoryById(categoryId);
  const tools = getToolsByCategory(categoryId);

  if (!category) return <p className="p-8 text-muted-foreground">Category not found.</p>;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <Link to="/categories" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-foreground">{category.icon} {category.name}</h1>
          <p className="text-sm text-muted-foreground">{category.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool, i) => {
          const rank = i + 1;
          const borderClass = rank === 1
            ? "border-green-500/40 shadow-[0_0_20px_hsl(142,71%,45%,0.1)]"
            : rank === 2
            ? "border-primary/40"
            : "border-border";

          return (
            <motion.div
              key={tool.id}
              className={`surface-card p-5 border ${borderClass} relative`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-muted-foreground">#{rank}</span>
                    <h3 className="text-sm font-bold text-foreground">{tool.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                </div>
                {rank === 1 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-medium">
                    Recommended
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-2 flex-1">
                  <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${tool.accuracy}%` }} />
                  </div>
                  <span className="text-xs font-mono text-foreground">{tool.accuracy}%</span>
                </div>
                <span className="text-xs font-semibold text-foreground">{tool.price}</span>
              </div>
              <div className="flex gap-1.5 mt-3 flex-wrap">
                {tool.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const CategoriesIndex = () => (
  <div className="p-6 lg:p-8 space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-1">Categories</h1>
      <p className="text-sm text-muted-foreground">Browse AI tools by category</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
        >
          <Link
            to={`/categories/${cat.id}`}
            className="surface-card card-glow p-6 flex flex-col items-center text-center gap-3 group block h-full"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
            <span className="text-sm font-semibold text-foreground">{cat.name}</span>
            <span className="text-xs text-muted-foreground">{cat.description}</span>
            <span className="text-[10px] text-primary mt-auto">{cat.toolCount} tools →</span>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

const Categories = () => {
  const { categoryId } = useParams();
  return categoryId ? <CategoryDetail categoryId={categoryId} /> : <CategoriesIndex />;
};

export default Categories;
