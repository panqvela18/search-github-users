import { createContext, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserInfo from "./components/UserInfo";

export const ThemeContext = createContext(null);

function App() {
  const [userData, setUserData] = useState(null);
  const [userFound, setUserFound] = useState(false);
  const [themes, setThemes] = useState("dark");

  const fetchUser = async (user) => {
    const response = await fetch(`https://api.github.com/users/${user}`);

    if (response.status == "200") {
      const data = await response.json();
      setUserData(data);
      setUserFound(true);
    } else {
      setUserFound(false);
    }
  };

  const toggleTheme = (curr) => {
    setThemes((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ themes, toggleTheme }}>
      <div className="app" id={themes}>
        <Header />
        <SearchBar fetchUser={fetchUser} userFound={userFound} />
        <UserInfo userData={userData} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
