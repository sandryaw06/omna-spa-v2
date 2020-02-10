import React from "react";
// import "./App.css";
import { AppProvider, Page, Layout, Button } from "@shopify/polaris";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <AppProvider>
      <Page title="OMNA App" separator>
        <br></br>
        <Layout>
          <Button>OMNA Plan</Button>
          <Button>Products</Button>

          <Button>Orders</Button>
        </Layout>
      </Page>
    </AppProvider>
  );
}

export default App;
