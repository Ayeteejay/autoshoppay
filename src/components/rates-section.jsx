import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import RateCard from './rate-card.jsx';
import RateSlider from './rates-slider.jsx';

const RatesWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

const RatesContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.topBottom};
position:relative;
display:flex;
justify-content:center;
flex-flow:column;
@media(min-width:${props=>props.theme.breakPoints.lg}){
  align-items:center;
}
`

const DescriptionRow = styled.div`
display:flex;
flex-flow:column;
justify-content:flex-start;
padding:0 0 3rem 0;
@media(min-width:${props=>props.theme.breakPoints.lg}){
  text-align:center;
justify-content:center; 
}
`

const RatesRow = styled.div`
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

const RatesSpaceRow = styled.div`
background:${props=>props.theme.primaryColors.frost};
display:none;
@media(min-width:${props=>props.theme.breakPoints.md}){
  display:block;
  height:300px;
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
  height:175px;
}
@media(min-width:${props=>props.theme.breakPoints.xl}){
  height:150px;
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
                  <React.Fragment>
                    <RatesWrapper id="pricing" style={{background:props.allWpPage.edges[0].node.template.rates.ourRates.backgroundColor}}>
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
                    <RatesSpaceRow>
                    </RatesSpaceRow>
                    </React.Fragment>
                )}
            />
        </React.Fragment>

    )
};
export default Rates;