import React, { useState, useEffect } from "react";
import {
  SkeletonPage,
  Layout,
  Card,
  SkeletonDisplayText,
  SkeletonBodyText,
  TextContainer
} from "@shopify/polaris";
import HomePage from "./pages/HomePage";
import OmnaPlan from "./pages/OmnaPlan";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Product/Products";
import API from "./Utils/api";
import axios from "axios";
import "./Utils/spinner.css";
import Utils from "./Utils/Utils";

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
        let util = new Utils();
        let params = util.getParams({});
        let response = await API.get("/index", params);
        setResult(response);
      } catch (error) {
        console.log(`error ${error}`);
      }
      setLoading(false);
    }
    getSettings();
  }, []);

  return (
    <div>
      {loading && (
        <SkeletonPage primaryAction secondaryActions={1}>
          <Layout>
            <Layout.Section>
              <Card sectioned>
                <SkeletonBodyText />
              </Card>
              <Card sectioned>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText />
                </TextContainer>
              </Card>
              <Card sectioned>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText />
                </TextContainer>
              </Card>
            </Layout.Section>
          </Layout>
        </SkeletonPage>
      )}

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
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
