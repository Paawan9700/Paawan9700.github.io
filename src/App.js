import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import { Navbar } from "./components/Navbar";
import Textform from "./components/Textform";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [darkmode, setdarkmode] = useState("light")

  const [alert, setalert] = useState({})

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert({});
    }, 1000);
  }

  const togglemode = () => {
    if (darkmode === "dark") {
      setdarkmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");

    } else {
      setdarkmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");

    }
  }

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" about="About" mode={darkmode} toggleMode={togglemode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/' element={<Textform showAlert={showAlert} heading="Enter Your Text To Analyze" mode={darkmode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
