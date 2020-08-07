import React from "react";
import "./App.css";

// Components
import Nav from "./components/Nav";

// Pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

// External
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="content">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
