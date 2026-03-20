export interface AITool {
  id: string;
  name: string;
  category: string;
  accuracy: number;
  price: string;
  priceValue: number;
  speed: string;
  tags: string[];
  description: string;
  features: string[];
  website: string;
  badge?: "Popular" | "Trending" | "Best Value" | "Recommended";
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  toolCount: number;
}

export const categories: Category[] = [
  { id: "website-builders", name: "Website Builders", icon: "🌐", description: "AI-powered website creation tools", toolCount: 4 },
  { id: "code-assistants", name: "Code Assistants", icon: "💻", description: "AI coding companions and generators", toolCount: 4 },
  { id: "design-ui", name: "Design & UI/UX AI", icon: "🎨", description: "AI tools for design and prototyping", toolCount: 3 },
  { id: "writing-content", name: "Writing & Content AI", icon: "✍️", description: "AI content generation and editing", toolCount: 3 },
  { id: "voice-audio", name: "Voice & Audio AI", icon: "🎤", description: "Speech synthesis and audio processing", toolCount: 3 },
  { id: "chatbots", name: "Chatbots & Conversational AI", icon: "🧠", description: "Conversational AI assistants", toolCount: 4 },
  { id: "video-gen", name: "Video Generation AI", icon: "🎬", description: "AI video creation and editing", toolCount: 3 },
  { id: "image-gen", name: "Image Generation AI", icon: "🖼️", description: "AI image creation tools", toolCount: 3 },
  { id: "data-analysis", name: "Data Analysis & BI AI", icon: "📊", description: "Business intelligence and analytics", toolCount: 3 },
  { id: "education", name: "Education & Learning AI", icon: "📚", description: "AI-powered learning platforms", toolCount: 3 },
  { id: "marketing", name: "Marketing AI", icon: "📈", description: "AI marketing automation tools", toolCount: 3 },
  { id: "productivity", name: "Productivity AI", icon: "🧑‍💼", description: "AI productivity boosters", toolCount: 3 },
  { id: "search-research", name: "Search & Research AI", icon: "🔍", description: "AI research and search engines", toolCount: 3 },
  { id: "automation", name: "Automation & AI Agents", icon: "🛠️", description: "Autonomous AI agents and automation", toolCount: 3 },
  { id: "game-dev", name: "Game Development AI", icon: "🎮", description: "AI tools for game creation", toolCount: 2 },
];

