import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";
import Things from "./pages/things";
import NotFound from "./pages/NotFound";
import ThingsDetail from "./pages/thingsDetail";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/more-info" exact>
            <Things />
          </Route>
          <Route path="/more-info/:thingId">
            <ThingsDetail />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
