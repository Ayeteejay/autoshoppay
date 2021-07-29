import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import FeaturedSlider from './featured-slider.jsx';

const HeroWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
`

const HeroContainer = styled.div`
width:75%;
display:grid;
grid-template-columns:1fr;
grid-gap:5rem;
@media(min-width:${props=>props.theme.breakPoints.lg}){
    grid-template-columns:repeat(2,1fr);
}
`

const FeaturedContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
@media(min-width:${props=>props.theme.breakPoints.md}){
    display:none;
}
`

const HeaderColumn = styled.div`
padding:7rem 0;
.description{
  
}
@media(min-width:${props=>props.theme.breakPoints.md}){
  display:flex;
  align-items:center;
  padding:0;
}
`
const FeaturedDesktopColumn = styled.div`
display:none;
@media(min-width:${props=>props.theme.breakPoints.md}){
  display:block;
  max-width:100%;
  height:100%;
}
`
const FeaturedColumnMobile = styled.div`
max-width:100%;
height:100%;
`

const Hero = (props) =>{
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
                              hero {
                                heroSection {
                                  backgroundColor
                                  backgroundPosition
                                  backgroundRepeat
                                  backgroundSize
                                  backgroundImage {
                                    altText
                                    sourceUrl
                                  }
                                  button {
                                    title
                                    url
                                  }
                                  description
                                  header
                                  numberOfFeatureBlocks
                                  featureBlockOne {
                                    monthlySavings
                                    monthlySales
                                    companyName
                                    companyLogo {
                                      altText
                                      sourceUrl
                                    }
                                  }
                                  featureBlockTwo {
                                    monthlySavings
                                    monthlySales
                                    companyName
                                    companyLogo {
                                      altText
                                      sourceUrl
                                    }
                                  }
                                  featureBlockThree {
                                    monthlySavings
                                    monthlySales
                                    companyName
                                    companyLogo {
                                      altText
                                      sourceUrl
                                    }
                                  }
                                  featureBlockFour {
                                    monthlySavings
                                    monthlySales
                                    companyName
                                    companyLogo {
                                      altText
                                      sourceUrl
                                    }
                                  }
                                  featureBlockFive {
                                    monthlySavings
                                    monthlySales
                                    companyName
                                    companyLogo {
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
                  
        `} render={props=>(
        <HeroWrapper style={{backgroundColor:props.allWpPage.edges[0].node.template.hero.heroSection.backgroundColor,backgroundImage:`url(${props.allWpPage.edges[0].node.template.hero.heroSection.backgroundImage.sourceUrl})`,backgroundSize:props.allWpPage.edges[0].node.template.hero.heroSection.backgroundSize,backgroundPosition:props.allWpPage.edges[0].node.template.hero.heroSection.backgroundPosition,backgroundRepeat:props.allWpPage.edges[0].node.template.hero.heroSection.backgroundRepeat}}>
            <HeroContainer>
                <HeaderColumn>
                  <div className="description">
                    <h1 className="white">{props.allWpPage.edges[0].node.template.hero.heroSection.header}</h1>           
                    <p className="white" dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.template.hero.heroSection.description}`}}></p>                    
                    <a href={props.allWpPage.edges[0].node.template.hero.heroSection.button.url} className="frost-cta">{props.allWpPage.edges[0].node.template.hero.heroSection.button.title}</a>         
                  </div>  
                </HeaderColumn>
                <FeaturedDesktopColumn>
                    <FeaturedSlider data={props.allWpPage.edges[0].node.template.hero.heroSection} quantityOfFeatured={props.allWpPage.edges[0].node.template.hero.heroSection.numberOfFeatureBlocks}></FeaturedSlider>
                </FeaturedDesktopColumn>
            </HeroContainer>    
            <FeaturedContainer>
                <FeaturedColumnMobile>
                    <FeaturedSlider data={props.allWpPage.edges[0].node.template.hero.heroSection} quantityOfFeatured={props.allWpPage.edges[0].node.template.hero.heroSection.numberOfFeatureBlocks}></FeaturedSlider>
                </FeaturedColumnMobile>
            </FeaturedContainer>      
        </HeroWrapper>
        )}
        />
        </React.Fragment>
    )
};
export default Hero;