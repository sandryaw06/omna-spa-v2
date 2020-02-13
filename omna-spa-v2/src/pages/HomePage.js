import React, { Component, useState } from "react";
import { Page, Layout, Button, ButtonGroup } from "@shopify/polaris";
import { Link, useHistory } from "react-router-dom";

function HomePage() {
  let history = useHistory();
  const [installing, setInstalling] = useState(true);
  return (
    // {installing &&

    // }
    <Page>
      <Layout>
        <ButtonGroup>
          <Button onClick={() => history.push("/omna_plan")}>OMNA Plan</Button>
          <Button onClick={() => history.push("/products")}>Products</Button>
          <Button>Orders</Button>
        </ButtonGroup>
      </Layout>
    </Page>
  );
}
export default HomePage;
