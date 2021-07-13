import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';

const ProcessContainer = styled.div`

`

const Process = () =>{
    return(
        <ProcessContainer>
            <StaticQuery
                query={graphql`
                {
                    allWpPage(filter: {template: {templateName: {eq: "Homepage"}}}) {
                      edges {
                        node {
                          id
                          template {
                            ... on WpTemplate_Homepage {
                              templateName
                              heroSection {
                                ourProcess {
                                  backgroundProperties
                                  description
                                  fieldGroupName
                                  header
                                  subHeader
                                  featureBlockOne {
                                    description
                                    fieldGroupName
                                    title
                                    icon {
                                      altText
                                      mediaItemUrl
                                    }
                                  }
                                  featureBlockTwo {
                                    description
                                    fieldGroupName
                                    title
                                    icon {
                                      altText
                                      mediaItemUrl
                                    }
                                  }
                                  featureBlockThree {
                                    description
                                    fieldGroupName
                                    title
                                    icon {
                                      altText
                                      mediaItemUrl
                                    }
                                  }
                                  featureBlockFour {
                                    description
                                    fieldGroupName
                                    title
                                    icon {
                                      altText
                                      mediaItemUrl
                                    }
                                  }
                                  backgroundImage {
                                    altText
                                    mediaItemUrl
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }                  
                `}
                render={props=>(
                    <React.Fragment>
                        <h5>{props.allWpPage.edges[0].node.template.heroSection.ourProcess.subHeader}</h5>
                        <h1>{props.allWpPage.edges[0].node.template.heroSection.ourProcess.header}</h1>
                        <p>{props.allWpPage.edges[0].node.template.heroSection.ourProcess.description}</p>
                    </React.Fragment>
                )                    
                }
            />
        </ProcessContainer>
    )
};
export default Process