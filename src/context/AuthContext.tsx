"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  email: string;
  name: string;
  initials: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isLoading: boolean;
};

const DEMO_EMAIL = "demo@bizlegal.com";
const DEMO_PASSWORD = "demo1234";
const DEMO_USER: User = {
  email: DEMO_EMAIL,
  name: "John Doe",
  initials: "JD",
};

const STORAGE_KEY = "bizlegal_auth";

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Restore session on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setUser(DEMO_USER);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_USER));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
