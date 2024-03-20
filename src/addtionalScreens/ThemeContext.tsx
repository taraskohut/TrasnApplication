import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {useColorScheme} from 'react-native';

type ThemeContextType = {
  currentTheme: string;
  toggleTheme: () => void;
  fetchData: () => void;
  phrase: string;
  setPhrase: () => void;
  setInputPhrase: (p: (prevState) => any) => void;
  createPhrase: () => void;
  inputPhrase: string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const myUrl = 'http://localhost:3000/phrases';

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
  const [phrase, setPhrase] = useState(null);
  const [inputPhrase, setInputPhrase] = useState({
    engPhrase: '',
    itPhrase: '',
  });

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
  };
  const fetchData = async () => {
    try {
      axios.get(myUrl).then(response => {
        setPhrase(response.data);
        console.log('response', response.data);
      });
    } catch (errorka) {
      console.log(errorka);
    }
  };
  const createPhrase = async () => {
    try {
      console.log('input', inputPhrase);
      axios.post(myUrl, {
        engPhrase: inputPhrase.engPhrase,
        itPhrase: inputPhrase.itPhrase,
      });
      setInputPhrase({engPhrase: '', itPhrase: ''});
    } catch (errorka) {
      console.log(errorka);
    }
  };
  console.log('123', inputPhrase);
  useEffect(() => {
    fetchData();
    createPhrase();
  }, []);
  console.log('lalala', currentTheme);
  const value = {
    currentTheme,
    toggleTheme,
    phrase,
    setPhrase,
    fetchData,
    setInputPhrase,
    createPhrase,
    inputPhrase,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
