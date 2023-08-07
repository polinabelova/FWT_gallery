
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import './App.css';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState(null);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="App" id={theme}>
        <Header theme={setTheme} />
        <Gallery theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
