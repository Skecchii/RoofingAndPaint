import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import ThemeContext from './ThemeContext';

const lightTheme = {
    background: '#f9f9f9',
    text: '#333333',
};

const darkTheme = {
    background: '#333333',
    text: '#f9f9f9',
};

const Theme = ({ children }) => {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default Theme;
