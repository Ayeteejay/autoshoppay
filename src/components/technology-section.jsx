import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import DeviceCard from './device-card.jsx';
import DeviceSlider from './device-slider.jsx';

const TechnologyWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:${props=>props.theme.spacing.topBottom};
background:${props=>props.theme.primaryColors.frost};
flex-flow:column;
`;

const TechnologyContainer = styled.div`
width:75%;
`

const TechnologyRow = styled.div`
display:grid;
grid-template-columns:1fr;
grid-gap:2rem;
.technology-bullets{
  padding:1.5rem 0 0 0;
  margin:1.5rem 0 0 0;
  border-top:1px solid ${props=>props.theme.secondaryColors.lightGray};
}
.technology-description{

}
.technology-image{

}
@media (min-width:${props=>props.theme.breakPoints.lg}){
  grid-template-columns:repeat(2,1fr);
grid-gap:5rem;
}
`

const DeviceRow = styled.div`
display:none;
padding:${props=>props.theme.spacing.top};
@media(min-width:${props=>props.theme.breakPoints.md}){
  display:grid;
grid-gap:2rem;
  grid-template-columns:repeat(2,1fr);
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
  grid-template-columns:repeat(3,1fr);
}
`

const DeviceRowMobile = styled.div`
padding:3rem 0 0 0;
width:100%;
`

const MobileContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
@media(min-width:${props=>props.theme.breakPoints.md}){
  display:none;
}
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
                                image {
                                  altText
                                  sourceUrl
                                }
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
                    <TechnologyWrapper id="technology">
                        <TechnologyContainer>   
                            <TechnologyRow>
                                <div className="technology-description">
                                    <p className="section-subheader">{props.allWpPage.edges[0].node.template.technology.ourTechnology.subHeader}</p>
                                    <h3 className="blue">{props.allWpPage.edges[0].node.template.technology.ourTechnology.header}</h3>
                                    <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.template.technology.ourTechnology.description}`}}></div>
                                    <div className="technology-bullets" dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.template.technology.ourTechnology.bullets}`}}>
                                    </div> 
                                </div>      
                                <div className="technology-image">
                                  <img className="fluid-img" src={props.allWpPage.edges[0].node.template.technology.ourTechnology.image.sourceUrl} alt={props.allWpPage.edges[0].node.template.technology.ourTechnology.image.altText}/> 
                                </div>                   
                            </TechnologyRow>  
                            <DeviceRow>
                            {(Object.values(props.allWpPage.edges[0].node.template.technology.ourTechnology)).slice(Object.keys(props.allWpPage.edges[0].node.template.technology.ourTechnology).length-3).map((value,index)=>{
                              return (
                                <DeviceCard key={index} data={value}></DeviceCard>
                              )
                            })}
                            </DeviceRow>              
                        </TechnologyContainer>
                        <MobileContainer>
                           <DeviceRowMobile>
                              <DeviceSlider data={props.allWpPage.edges[0].node.template.technology.ourTechnology}></DeviceSlider>
                            </DeviceRowMobile>  
                        </MobileContainer>
                    </TechnologyWrapper>
                )}
            />
        </React.Fragment>
    )
};
export default Technology;