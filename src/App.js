import React from "react";
import "./App.css";
import { Route } from "wouter";
import { Home } from "pages/Home/Home";
import { GifsProvider } from "context/GifsContext";
import { SearchResults } from "pages/SearchResults/SearchResults";
import { Detail } from "components/Detail/Detail";
import Logo from "components/Logo/index"

function App() {
  return (
    <GifsProvider>
      <div className="main-app-container">
        <Logo />
        <Route path="/" component={Home} />
        <Route component={SearchResults} path="/gifs/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </div>
    </GifsProvider>
  );
}

export default App;
