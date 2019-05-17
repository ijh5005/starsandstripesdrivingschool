import React, { useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";
import ReviewPage from "./components/ReviewPage";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialMediaBar from "./components/SocialMediaBar";

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      alert("Super offer! FREE 15 min practice parallel parking before the test")
    }, 2000)
  })

  return (<div id="app">
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route path="/page" component={Navbar}/>
        <Route path="/page" component={SocialMediaBar}/>
        <Route exact path="/page/service" component={ServicePage}/>
        <Route exact path="/page/review" component={ReviewPage}/>
        <Route exact path="/page/contact" component={ContactPage}/>
      </div>
    </BrowserRouter>
  </div>);
}

// <Route path="/page" component={Footer}/>

export default App;
