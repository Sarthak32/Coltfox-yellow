import React from "react"
import Navbar from "./components/navbar/Navbar"
import "./global.css"
import Home from "./Pages/Home/Home";
import Page3 from "./Pages/Page3/Page3";
import Page2 from "./Pages/Page2/Page2";
import Page4 from "./Pages/Page4/Page4";
const App = () => {
  
    return (
    <div className="app">
          <Navbar />
          <Home />
          <Page2/>
          <Page3/>
          <Page4/>

    </div>
    )
  }

export default App;
