import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import TechnologyCard from './technology-card.jsx';
import TechnologySlider from './technology-slider.jsx';

const OptionsWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
background:${props=>props.theme.primaryColors.frost};
`

const DesktopContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.topBottom};
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
`
const TechnologyRowDesktop = styled.div`
display:none;
@media(min-width:${props=>props.theme.breakPoints.md}){
  display:grid;
  grid-gap:2rem;
  grid-template-columns:repeat(2,1fr);
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
  grid-template-columns:repeat(4, 1fr);
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

const MobileContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
@media(min-width:${props=>props.theme.breakPoints.md}){
  display:none;
}
`

const TechnologyRowMobile = styled.div`
width:100%;
padding:${props=>props.theme.spacing.bottom};
`

const Options = () => {
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
                  options {
                    technologyOptions {
                      backgroundColor
                      backgroundImage {
                        altText
                        sourceUrl
                      }
                      backgroundPosition
                      backgroundRepeat
                      description
                      header
                      subHeader
                          deviceBlockOne {
                        title
                        device {
                          altText
                          sourceUrl
                        }
                      }
                          deviceBlockTwo {
                        title
                        device {
                          altText
                          sourceUrl
                        }
                      }
                          deviceBlockThree {
                        title
                        device {
                          altText
                          sourceUrl
                        }
                      }
                      deviceBlockFour {
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
        } render={props=>(
            <OptionsWrapper>
            <DesktopContainer>
                <DescriptionRow>
                    <h5>{props.allWpPage.edges[0].node.template.options.technologyOptions.subHeader}</h5>
                    <h3 className="blue">{props.allWpPage.edges[0].node.template.options.technologyOptions.header}</h3>
                    <p dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.template.options.technologyOptions.description}`}}></p>
                </DescriptionRow>
                <TechnologyRowDesktop>
                    {(Object.values(props.allWpPage.edges[0].node.template.options.technologyOptions)).slice(Object.keys(props.allWpPage.edges[0].node.template.options.technologyOptions).length-4).map((value,index)=>{
                        return (
                            <TechnologyCard key={index} data={value}></TechnologyCard>
                        )
                    })}
                </TechnologyRowDesktop>
            </DesktopContainer>
            <MobileContainer>
                 <TechnologyRowMobile>
                    <TechnologySlider data={props.allWpPage.edges[0].node.template.options.technologyOptions}></TechnologySlider>
                  </TechnologyRowMobile>
            </MobileContainer>
        </OptionsWrapper>
        )}
        />
        </React.Fragment>
    )
};
export default Options