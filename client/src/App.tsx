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
// import { useContext } from "react";
// import { ThemeContext } from "./components/ThemeContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  // const {theme, toggleTheme} = useContext(ThemeContext)
  const isAuth = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Route Example */}
          <Route
            path="/"
            element={
              <PublicRoute isAuth={isAuth}>
                <Home />
              </PublicRoute>
            }
          />

          {/* Login should be public */}
          <Route
            path="/login"
            element={
              <PublicRoute isAuth={isAuth}>
                <Login />
              </PublicRoute>
            }
          />

          {/* Private Route Example */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute isAuth={isAuth}>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* Dynamic Route Example → /user/12 or /user/345 */}
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
      {/* <div className={`h-screen ${theme === "white" ? "bg-white text-black" : "bg-black text-white"}`}> */}
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
      {/* {theme === "white" ? <p>Its light theme</p> : <p>Its dark theme</p> } */}
      {/* <button onClick={toggleTheme}>Toggle</button> */}
      {/* </div> */}
    </>
  );
}

export default App;
