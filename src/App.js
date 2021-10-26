
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React,{ useState } from 'react'
import AboutUs from './Components/About/AboutUs';
import Navbar from './Components/NavBar/Navbar'
import TextForm from './Components/TextForm/TextForm';
import Alerts from './Components/Alerts/Alerts';
function App() {
  const [Mode, setMode] = useState("light");
  const [alertData, setalertData] = useState(null)
  const showAlert = (message, type)=>{
    setalertData({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setalertData(null)
    }, 2000)
  }
  const toggleMode = ()=>{
    if(Mode === "light")
    {
      setMode('dark');
      document.body.style.background="#212529";
      showAlert("The dark mode is enable", "success");
    }else{
      setMode('light');
      document.body.style.background="white";
      showAlert("The light mode is enable", "success");
    }
  }
  return (
    <Router>
      <div>
      <Navbar appMode={Mode} toggleMode={toggleMode}/>
      <Alerts alert={alertData} />
        <Switch>
          <Route exact path="/">
            <TextForm appMode={Mode}/>
          </Route>
          <Route exact path="/about">
            <AboutUs/>
          </Route>
        </Switch>
      </div>
     
    </Router>
  
  );
}

export default App;
