import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildA from "./components/ChildA";
// const UserContext = createContext();
const ThemeContext=createContext();
function App() {
  // const [user, setUser] = useState({ name: "Eshika" });
     const [theme, setTheme] = useState('light');
  return (
    <>
      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */}
      <ThemeContext.Provider value={{theme, setTheme}}>
        '<div id='container' style={{backgroundColor: theme=== 'light'? 'beige' : 'black' }}>
          <ChildA/>
        </div>
        </ThemeContext.Provider>
    </>
  );
}

export default App;
// export { UserContext };
export {ThemeContext};