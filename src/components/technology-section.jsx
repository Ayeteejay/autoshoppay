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
@media (min-width:${props=>props.theme.breakPoints.md}){
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
                                    <h5>{props.allWpPage.edges[0].node.template.technology.ourTechnology.subHeader}</h5>
                                    <h3 className="blue">{props.allWpPage.edges[0].node.template.technology.ourTechnology.header}</h3>
                                    <p>{props.allWpPage.edges[0].node.template.technology.ourTechnology.description}</p>
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
                            <DeviceRowMobile>
                              <DeviceSlider data={props.allWpPage.edges[0].node.template.technology.ourTechnology}></DeviceSlider>
                            </DeviceRowMobile>                                 
                        </TechnologyContainer>
                    </TechnologyWrapper>
                )}
            />
        </React.Fragment>
    )
};
export default Technology;