import React, { useState, useEffect } from "react";
import {
  SkeletonPage,
  Layout,
  Card,
  SkeletonDisplayText,
  SkeletonBodyText,
  TextContainer,
  ProgressBar,
  Banner
} from "@shopify/polaris";
import HomePage from "./pages/HomePage";
import OmnaPlan from "./pages/OmnaPlan";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Product/Products";
import API from "./Utils/api";
import "./Utils/spinner.css";
import Utils from "./Utils/Utils";
import { OMNAContext } from "./Utils/OMNAContext";
import axios from "axios";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [charging_info, setChargingn_info] = useState(false);

  // useEffect(() => {
  //   let data_result = {};
  //   axios
  //     .get("https://cenit.io/app/omna-dev/index")
  //     .then(function(response) {
  //       console.log(response);
  //       data_result = response;
  //       setResult(data_result);
  //       setLoading(false);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     })
  //     .finally(function() {
  //       console.log(`data result ${data_result}`);

  //       console.log(`Initial charge ended ${result}`);
  //     });
  // }, []);

  useEffect(() => {
    async function getSettings() {
      try {
        let util = new Utils();
        let params = util.getParams({});
        let response = await API.get("/index", params);
        console.log(response.data);
        setResult(response.data);
      } catch (error) {
        console.log(`error ${error}`);
      }
      setLoading(false);
    }
    getSettings();
  }, []);

  useEffect(() => {
    if (typeof result != "undefined" && result !== null) {
      console.log(`result ${result.completed_tasks}`);
      if (result.completed_tasks === true) {
        // tareas de instalacion completadas
        // importar productos y location de Cenit
        setChargingn_info(true);
      }
    }
  }, [result]);

  return (
    <OMNAContext.Provider value={{ a: 1 }}>
      <div>
        {charging_info && (
          <div>
            <ProgressBar progress={75} />
            <Banner
              title="Importing Data"
              onDismiss={() => {}}
              status="warning"
            >
              <p>
                Please, wait a few seconds while is charging the basic
                information from your store.
              </p>
            </Banner>
          </div>
        )}
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
          // <AppContext.Provider value="dark">
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
          // </AppContext.Provider>
        )}
      </div>

      <FooterHelp>
        Learn more about{" "}
        <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
          fulfilling orders
        </Link>
      </FooterHelp>
    </OMNAContext.Provider>
  );
}

export default App;
