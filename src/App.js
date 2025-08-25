import "./App.css";
import Navbar from "./components/Navbar.js";
import FormSnippet from "./components/FormSnippet.js";
import { useState } from "react";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(() =>{
      setAlert(null);
    },1500);
  }

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
    <Router>
      <Navbar title="Text Help" about="About us" mode={mode} toggleMode={toggle}/>
      <Alert alert={alert}/>

      <Routes>
          <Route exact path="/" element={<FormSnippet mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About/>}/>
          
        </Routes>
      
    </Router>
  );
}

export default App;
