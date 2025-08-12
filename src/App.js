import "./App.css";
import Navbar from "./components/Navbar.js";
import FormSnippet from "./components/FormSnippet.js";
import { useState } from "react";

function App() {
  const[mode, setMode] = useState('light');

  const toggle = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0d254f';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggle}/>


      <FormSnippet mode={mode}/>
    </>
  );
}

export default App;
