import * as React from "react";
import Layout from "../components/layout.jsx";
import { graphql, StaticQuery } from "gatsby";
import OurProcess from "../components/process-section.jsx";
import OurRates from "../components/rates-section.jsx";
import OurTechnology from "../components/technology-section.jsx";
import TechnologyOptions from "../components/options-section.jsx";
import OurMission from "../components/mission-section.jsx";
import OurTestimonials from "../components/testimonial-section.jsx";
import Partners from "../components/partners-section.jsx";

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
                      homepage {
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
            {/* <h1 style={{ color: "blue" }}>
              {props.allWpPage.edges[0].node.template.homepage.heroSection.h1}
            </h1>
            <p>
              {
                props.allWpPage.edges[0].node.template.homepage.heroSection
                  .description
              }
            </p> */}
            <OurProcess></OurProcess>
            <OurRates></OurRates>
            <OurTechnology></OurTechnology>
            <TechnologyOptions></TechnologyOptions>
            <OurMission></OurMission>
            <OurTestimonials></OurTestimonials>
            <Partners></Partners>
          </React.Fragment>
        )}
      />
    </Layout>
  );
};

export default Index;
