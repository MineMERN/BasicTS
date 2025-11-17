import React, {useState, type ReactNode} from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProp {
    children: ReactNode,
}

export const ThemeProvider: React.FC<ThemeProviderProp> = ({children}) => {
    const [theme, setTheme] = useState<"white" | "black">("white")
    const toggleTheme = () => setTheme(prev => prev === "white" ? "black" : "white")
    const providerValue = {
        theme,
        toggleTheme,
    }
    return(
        <ThemeContext.Provider value={providerValue}> 
            {children}
        </ThemeContext.Provider>
    )
}