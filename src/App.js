import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./routes/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/main" component={Main} />
      </BrowserRouter>
    </div>
  );
}

export default App;
