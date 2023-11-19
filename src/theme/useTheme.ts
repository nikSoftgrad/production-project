import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme} from './ThemeContext';
import {useContext} from 'react';

export interface UseThemesResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemesResult {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme: theme,
    toggleTheme: toggleTheme
  }
}
