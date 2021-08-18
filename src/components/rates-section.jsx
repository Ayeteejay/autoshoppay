import React, {useState} from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import RateCard from './rate-card.jsx';
import RateSlider from './rates-slider.jsx';

const RatesWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
position:relative;
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

// Adding this full screen
const ModalWindow = styled.div`
height:100%;
width:100%;
background:${props=>props.theme.primaryColors.frost};
position:absolute;
top:0;
margin:0 auto;
transition:all ${props=>props.theme.animationSpeeds.fast};
z-index:999;
-webkit-box-shadow: 5px 5px 15px -4px rgba(0,0,0,0.44); 
box-shadow: 5px 5px 15px -4px rgba(0,0,0,0.44);
.modal-close{
  position:absolute;
  left:-3%;
  top:-3%;
  font-weight:600;
  border:1px solid ${props=>props.theme.primaryColors.amber};
  background:${props=>props.theme.primaryColors.amber};
  color:${props=>props.theme.primaryColors.frost};
  transition:${props=>props.theme.animationSpeeds.fast};
  font-size:1.25rem;
  display:flex;
  justify-content:center;
  align-items:center;
  width:50px;
  height:50px;
  border-radius:50%;
  padding:1rem 0;
  &:hover{
      background:white;
      color:${props=>props.theme.primaryColors.amber};
  }
}
`

const Rates = () =>{
  const [modal, setModal] = useState(false);

  const modalClickHandler = () =>{
    setModal(!modal);
  }

  const iframeWindow = (conditional) => {
    if(conditional.includeCtaLink){
        return (
            <iframe src={conditional.link.url} title="Upload your statement to get a price quote." height="100%" width="100%" style={{border:"none"}}/>
        )
    }
}
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
                                  <React.Fragment key={index}>
                                <ModalWindow style={{display: value.link !== null ? "block" : "none",opacity: modal === true ? "1" : "0",height:modal === true ? "250%" : "0",transform: modal === true ? `translate(0, -75%)` : ""}}>
                      
                                {iframeWindow(value)}                        
                                <button className="modal-close" onClick={modalClickHandler}>&#10005;</button>     
                              </ModalWindow>
                          <RateCard data={value} modalSwitch={modalClickHandler} ></RateCard>
                                  </React.Fragment>              
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