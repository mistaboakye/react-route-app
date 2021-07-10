import React from "react";
import { BrowserRouter as AppRouter, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Contacts from "./Components/Contact";
import Home from "./Components/Home";
import Service from "./Components/Service";
import ServiceDetails from "./Components/ServiceDetails";

export const Router = () => {
  return (
    // imports browser this wraps the whole application in other for the application to be assessible
    <AppRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/service">Services</Link>
      </nav>
      {/* this takes two props thats the path (where the route should go to) and component (what it should display) */}
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contacts} />
      <Route path="/service" exact component={Service} />
      <Route path="/service/:id" component={ServiceDetails} />
    </AppRouter>
  );
};
export default Router;
