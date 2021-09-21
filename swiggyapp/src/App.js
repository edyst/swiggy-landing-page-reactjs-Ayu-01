import "./App.css";

import Main from "./Components/Main/Main";
import Features from "./Components/Features/Features";
import Download from "./Components/Download/Download";


import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Main />
      <Features />
      <Download />
      
      <Footer />
    </div>
  );
}

export default App;