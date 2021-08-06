import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import RateCard from './rate-card.jsx';
import RateSlider from './rates-slider.jsx';

const RatesWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
`;

const DesktopContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.top};
position:relative;
display:flex;
justify-content:center;
flex-flow:column;
@media(min-width:${props=>props.theme.breakPoints.md}){
  padding:${props=>props.theme.spacing.topBottom};
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
  align-items:center;
}
`

const MobileContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding:${props=>props.theme.spacing.bottom};
@media(min-width:${props=>props.theme.breakPoints.md}){
  display:none;
}
`

const DescriptionRow = styled.div`
display:flex;
flex-flow:column;
justify-content:flex-start;
padding:0 0 3rem 0;
@media(min-width:${props=>props.theme.breakPoints.lg}){
  width:75%;
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
width:100%;
@media (min-width:${props=>props.theme.breakPoints.md}){
  display:none;
}
`

const RatesSpaceRow = styled.div`
background:${props=>props.theme.primaryColors.frost};
height:25px;
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
                              background {
                                backgroundImage {
                                  altText
                                  sourceUrl
                                }
                                backgroundPosition
                                backgroundRepeat
                                backgroundSize
                                backgroundColor
                              }
                              description {
                                description
                                header
                                subHeader
                              }
                              rates {
                                rateBlockOne {
                                  backgroundColor
                                  borderColor
                                  description
                                  includeCtaLink
                                  link {
                                    title
                                    url
                                  }
                                  rate
                                  title
                                }                           
                                rateBlockTwo {
                                  backgroundColor
                                  borderColor
                                  description
                                  includeCtaLink
                                  link {
                                    title
                                    url
                                  }
                                  rate
                                  title
                                }
                                rateBlockThree {
                                  backgroundColor
                                  borderColor
                                  description
                                  includeCtaLink
                                  link {
                                    title
                                    url
                                  }
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
                  <React.Fragment>
                    <RatesWrapper id="pricing" style={{background:props.allWpPage.edges[0].node.template.rates.background.backgroundColor}}>
                      <DesktopContainer >
                          <DescriptionRow>
                              <p className="section-subheader">{props.allWpPage.edges[0].node.template.rates.description.subHeader}</p>
                              <h3 className="blue">{props.allWpPage.edges[0].node.template.rates.description.header}</h3>
                              <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.template.rates.description.description}`}}></div>
                          </DescriptionRow>
                            <RatesRow>
                              {(Object.values(props.allWpPage.edges[0].node.template.rates.rates)).map((value,index)=>{
                                return (
                                  <RateCard key={index} data={value}></RateCard>
                                )
                              })}
                          </RatesRow>
                      </DesktopContainer>                      
                        <MobileContainer>
                          <RatesRowMobile>
                                    <RateSlider data={props.allWpPage.edges[0].node.template.rates.rates}></RateSlider>
                                </RatesRowMobile>
                        </MobileContainer>
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