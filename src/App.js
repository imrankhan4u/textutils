import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from 'react';
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [showAlert, setShowAlert] = useState(null);

  const [lightmode, setLightmode] = useState(true);

  const alertHandler = (msg, type) => {
    setShowAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setShowAlert(null);
    }, 1000);
  }

  const lightPallette = {
    darkgreen: '#386641',
    lightgreen: '#6A994E',
    lightestgreen: '#a7c957',
    white: 'white',
    graygreen: '#96AD90'
  };

  const darkPallette = {
    darkblue: '#071330',
    blue: '#5083a1',
    lightblue: '#738FA7',
    lightestblue: '#C3CEDA',
    white: 'white'
  };

  const modeHandler = () => {
    if (lightmode === true) {
      setLightmode(false);
    }
    else {
      setLightmode(true);
    }
  }



  return (
    <>
      <Router>
        <Navbar lightmode={lightmode} modeHandler={modeHandler} lightPallette={lightPallette} darkPallette={darkPallette} />
        <Alert showAlert={showAlert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm alertHandler={alertHandler} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
