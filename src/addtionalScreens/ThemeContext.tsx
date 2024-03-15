import React, {createContext, useContext, useState} from 'react';
import {useColorScheme} from 'react-native';

type ThemeContextType = {
  currentTheme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC = ({children}) => {
  const theme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
  };

  const value = {
    currentTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
