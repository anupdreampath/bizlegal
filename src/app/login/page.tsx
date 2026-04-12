"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import DashboardPreview from "@/components/DashboardPreview";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const success = login(email, password);
    if (success) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password. Try the demo credentials below.");
    }
  };

  const fillDemo = () => {
    setEmail("demo@bizlegal.com");
    setPassword("demo1234");
    setError("");
  };

  return (
    <div className="min-h-screen bg-ivory-100 flex">
      {/* Left — branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-green-800 relative flex-col justify-between p-12">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative">
          <Link href="/" className="block mb-16">
            <span className="font-serif text-[1.5rem] text-white">
              Biz Legal
            </span>
          </Link>

          <h1 className="font-serif text-[2.5rem] leading-[1.1] text-white mb-5">
            Manage your LLC with confidence
          </h1>
          <p className="font-sans text-[1rem] text-white/60 leading-[1.6] max-w-md">
            Access your documents, track filings, and stay on top of compliance
            — all from your secure client portal.
          </p>
        </div>

        <div className="relative">
          <DashboardPreview />
        </div>

        <div className="relative flex items-center gap-8 pt-6 border-t border-white/10">
          {["SOC 2 Compliant", "256-bit Encryption", "CA Bar Approved"].map(
            (badge) => (
              <span
                key={badge}
                className="text-[0.75rem] font-sans font-medium text-white/30"
              >
                {badge}
              </span>
            )
          )}
        </div>
      </div>

      {/* Right — login form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-10 text-center">
            <Link href="/" className="inline-block">
              <span className="font-serif text-[1.5rem] text-black">
                Biz Legal
              </span>
            </Link>
          </div>

          <h2 className="font-serif text-[2rem] text-black mb-2">
            Welcome back
          </h2>
          <p className="font-sans text-[0.95rem] text-gray-600 mb-8">
            Sign in to access your LLC dashboard
          </p>

          {/* Error message */}
          {error && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-[0.7rem] mb-6">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="font-sans text-[0.85rem] text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block font-sans font-bold text-[0.85rem] text-black mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.9rem] text-black placeholder:text-gray-400 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="font-sans font-bold text-[0.85rem] text-black"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="font-sans text-[0.8rem] font-medium text-green-800 hover:opacity-60 transition-opacity cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full px-4 py-3 pr-12 bg-white border border-gray-200 rounded-[0.7rem] font-sans text-[0.9rem] text-black placeholder:text-gray-400 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black cursor-pointer transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 font-sans font-bold text-[0.95rem] text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors duration-200 cursor-pointer"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Demo login */}
          <div className="mt-6 p-4 bg-ivory-200 rounded-[0.7rem]">
            <div className="flex items-center justify-between mb-2">
              <p className="font-sans text-[0.8rem] font-bold text-black">Demo Account</p>
              <button
                onClick={fillDemo}
                className="font-sans text-[0.75rem] font-bold text-green-800 hover:opacity-60 transition-opacity cursor-pointer"
              >
                Auto-fill
              </button>
            </div>
            <div className="space-y-1">
              <p className="font-sans text-[0.8rem] text-gray-600">
                Email: <span className="font-mono text-[0.75rem] text-black bg-white px-1.5 py-0.5 rounded">demo@bizlegal.com</span>
              </p>
              <p className="font-sans text-[0.8rem] text-gray-600">
                Password: <span className="font-mono text-[0.75rem] text-black bg-white px-1.5 py-0.5 rounded">demo1234</span>
              </p>
            </div>
          </div>

          <p className="text-center font-sans text-[0.9rem] text-gray-600 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-bold text-green-800 hover:opacity-60 transition-opacity cursor-pointer"
            >
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
