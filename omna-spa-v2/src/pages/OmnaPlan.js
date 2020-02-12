import React, { Component } from "react";
import {
  Layout,
  Page,
  Button,
  Banner,
  DescriptionList
} from "@shopify/polaris";

class OmnaPlan extends Component {
  render() {
    const { appContext } = this.props;
    return this.renderPlans(appContext);
  }

  renderPlans(appContext) {
    return (
      <Layout>
        {appContext.settings.plans_data.map((plan, idx) => {
          return (
            <Layout.Section key={idx} oneThird>
              <Banner
                title={plan.name}
                status={idx % 2 == 0 ? "success" : "info"}
                icon="chevronRight"
              >
                <DescriptionList
                  items={[
                    { term: "Price:", description: plan.price },
                    {
                      term: "Cost by order:",
                      description: plan.cost_by_order
                    },
                    { term: "Terms:", description: plan.terms }
                  ]}
                />
                <Button
                  primary
                  onClick={e => this.handleChangePlan(e, plan)}
                >{`Take the ${plan.name} plan`}</Button>
              </Banner>
            </Layout.Section>
          );
        })}
      </Layout>
    );
  }
}

export default OmnaPlan;
