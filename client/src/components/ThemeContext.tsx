import { createContext } from "react";

interface ThemeContextType {
    theme: 'white' | 'black';
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "white",
    toggleTheme: () => {
        console.log(`Theme has been change`);
    }
})