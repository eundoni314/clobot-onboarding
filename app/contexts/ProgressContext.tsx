'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type StepId = 'company' | 'business' | 'culture' | 'systems';

interface ProgressContextType {
  completedSteps: Set<StepId>;
  markComplete: (step: StepId) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType>({
  completedSteps: new Set(),
  markComplete: () => {},
  resetProgress: () => {},
});

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedSteps, setCompletedSteps] = useState<Set<StepId>>(new Set());

  useEffect(() => {
    const saved = localStorage.getItem('onboarding-progress');
    if (saved) {
      try {
        setCompletedSteps(new Set(JSON.parse(saved) as StepId[]));
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  const markComplete = useCallback((step: StepId) => {
    setCompletedSteps(prev => {
      if (prev.has(step)) return prev;
      const next = new Set(prev);
      next.add(step);
      localStorage.setItem('onboarding-progress', JSON.stringify([...next]));
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    setCompletedSteps(new Set());
    localStorage.removeItem('onboarding-progress');
  }, []);

  return (
    <ProgressContext.Provider value={{ completedSteps, markComplete, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);
