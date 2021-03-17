import React, { useState } from "react";

import './App.css';
import { Header } from "./components/Header";

const initialLang: string = "en";

const App: React.FC = () => {

  const [language, setLanguage] = useState(initialLang);

  const switchLanguage: switchLanguage = (e) => {
    setLanguage(e.target.value);
  };



  return (
    <div className="App">
      <React.Fragment>
        <Header switchLanguage={switchLanguage} />
      </React.Fragment>
    </div>
  );
}

export default App;