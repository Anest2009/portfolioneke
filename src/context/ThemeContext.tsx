import React, { createContext, useContext, useState, useEffect } from 'react';
import { theme } from '../styles/theme';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  currentTheme: typeof theme.light | typeof theme.dark;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  currentTheme: theme.light,
});

const themeStorageKey = 'portfolio-theme-v2';

const getInitialDarkMode = () => {
  if (typeof window === 'undefined') {
    return true;
  }

  try {
    return window.localStorage.getItem(themeStorageKey) !== 'light';
  } catch {
    return true;
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);
  const currentTheme = isDarkMode ? theme.dark : theme.light;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';

    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    themeColor?.setAttribute('content', isDarkMode ? '#0f0e0e' : '#FFFFFF');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((currentMode) => {
      const nextMode = !currentMode;
      try {
        window.localStorage.setItem(themeStorageKey, nextMode ? 'dark' : 'light');
      } catch {
        // Theme switching still works when browser storage is unavailable.
      }
      return nextMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
