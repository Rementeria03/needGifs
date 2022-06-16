import React from "react";
import { Route } from "wouter";
import Header from "components/Header/index";
import "./App.css";

import { GifsProvider } from "context/GifsContext";
import { UserProvider } from "context/UserContext";

import Login from "pages/Login/Login";
import Register from "pages/Register";
import { Home } from "pages/Home/Home";
import { SearchResults } from "pages/SearchResults/SearchResults";
import { Detail } from "components/Detail/Detail";

function App() {
  return (
    <div className="main-app-container">
      <UserProvider>
        <GifsProvider>
          <Header />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
          <Route component={SearchResults} path="/gifs/:keyword/:rating?" />
          <Route component={Detail} path="/gif/:id" />
        </GifsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
