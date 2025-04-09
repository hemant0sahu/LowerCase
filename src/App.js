
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,


} from 'react-router-dom'


function App() {
  const [alert, setAlert] = useState('value');

  const [mode, setMode] = useState('dark');

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const removeBodyclasses = () => {

    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const togglemode = (cls) => {
    if (mode === 'light') {
      removeBodyclasses()

      document.body.classList.add('bg-' + cls)
      setMode('dark')
      document.body.style.backgroundColor = '#2a2a8c';
      ShowAlert("dark mode is enabled", "success");
      document.title = ("Textutiles -Dark mode")


    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      ShowAlert("light mode is enabled", "success");
      document.title = ("Textutiles -Light mode")


    }
  }

  return (
    <>
      {/* <Navbar title="Hemant Sahu" value="ABout us" mode={mode}/> */}
      <Router>
        <Navbar title="Hemant Sahu" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/About"  >
            <About />
          </Route>
          <Route exact path="/" >
            <Textform ShowAlert={ShowAlert} heading="Enter Your text" />
          </Route>
        </Switch>

      </Router>
    </>

  );
}


export default App;
