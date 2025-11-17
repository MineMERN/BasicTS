// import { Greet } from "./components/Greet";
// import { UserCard } from "./components/UserCard";
// import { ProductCard } from "./components/ProductCard";
// import { ClickButton } from "./components/ClickButton";
// import { CounterButton } from "./components/CounterButton";
// import { EventHandler } from "./components/EventHandler";
// import { Timer } from "./components/Timer";
// import { DataFetch } from "./components/DataFetch";
// import { DisplayData } from "./components/DisplayData";
// import { LoginStatus } from "./components/LoginStatus";
// import { Parent } from "./components/Parent";
// import { UseThemeContext } from "./components/UseThemeContext";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className={`h-screen ${theme === "white" ? "bg-white text-black" : "bg-black text-white"}`}>
    {/* <Greet /> */}
    {/* <UserCard name="Shivam" age={17} /> */}
    {/* <ProductCard title="Anna" price={500} inStock={true} /> */}
    {/* <ClickButton /> */}
    {/* <CounterButton /> */}
    {/* <EventHandler /> */}
    {/* <Timer /> */}
    {/* <DataFetch /> */}
    {/* <DisplayData /> */}
    {/* <LoginStatus isLoggedIn={false} /> */}
    {/* <Parent /> */}
    {/* <UseThemeContext /> */}
    {theme === "white" ? <p>Its light theme</p> : <p>Its dark theme</p> }
    <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

export default App;