export const aiTools: AITool[] = [
  // Website Builders
  { id: "lovable", name: "Lovable AI", category: "website-builders", accuracy: 94, price: "$20/mo", priceValue: 20, speed: "Fast", tags: ["No-code", "Full-stack", "React"], description: "Build full-stack web apps with AI. Just describe what you want and Lovable creates it instantly.", features: ["Full-stack React apps", "Database integration", "One-click deploy", "Real-time preview"], website: "https://lovable.dev", badge: "Recommended" },
  { id: "bolt", name: "Bolt AI", category: "website-builders", accuracy: 89, price: "$25/mo", priceValue: 25, speed: "Very Fast", tags: ["Full-stack", "AI-first"], description: "Prompt-based full-stack web development with instant previews.", features: ["Instant prototyping", "Multi-file editing", "NPM support", "Deploy anywhere"], website: "https://bolt.new", badge: "Trending" },
  { id: "durable", name: "Durable AI", category: "website-builders", accuracy: 82, price: "$15/mo", priceValue: 15, speed: "Fast", tags: ["Small business", "Templates"], description: "Generate a business website in 30 seconds with AI.", features: ["30s website generation", "CRM built-in", "Invoicing", "SEO tools"], website: "https://durable.co", badge: "Best Value" },
  { id: "framer-ai", name: "Framer AI", category: "website-builders", accuracy: 87, price: "$22/mo", priceValue: 22, speed: "Medium", tags: ["Design-first", "Animations"], description: "Design-centric website builder with powerful AI features.", features: ["Visual editor", "Animation support", "CMS", "Custom code"], website: "https://framer.com" },

  // Code Assistants
  { id: "github-copilot", name: "GitHub Copilot", category: "code-assistants", accuracy: 92, price: "$19/mo", priceValue: 19, speed: "Real-time", tags: ["IDE", "Autocomplete", "Multi-lang"], description: "AI pair programmer that suggests code in real-time.", features: ["Code suggestions", "Multi-language", "IDE integration", "Chat mode"], website: "https://github.com/features/copilot", badge: "Popular" },
  { id: "cursor", name: "Cursor AI", category: "code-assistants", accuracy: 91, price: "$20/mo", priceValue: 20, speed: "Real-time", tags: ["IDE", "Full editor"], description: "AI-first code editor built for pair programming with AI.", features: ["Full IDE", "Codebase awareness", "Multi-file editing", "Terminal AI"], website: "https://cursor.com", badge: "Trending" },
  { id: "tabnine", name: "Tabnine", category: "code-assistants", accuracy: 85, price: "$12/mo", priceValue: 12, speed: "Real-time", tags: ["Privacy", "On-prem"], description: "AI code assistant with privacy-first approach.", features: ["Private deployment", "Team learning", "Code completion", "Security-focused"], website: "https://tabnine.com", badge: "Best Value" },
  { id: "codeium", name: "Codeium", category: "code-assistants", accuracy: 88, price: "Free", priceValue: 0, speed: "Real-time", tags: ["Free", "Multi-IDE"], description: "Free AI code completion for 70+ languages.", features: ["Free tier", "70+ languages", "IDE extensions", "Chat"], website: "https://codeium.com" },

  // Chatbots
  { id: "chatgpt", name: "ChatGPT", category: "chatbots", accuracy: 95, price: "$20/mo", priceValue: 20, speed: "Fast", tags: ["GPT-4", "General", "Plugins"], description: "The most popular AI chatbot powered by GPT-4.", features: ["GPT-4 Turbo", "DALL-E", "Code interpreter", "Custom GPTs"], website: "https://chat.openai.com", badge: "Popular" },
  { id: "gemini", name: "Gemini", category: "chatbots", accuracy: 93, price: "$20/mo", priceValue: 20, speed: "Fast", tags: ["Google", "Multimodal"], description: "Google's multimodal AI assistant.", features: ["Multimodal", "Google integration", "Long context", "Reasoning"], website: "https://gemini.google.com", badge: "Trending" },
  { id: "claude", name: "Claude", category: "chatbots", accuracy: 94, price: "$20/mo", priceValue: 20, speed: "Fast", tags: ["Anthropic", "Safe", "Long context"], description: "Anthropic's helpful, harmless, and honest AI assistant.", features: ["200K context", "Artifacts", "Analysis", "Coding"], website: "https://claude.ai", badge: "Recommended" },
  { id: "perplexity", name: "Perplexity AI", category: "chatbots", accuracy: 90, price: "$20/mo", priceValue: 20, speed: "Fast", tags: ["Search", "Citations"], description: "AI-powered answer engine with real-time web search.", features: ["Web search", "Citations", "Focus modes", "Collections"], website: "https://perplexity.ai" },

  // Image Gen
  { id: "midjourney", name: "Midjourney", category: "image-gen", accuracy: 96, price: "$10/mo", priceValue: 10, speed: "Medium", tags: ["Art", "Photorealistic"], description: "Industry-leading AI image generation.", features: ["V6 model", "Style control", "Upscaling", "Variations"], website: "https://midjourney.com", badge: "Popular" },
  { id: "dalle", name: "DALL-E 3", category: "image-gen", accuracy: 91, price: "$20/mo", priceValue: 20, speed: "Fast", tags: ["OpenAI", "Text-to-image"], description: "OpenAI's latest image generation model.", features: ["Text rendering", "ChatGPT integration", "Editing", "Variations"], website: "https://openai.com/dall-e-3" },
  { id: "stable-diffusion", name: "Stable Diffusion", category: "image-gen", accuracy: 88, price: "Free", priceValue: 0, speed: "Variable", tags: ["Open-source", "Custom"], description: "Open-source image generation model.", features: ["Open-source", "ControlNet", "Custom training", "Local run"], website: "https://stability.ai", badge: "Best Value" },

  // Video Gen
  { id: "runway", name: "Runway ML", category: "video-gen", accuracy: 90, price: "$15/mo", priceValue: 15, speed: "Medium", tags: ["Video", "Gen-3"], description: "AI creative tools for video generation.", features: ["Gen-3 Alpha", "Text-to-video", "Image-to-video", "Motion brush"], website: "https://runwayml.com", badge: "Trending" },
  { id: "pika", name: "Pika", category: "video-gen", accuracy: 85, price: "$10/mo", priceValue: 10, speed: "Medium", tags: ["Video", "Simple"], description: "AI video creation made simple.", features: ["Text-to-video", "Image animation", "Style transfer", "Lip sync"], website: "https://pika.art" },
  { id: "synthesia", name: "Synthesia", category: "video-gen", accuracy: 88, price: "$30/mo", priceValue: 30, speed: "Fast", tags: ["Avatars", "Enterprise"], description: "AI video generation with digital avatars.", features: ["AI avatars", "120+ languages", "Templates", "Brand kit"], website: "https://synthesia.io" },

  // Design
  { id: "figma-ai", name: "Figma AI", category: "design-ui", accuracy: 87, price: "$15/mo", priceValue: 15, speed: "Real-time", tags: ["Design", "Prototyping"], description: "AI-powered design features in Figma.", features: ["Auto layout", "AI suggestions", "Prototyping", "Dev mode"], website: "https://figma.com", badge: "Popular" },
  { id: "uizard", name: "Uizard", category: "design-ui", accuracy: 83, price: "$12/mo", priceValue: 12, speed: "Fast", tags: ["Wireframe", "Mockup"], description: "AI-powered UI design tool for rapid prototyping.", features: ["Sketch to design", "Templates", "Collaboration", "Export"], website: "https://uizard.io" },
  { id: "galileo", name: "Galileo AI", category: "design-ui", accuracy: 86, price: "$20/mo", priceValue: 20, speed: "Fast", tags: ["UI generation", "Copilot"], description: "AI copilot for interface design.", features: ["Text-to-UI", "Editable output", "Component library", "Export"], website: "https://usegalileo.ai", badge: "Trending" },

  // Writing
  { id: "jasper", name: "Jasper AI", category: "writing-content", accuracy: 89, price: "$49/mo", priceValue: 49, speed: "Fast", tags: ["Marketing", "Brand voice"], description: "AI content platform for marketing teams.", features: ["Brand voice", "Templates", "Campaign builder", "SEO"], website: "https://jasper.ai", badge: "Popular" },
  { id: "copy-ai", name: "Copy.ai", category: "writing-content", accuracy: 86, price: "$36/mo", priceValue: 36, speed: "Fast", tags: ["Copywriting", "Sales"], description: "AI-powered copywriting for sales and marketing.", features: ["Sales copy", "Blog posts", "Social media", "Workflows"], website: "https://copy.ai" },
  { id: "grammarly", name: "Grammarly", category: "writing-content", accuracy: 92, price: "$12/mo", priceValue: 12, speed: "Real-time", tags: ["Grammar", "Tone"], description: "AI writing assistant for grammar and clarity.", features: ["Grammar check", "Tone detection", "Plagiarism", "Style guide"], website: "https://grammarly.com", badge: "Recommended" },

  // Voice
  { id: "elevenlabs", name: "ElevenLabs", category: "voice-audio", accuracy: 95, price: "$5/mo", priceValue: 5, speed: "Real-time", tags: ["Voice clone", "TTS"], description: "AI voice generation and cloning platform.", features: ["Voice cloning", "29 languages", "API", "Dubbing"], website: "https://elevenlabs.io", badge: "Popular" },
  { id: "murf", name: "Murf AI", category: "voice-audio", accuracy: 87, price: "$26/mo", priceValue: 26, speed: "Fast", tags: ["Voiceover", "Enterprise"], description: "AI voiceover generator for professionals.", features: ["120+ voices", "Studio editor", "API", "Enterprise"], website: "https://murf.ai" },
  { id: "descript", name: "Descript", category: "voice-audio", accuracy: 89, price: "$24/mo", priceValue: 24, speed: "Fast", tags: ["Podcast", "Editing"], description: "AI-powered audio and video editing.", features: ["Transcription", "Overdub", "Screen recording", "Filler word removal"], website: "https://descript.com", badge: "Trending" },

  // Data Analysis
  { id: "tableau-ai", name: "Tableau AI", category: "data-analysis", accuracy: 91, price: "$75/mo", priceValue: 75, speed: "Fast", tags: ["BI", "Visualization"], description: "AI-powered data visualization and analytics.", features: ["Auto insights", "NL queries", "Dashboards", "Predictive"], website: "https://tableau.com", badge: "Popular" },
  { id: "julius", name: "Julius AI", category: "data-analysis", accuracy: 88, price: "$20/mo", priceValue: 20, speed: "Fast", tags: ["Data chat", "Charts"], description: "Chat with your data using AI.", features: ["CSV upload", "Chart generation", "Analysis", "Export"], website: "https://julius.ai" },
  { id: "obviously-ai", name: "Obviously AI", category: "data-analysis", accuracy: 85, price: "$75/mo", priceValue: 75, speed: "Medium", tags: ["No-code ML", "Predictions"], description: "No-code machine learning predictions.", features: ["Predictive models", "No-code", "Integrations", "Reports"], website: "https://obviously.ai" },

  // Education
  { id: "khan-ai", name: "Khanmigo", category: "education", accuracy: 90, price: "$9/mo", priceValue: 9, speed: "Real-time", tags: ["Tutoring", "K-12"], description: "AI tutor by Khan Academy.", features: ["Personalized tutoring", "Math help", "Writing coach", "Test prep"], website: "https://khanacademy.org", badge: "Recommended" },
  { id: "duolingo-ai", name: "Duolingo Max", category: "education", accuracy: 88, price: "$14/mo", priceValue: 14, speed: "Real-time", tags: ["Languages", "GPT-4"], description: "AI-powered language learning.", features: ["Role play", "Explain mistakes", "40+ languages", "Gamification"], website: "https://duolingo.com", badge: "Popular" },
  { id: "quizlet-ai", name: "Quizlet AI", category: "education", accuracy: 85, price: "$8/mo", priceValue: 8, speed: "Fast", tags: ["Flashcards", "Study"], description: "AI-enhanced study tools and flashcards.", features: ["AI flashcards", "Practice tests", "Study paths", "Memory AI"], website: "https://quizlet.com" },

  // Marketing
  { id: "hubspot-ai", name: "HubSpot AI", category: "marketing", accuracy: 89, price: "$50/mo", priceValue: 50, speed: "Fast", tags: ["CRM", "Automation"], description: "AI-powered marketing automation.", features: ["Email AI", "Content assistant", "Predictive leads", "Chatbots"], website: "https://hubspot.com", badge: "Popular" },
  { id: "surfer-seo", name: "Surfer SEO", category: "marketing", accuracy: 87, price: "$89/mo", priceValue: 89, speed: "Fast", tags: ["SEO", "Content"], description: "AI-powered SEO content optimization.", features: ["Content editor", "SERP analyzer", "Keyword research", "Audit"], website: "https://surferseo.com" },
  { id: "adcreative", name: "AdCreative.ai", category: "marketing", accuracy: 84, price: "$29/mo", priceValue: 29, speed: "Fast", tags: ["Ads", "Creative"], description: "AI-powered ad creative generation.", features: ["Ad generation", "Performance prediction", "Brand kit", "A/B testing"], website: "https://adcreative.ai", badge: "Trending" },

  // Productivity
  { id: "notion-ai", name: "Notion AI", category: "productivity", accuracy: 88, price: "$10/mo", priceValue: 10, speed: "Fast", tags: ["Workspace", "Writing"], description: "AI assistant integrated into Notion.", features: ["Summarize", "Action items", "Translate", "Q&A"], website: "https://notion.so", badge: "Popular" },
  { id: "otter-ai", name: "Otter.ai", category: "productivity", accuracy: 90, price: "$17/mo", priceValue: 17, speed: "Real-time", tags: ["Transcription", "Meetings"], description: "AI meeting transcription and notes.", features: ["Live transcription", "Meeting summary", "Action items", "Search"], website: "https://otter.ai", badge: "Trending" },
  { id: "reclaim", name: "Reclaim AI", category: "productivity", accuracy: 86, price: "$10/mo", priceValue: 10, speed: "Real-time", tags: ["Calendar", "Scheduling"], description: "AI-powered calendar management.", features: ["Smart scheduling", "Habits", "Task planner", "Analytics"], website: "https://reclaim.ai" },

  // Search & Research
  { id: "elicit", name: "Elicit", category: "search-research", accuracy: 89, price: "$10/mo", priceValue: 10, speed: "Medium", tags: ["Research", "Papers"], description: "AI research assistant for academic papers.", features: ["Paper search", "Summarization", "Data extraction", "Synthesis"], website: "https://elicit.com", badge: "Recommended" },
  { id: "consensus", name: "Consensus", category: "search-research", accuracy: 87, price: "$10/mo", priceValue: 10, speed: "Fast", tags: ["Science", "Evidence"], description: "AI-powered search for scientific evidence.", features: ["Evidence-based", "Paper summaries", "Consensus meter", "Citations"], website: "https://consensus.app" },
  { id: "you-ai", name: "You.com", category: "search-research", accuracy: 85, price: "Free", priceValue: 0, speed: "Fast", tags: ["Search", "Privacy"], description: "AI-powered privacy-focused search engine.", features: ["AI chat", "Code assistant", "Image gen", "Privacy-first"], website: "https://you.com" },

  // Automation
  { id: "zapier-ai", name: "Zapier AI", category: "automation", accuracy: 88, price: "$20/mo", priceValue: 20, speed: "Fast", tags: ["Automation", "No-code"], description: "AI-powered workflow automation.", features: ["6000+ apps", "AI actions", "Chatbots", "Tables"], website: "https://zapier.com", badge: "Popular" },
  { id: "make-ai", name: "Make (Integromat)", category: "automation", accuracy: 86, price: "$9/mo", priceValue: 9, speed: "Fast", tags: ["Visual", "Workflows"], description: "Visual automation platform with AI features.", features: ["Visual builder", "1500+ apps", "AI modules", "Scheduling"], website: "https://make.com", badge: "Best Value" },
  { id: "autogpt", name: "AutoGPT", category: "automation", accuracy: 80, price: "Free", priceValue: 0, speed: "Slow", tags: ["Autonomous", "Open-source"], description: "Autonomous AI agent framework.", features: ["Autonomous tasks", "Web browsing", "Code execution", "Memory"], website: "https://autogpt.net" },

  // Game Dev
  { id: "scenario", name: "Scenario", category: "game-dev", accuracy: 87, price: "$29/mo", priceValue: 29, speed: "Medium", tags: ["Game art", "Assets"], description: "AI-powered game asset generation.", features: ["Character design", "Environment art", "Style training", "Batch gen"], website: "https://scenario.com", badge: "Popular" },
  { id: "ludo-ai", name: "Ludo AI", category: "game-dev", accuracy: 82, price: "$15/mo", priceValue: 15, speed: "Fast", tags: ["Game design", "Ideation"], description: "AI-powered game design and ideation.", features: ["Game concepts", "Trend analysis", "Market research", "Image gen"], website: "https://ludo.ai" },
];

export const getToolsByCategory = (categoryId: string) =>
  aiTools.filter((t) => t.category === categoryId).sort((a, b) => b.accuracy - a.accuracy);

export const getTrendingTools = () =>
  aiTools.filter((t) => t.badge).slice(0, 5);

export const getCategoryById = (id: string) =>
  categories.find((c) => c.id === id);
