import React from "react"
import Navbar from "./components/navbar/Navbar"
import "./global.css"
import Home from "./Pages/Home/Home";
import Page3 from "./Pages/Page3/Page3";
import Page2 from "./Pages/Page2/Page2";
import Page4 from "./Pages/Page4/Page4";
import Page5 from "./Pages/Page5/Page5";
import Page6 from "./Pages/Page6/Page6";
import Page7 from "./Pages/Page7/Page7";
import Page8 from "./Pages/Page8/Page8";
import Page9 from "./Pages/Page9/Page9";
import Page10 from "./Pages/Page10/Page10";
const App = () => {
  
    return (
    <div className="app">
          <Navbar/>
          <Home/>
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <Page6/>
          <Page7/>
          <Page8/>
          <Page9/>
          <Page10/>

    </div>
    )
  }

export default App;
