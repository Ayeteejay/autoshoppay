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
            <h1>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h1>
            <h1 style={{ color: "red" }}>
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
