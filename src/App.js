import React from "react";
import "./App.css";
import { Route } from "wouter";
import { GifsProvider } from "context/GifsContext";
import { Home } from "pages/Home/Home";
import { SearchResults } from "pages/SearchResults/SearchResults";
import { Detail } from "components/Detail/Detail";

function App() {
  return (
    <GifsProvider>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Route path="/" component={Home} />
        <Route component={SearchResults} path="/gifs/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </GifsProvider>
  );
}

export default App;
