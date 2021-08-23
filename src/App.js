import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //state to make the app dark and light mode

  const [alert, setAlert] = useState(null);

  function showAlert(msg, type){
    setAlert({
      msg: msg,
      type: type
    })
  }
  
  setTimeout(() => {
    setAlert(null);
  }, 1500);



const toggleMode = () => {
  if(mode==='light')
  {
    setMode('dark');
    showAlert("Dark mode has been enabled !", "Success");
    document.getElementById('modeText').style.color='white';
    document.getElementById('modeText').innerHTML='Disable Dark Theme';
    document.body.style.backgroundColor='#161616';
    document.body.style.color='white';
   
  }
  else
  {
    setMode('light');
    showAlert("Light mode has been enabled !", "Success");
    document.getElementById('modeText').style.color='black';
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    document.getElementById('modeText').innerHTML='Enable Dark Theme';
    
   
  }
}

  return (
<>
<Router>
<Navbar title = "Textify" mode={mode} toggleBtn={toggleMode}/>
<Alert alert = {alert}/>
<Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Textform heading = "" showAlertinTextForm = {showAlert} TextformMode={mode}/>
          </Route>
</Switch>
</Router>


</>
  );
}






export default App;
