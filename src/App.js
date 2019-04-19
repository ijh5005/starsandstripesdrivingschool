import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";
import ReviewPage from "./components/ReviewPage";
import ContactPage from "./components/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/service" component={ServicePage}/>
        <Route exact path="/review" component={ReviewPage}/>
        <Route exact path="/contact" component={ContactPage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
