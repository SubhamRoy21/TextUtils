import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/alert';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";


function App(){
  const[mode,setmode]=useState('light');
  const [alert,setAlert]=useState();
  const showAlert=(message,type)=>{
  setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="black";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","success");
    }
  }
  return (
<>
 {/* <BrowserRouter> */}
    <Navbar title="My-app" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container"/>
    {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}/> */}
          <Textform showAlert={showAlert} heading="Enter text below :-" mode={mode}/>
    {/* </Routes>
 </BrowserRouter> */}
</>
  );
}

export default App;
