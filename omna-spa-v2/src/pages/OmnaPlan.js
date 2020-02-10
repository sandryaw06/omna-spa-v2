import React, { Component } from "react";
import { Layout, Page } from "@shopify/polaris";

class OmnaPlan extends Component {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Page title="Omna Plan" separator>
        <Layout>
          <Layout.AnnotatedSection title="Plan's Details">
            <p>Annotated section content</p>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }
}

export default OmnaPlan;
