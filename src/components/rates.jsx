import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

const RatesWrapper = styled.div`
display:flex;
justify-content:center;
`;

const RatesContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.topBottom};
`

const Rates = () =>{
    return(
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
                              rates {
                                ourRates {
                                  backgroundColor
                                  backgroundPosition
                                  backgroundRepeat
                                  description
                                  backgroundImage {
                                    altText
                                    sourceUrl
                                  }
                                  header
                                  subHeader
                                  rateBlockOne {
                                    description
                                    rate
                                    title
                                  }
                                  rateBlockThree {
                                    description
                                    rate
                                    title
                                  }
                                  rateBlockTwo {
                                    description
                                    rate
                                    title
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
                    <RatesWrapper>
                   <h4>Hello</h4>
                </RatesWrapper>
                )}
            />

        </React.Fragment>

    )
};
export default Rates;