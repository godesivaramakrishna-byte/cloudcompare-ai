import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Mail, Lock, Eye, EyeOff, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import loginBg1 from "@/assets/login-bg-1.jpg";
import loginBg2 from "@/assets/login-bg-2.jpg";
import loginBg3 from "@/assets/login-bg-3.jpg";
import loginBg4 from "@/assets/login-bg-4.jpg";

const slides = [
  { image: loginBg1, quote: '"Budget-smart. Accuracy-first.\nCloud-agnostic."' },
  { image: loginBg2, quote: '"Compare 200+ AI models\nacross every cloud provider."' },
  { image: loginBg3, quote: '"Find the perfect AI service —\nwithin your budget."' },
  { image: loginBg4, quote: '"Intelligent recommendations\npowered by real benchmarks."' },
];

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Rotating Images */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={slides[currentSlide].image}
              alt="AI visualization"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--glow-purple))",
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
          <div className="flex items-center gap-2 mb-6">
            <Cloud className="h-5 w-5 text-primary" strokeWidth={1.5} />
            <span className="text-sm font-bold text-foreground">CloudCompare AI</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              className="text-2xl font-bold text-foreground whitespace-pre-line leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {slides[currentSlide].quote}
            </motion.p>
          </AnimatePresence>

          {/* Info card */}
          <motion.div
            className="surface-card p-4 w-fit backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <img
                src={slides[currentSlide].image}
                alt=""
                className="w-24 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="text-xs font-mono text-primary">AI service match found</p>
                <p className="text-xs text-muted-foreground">Budget: $50/mo ·</p>
                <p className="text-xs text-muted-foreground">Accuracy: 95%+</p>
              </div>
            </div>
          </motion.div>

          {/* Cloud provider tags */}
          <div className="flex gap-2 mt-6">
            {["AWS", "Azure", "GCP", "Oracle"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-border text-xs text-foreground bg-card/50 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "w-8 bg-primary" : "w-3 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to access your AI service dashboard
            </p>
          </div>

          <div className="surface-card p-8">
            {/* Tab toggle */}
            <div className="flex border border-border rounded-lg overflow-hidden mb-6">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  !isSignUp ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Log In
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  isSignUp ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="space-y-4">
              {isSignUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </motion.div>
              )}

              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full bg-secondary border border-border rounded-lg pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded border-border bg-secondary" />
                    Remember me
                  </label>
                  <button className="text-xs text-primary hover:underline">Forgot password?</button>
                </div>
              )}

              <Link
                to="/dashboard"
                className="w-full bg-gradient-to-r from-primary to-glow-purple text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2"
              >
                {isSignUp ? "Create Account" : "Sign In"} →
              </Link>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">or continue with</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border text-sm text-foreground hover:bg-secondary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border text-sm text-foreground hover:bg-secondary transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-foreground font-semibold hover:underline"
            >
              {isSignUp ? "Sign in" : "Sign up free"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
