"use client";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import SplashScreen from "@/components/ui/splash-screen";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };
  
  // Disable body scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <SplashScreen percent={loading} />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

// Extracted progress helper from the reference repository
export const useProgress = (setLoading: (value: number) => void) => {
  useEffect(() => {
    let percent = 0;
    
    // Initial fast loading up to 50%
    const initialInterval = setInterval(() => {
      if (percent <= 50) {
        percent += Math.round(Math.random() * 5);
        setLoading(Math.min(percent, 50));
      } else {
        clearInterval(initialInterval);
        
        // Slower loading from 50% to 91%
        const slowInterval = setInterval(() => {
          percent += Math.round(Math.random());
          setLoading(percent);
          if (percent > 91) {
            clearInterval(slowInterval);
          }
        }, 200); // Modified from 2000 to be faster for better UX
      }
    }, 100);

    // After 2.5 seconds, force load to 100% to ensure we never get stuck
    const forceCompleteTimeout = setTimeout(() => {
      clearInterval(initialInterval);
      
      const finishInterval = setInterval(() => {
        if (percent < 100) {
          percent += 2;
          setLoading(Math.min(percent, 100));
        } else {
          clearInterval(finishInterval);
        }
      }, 20);
    }, 2500);

    return () => {
      clearInterval(initialInterval);
      clearTimeout(forceCompleteTimeout);
    };
  }, [setLoading]);
};
