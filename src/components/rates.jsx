import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import RateCard from './rate-card.jsx';
import RateSlider from './ratesSlider.jsx';

const RatesWrapper = styled.div`
display:flex;
justify-content:center;
`;

const RatesContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.topBottom};
position:relative;
display:flex;
justify-content:center;
flex-flow:column;
`

const DescriptionRow = styled.div`
display:flex;
flex-flow:column;
align-items:center;
text-align:center;
padding:0 0 3rem 0;
`

const RatesRow = styled.div`
// display:grid;
// grid-template-columns:1fr;
// grid-gap:2rem;
// position:absolute;
display:none;
top:75%;
@media(min-width:${props=>props.theme.breakPoints.md}){
  display:grid;
  grid-gap:2rem;
position:absolute;
  grid-template-columns:repeat(2,1fr);
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
  grid-template-columns:repeat(3, 1fr);
}
`

const RatesRowMobile = styled.div`
@media (min-width:${props=>props.theme.breakPoints.md}){
  display:none;
}
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
                                  backgroundColor
                                  borderColor
                                }                            
                                rateBlockTwo {
                                  description
                                  rate
                                  title
                                  backgroundColor
                                  borderColor
                                }
                                rateBlockThree {
                                  description
                                  rate
                                  title
                                  backgroundColor
                                  borderColor
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
                    <RatesWrapper style={{background:props.allWpPage.edges[0].node.template.rates.ourRates.backgroundColor}}>
                      <RatesContainer >
                          <DescriptionRow>
                              <h5>{props.allWpPage.edges[0].node.template.rates.ourRates.subHeader}</h5>
                              <h3 className="blue">{props.allWpPage.edges[0].node.template.rates.ourRates.header}</h3>
                              <p>
                              {props.allWpPage.edges[0].node.template.rates.ourRates.description}
                              </p>
                          </DescriptionRow>
                            <RatesRow>
                              <RateCard data={props.allWpPage.edges[0].node.template.rates.ourRates.rateBlockOne}></RateCard>
                              <RateCard data={props.allWpPage.edges[0].node.template.rates.ourRates.rateBlockTwo}></RateCard>
                              <RateCard data={props.allWpPage.edges[0].node.template.rates.ourRates.rateBlockThree}></RateCard>
                          </RatesRow>
                            <RatesRowMobile>
                                <RateSlider data={props.allWpPage.edges[0].node.template.rates.ourRates}></RateSlider>
                            </RatesRowMobile>
                      </RatesContainer>                      
                    </RatesWrapper>
                )}
            />

        </React.Fragment>

    )
};
export default Rates;