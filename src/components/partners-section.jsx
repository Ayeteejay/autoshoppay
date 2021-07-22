import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import PartnersSlider from './partners-slider.jsx';

const PartnersWrapper = styled.div`
display:flex;
justify-content:center;
padding:${props=>props.theme.spacing.topBottom};
`
const PartnersContainer = styled.div`
width:75%;
display:flex;
justify-content:center;
flex-flow:column;
`

const DescriptionRow = styled.div`
display:flex;
justify-content:center;
`

const PartnersRow = styled.div`
width:100%;

`


const Partners = (props) => {
    return (
        <React.Fragment>
            <StaticQuery query={graphql`
                {
                    allWpPage(filter: {template: {templateName: {eq: "Homepage"}}}) {
                      edges {
                        node {
                          id
                          template {
                            ... on WpTemplate_Homepage {
                              templateName
                              partners {
                                ourPartners {
                                  backgroundColor
                                  backgroundPosition
                                  backgroundRepeat
                                  backgroundSize
                                  backgroundImage {
                                    altText
                                    sourceUrl
                                  }
                                  header
                                  partnerBlockOne {
                                    altText
                                    sourceUrl
                                  }
                                  partnerBlockTwo {
                                    altText
                                    sourceUrl
                                  }
                                  partnerBlockThree {
                                    altText
                                    sourceUrl
                                  }
                                  partnerBlockFour {
                                    altText
                                    sourceUrl
                                  }
                                  partnerBlockFive {
                                    altText
                                    sourceUrl
                                  }
                                  partnerBlockSix {
                                    altText
                                    sourceUrl
                                  }
                                  partnerBlockSeven {
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
            `} render={props=>(
                <PartnersWrapper style={{backgroundColor:props.allWpPage.edges[0].node.template.partners.ourPartners.backgroundColor}}>
                    <PartnersContainer>
                        <DescriptionRow>
                        <h3 className="blue">{props.allWpPage.edges[0].node.template.partners.ourPartners.header}</h3>                        
                        </DescriptionRow>
                        <PartnersRow>              
                            <PartnersSlider data={props.allWpPage.edges[0].node.template.partners.ourPartners}></PartnersSlider>
                        </PartnersRow>
                    </PartnersContainer>
                </PartnersWrapper>
            )}            
            />
        </React.Fragment>
    )
};
export default Partners