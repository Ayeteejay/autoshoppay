import * as React from "react";
import Layout from "../components/layout.jsx";
import { Link, graphql, StaticQuery } from "gatsby";
import { BackgroundColor } from "chalk";

const Index = () => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          {
            allWpPage {
              edges {
                node {
                  id
                  title
                  template {
                    ... on WpTemplate_Homepage {
                      templateName
                      heroSection {
                        heroSection {
                          ctaBtn {
                            target
                            title
                            url
                          }
                          h1
                          description
                        }
                        fieldGroupName
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(props) => (
          <React.Fragment>
            <h1 style={{ color: "blue" }}>
              {
                props.allWpPage.edges[0].node.template.heroSection.heroSection
                  .h1
              }
            </h1>
            <p>
              {
                props.allWpPage.edges[0].node.template.heroSection.heroSection
                  .description
              }
            </p>
          </React.Fragment>
        )}
      />
    </Layout>
  );
};

export default Index;
