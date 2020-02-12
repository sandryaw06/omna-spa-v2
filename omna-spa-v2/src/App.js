import React, { useState, useEffect } from "react";
import { AppProvider, Page } from "@shopify/polaris";
import HomePage from "./pages/HomePage";
import OmnaPlan from "./pages/OmnaPlan";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Product/Products";
import API from "./Utils/api";
import axios from "axios";
import "./Utils/spinner.css";

function App() {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("https://cenit.io/app/omna-dev.json")
  //     .then(function(response) {
  //       console.log(response);
  //       setResult(response);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     })
  //     .finally(function() {
  //       console.log(`Initial charge ended ${result}`);
  //     });
  // }, []);

  useEffect(() => {
    async function getSettings() {
      try {
        let response = await axios.get("https://cenit.io/app/omna-dev/");
        console.log(response);
        setResult(response);
        setLoading(false);
      } catch (error) {
        console.log(`error ${error}`);
      }
    }
    getSettings();
  }, []);

  return (
    <div>
      {loading && <div className="loader"></div>}

      {!loading && (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route
              exact
              path="/omna_plan"
              render={() => <OmnaPlan appContext={result.data.settings} />}
            ></Route>
            <Route path="/" component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
