import { React, Component } from "react";
import { Page, AppProvider } from "@shopify/polaris";

class HomePage extends Component {
  render() {
    return (
      <AppProvider>
        <Page>
          <p>Wide page content</p>
        </Page>
      </AppProvider>
    );
  }
}

export default HomePage;
