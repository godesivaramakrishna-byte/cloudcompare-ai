import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, ShieldAlert } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const suggestedQuestions = [
  "How to use the API?",
  "How to integrate AI tools?",
  "Best AI for website building?",
  "How to compare AI tools?",
];

const botResponses: Record<string, string> = {
  "How to use the API?": `**Getting Started with the API**\n\n1. Sign up and get your API key from the Settings page\n2. Install our SDK: \`npm install @aiuniverse/sdk\`\n3. Initialize: \`const ai = new AIUniverse({ apiKey: 'your-key' })\`\n4. Query tools: \`const tools = await ai.tools.list({ category: 'chatbots' })\`\n\n⚠️ **Security Tip**: Never expose your API key in client-side code.`,
  "How to integrate AI tools?": `**Integration Guide**\n\n1. Choose your AI tool from the catalog\n2. Get the tool's API endpoint from its detail page\n3. Use our proxy API for unified access:\n\`\`\`\nconst result = await ai.proxy({\n  tool: 'chatgpt',\n  prompt: 'Hello!'\n})\n\`\`\`\n4. Handle responses with our standardized format\n\n🔒 All requests are encrypted and rate-limited.`,
  "Best AI for website building?": `**Top Website Building AIs**\n\n1. **Lovable AI** (94% accuracy, $20/mo) — Best overall, full-stack React apps\n2. **Bolt AI** (89%, $25/mo) — Fastest prototyping\n3. **Framer AI** (87%, $22/mo) — Best for designers\n4. **Durable AI** (82%, $15/mo) — Best value for small businesses\n\n💡 Recommendation: Start with Lovable AI for the best balance of features and accuracy.`,
  "How to compare AI tools?": `**Comparison Guide**\n\n1. Go to the **Comparisons** page\n2. Select two tools from the dropdowns\n3. View side-by-side metrics:\n   - Accuracy\n   - Price\n   - Speed\n   - Features\n4. Check the **AI Verdict** for a smart recommendation\n\n📊 You can also use our API:\n\`ai.compare('lovable', 'bolt')\``,
};

const ApiGuide = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "👋 Welcome to the AI Universe Developer Guide! Ask me anything about our API, integrations, or AI tool recommendations." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    const botMsg: Message = { role: "bot", content: botResponses[text] || `I can help you with that! Here's what I know about "${text}":\n\nUse our API to search, compare, and integrate any of our ${50}+ AI tools. Check the documentation at docs.aiuniverse.ai for detailed guides.\n\n💡 Try asking one of the suggested questions for detailed guides.` };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="p-6 lg:p-8 h-[calc(100vh-2rem)] flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-foreground mb-1">API Guide</h1>
        <p className="text-sm text-muted-foreground">Developer assistant — ask anything</p>
      </div>

      {/* Security tip */}
      <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-lg p-3 mb-4">
        <ShieldAlert className="h-4 w-4 text-destructive flex-shrink-0" />
        <p className="text-xs text-destructive">Never expose API keys in client-side code. Use environment variables and server-side proxies.</p>
      </div>

      {/* Suggested */}
      <div className="flex flex-wrap gap-2 mb-4">
        {suggestedQuestions.map((q) => (
          <button
            key={q}
            onClick={() => sendMessage(q)}
            className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 surface-card p-4 rounded-xl">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {msg.role === "bot" && (
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Bot className="h-3.5 w-3.5 text-primary" />
              </div>
            )}
            <div className={`max-w-[75%] rounded-xl px-4 py-3 text-sm ${
              msg.role === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground"
            }`}>
              <p className="whitespace-pre-wrap text-xs leading-relaxed">{msg.content}</p>
            </div>
            {msg.role === "user" && (
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <User className="h-3.5 w-3.5 text-foreground" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder="Ask about APIs, integrations, or AI tools..."
          className="flex-1 bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
        />
        <button
          onClick={() => sendMessage(input)}
          className="bg-primary text-primary-foreground px-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ApiGuide;
