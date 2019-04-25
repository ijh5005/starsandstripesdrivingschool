import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";
import ReviewPage from "./components/ReviewPage";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage}/>
<<<<<<< HEAD
        <Route exact path="/service" component={ServicePage}/>
        <Route exact path="/review" component={ReviewPage}/>
        <Route exact path="/contact" component={ContactPage}/>
        
=======
        <Route path="/page" component={Navbar}/>
        <Route exact path="/page/service" component={ServicePage}/>
        <Route exact path="/page/review" component={ReviewPage}/>
        <Route exact path="/page/contact" component={ContactPage}/>
>>>>>>> 0ceb94fc24ad372c9aeae07164c7c8045d025e4d
      </div>
    </BrowserRouter>
  );
}

export default App;
