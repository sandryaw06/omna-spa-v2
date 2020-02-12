import React, { Component } from "react";
import { Page, Layout, Button, ButtonGroup } from "@shopify/polaris";
import Products from "../Product/Products";
import { Link, useHistory } from "react-router-dom";

function HomePage() {
  let history = useHistory();
  return (
    <Page title="OMNA App" separator>
      <Layout>
        <ButtonGroup>
          <Button onClick={() => history.push("/omna_plan")}>OMNA Plan</Button>
          <Button url="/products">Products</Button>
          <Button>Orders</Button>
        </ButtonGroup>
      </Layout>
    </Page>
  );
}
export default HomePage;
