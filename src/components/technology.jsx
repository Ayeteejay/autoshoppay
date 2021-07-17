import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';

const TechnologyWrapper = styled.div`
display:flex;
justify-content:center;
padding:${props=>props.theme.spacing.topBottom};
@media(min-width:${props=>props.theme.breakPoints.md}){
    padding:22rem 0 5rem 0;
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    padding:14rem 0 5rem 0;
}
`;

const TechnologyContainer = styled.div`
width:75%;
`


const Technology = () =>{
    return (
        <React.Fragment>
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
                              technology {
                                ourTechnology {
                                  backgroundColor
                                  backgroundPosition
                                  backgroundRepeat
                                  bullets
                                  description
                                  backgroundImage {
                                    altText
                                    sourceUrl
                                  }
                                  header
                                  subHeader
                                  deviceBlockOne {
                                    bullets
                                    title
                                    device {
                                      altText
                                      sourceUrl
                                    }
                                  }
                                  deviceBlockTwo {
                                    bullets
                                    title
                                    device {
                                      altText
                                      sourceUrl
                                    }
                                  }
                                  deviceBlockThree {
                                    bullets
                                    title
                                    device {
                                      altText
                                      sourceUrl
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }                  
                    `
                }
                render={props=>(
                    <TechnologyWrapper>
                        <TechnologyContainer>
                            <h5>{props.allWpPage.edges[0].node.template.technology.ourTechnology.subHeader}</h5>
                            <h3 className="blue">{props.allWpPage.edges[0].node.template.technology.ourTechnology.header}</h3>
                            <p>{props.allWpPage.edges[0].node.template.technology.ourTechnology.description}</p>

                           {props.allWpPage.edges[0].node.template.technology.ourTechnology.bullets}
                        </TechnologyContainer>
                    </TechnologyWrapper>
                )}
            />
        </React.Fragment>
    )
};
export default Technology;