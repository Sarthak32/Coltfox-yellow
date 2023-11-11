import React from "react"
import Navbar from "./components/navbar/Navbar"
import "./global.css"
import Home from "./Pages/Home/Home";
import Page3 from "./Pages/Page3/Page3";
import Page2 from "./Pages/Page2/Page2";
import Page4 from "./Pages/Page4/Page4";
import Page5 from "./Pages/Page5/Page5";
import Page6 from "./Pages/Page6/Page6";
const App = () => {
  
    return (
    <div className="app">
          <Navbar />
          <Home />
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <Page6 />

    </div>
    )
  }

export default App;
