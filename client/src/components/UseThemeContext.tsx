import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const UseThemeContext = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <>
        {theme === "white" ? <p>Its light theme</p> : <p>Its dark theme</p> }
        <button onClick={toggleTheme}>Toggle</button>
        </>
    )
}