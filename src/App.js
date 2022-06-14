import React from "react";
import "./App.css";
import { Route } from "wouter";
import { Home } from "pages/Home/Home";
import { GifsProvider } from "context/GifsContext";
import { SearchResults } from "pages/SearchResults/SearchResults";
import { Detail } from "components/Detail/Detail";
import Logo from "components/Logo/index"
import Login from "pages/Login/Login";

function App() {
  return (
    <GifsProvider>
      <div className="main-app-container">
        <Logo />
        <Route path="/register" component={Login} />
        <Route path="/" component={Home} />
        <Route component={SearchResults} path="/gifs/:keyword/:rating?" />
        <Route component={Detail} path="/gif/:id" />
      </div>
    </GifsProvider>
  );
}

export default App;
