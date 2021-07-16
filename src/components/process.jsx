import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import ProgramCard from './program-card';

const ProcessWrapper = styled.div`
display:flex;
justify-content:center;
color:${props=>props.theme.primaryColors.frost};
`
const ProcessContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.topBottom};
`

const DescriptionRow = styled.div`
display:grid;
grid-template-columns:1fr;
padding:${props=>props.theme.spacing.bottom};
.description{
}
@media (min-width:${props=>props.theme.breakPoints.lg}){
  grid-template-columns:1fr 1fr;
}
`

const ProgramsRow = styled.div`
display:grid;
grid-template-columns:repeat(1fr);
grid-gap:2rem;
@media(min-width:${props=>props.theme.breakPoints.md}){
  grid-template-columns:repeat(2,1fr);
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
  grid-template-columns:repeat(4,1fr);
}
`

const Process = () =>{
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
                            homepage {
                              ourProcess {
                                description
                                fieldGroupName
                                header
                                subHeader
                                featureBlockOne {
                                  description
                                  fieldGroupName
                                  title
                                  icon {
                                    altText
                                    sourceUrl
                                  }
                                }
                                featureBlockTwo {
                                  description
                                  fieldGroupName
                                  title
                                  icon {
                                    altText
                                    sourceUrl
                                  }
                                }
                                featureBlockThree {
                                  description
                                  fieldGroupName
                                  title
                                  icon {
                                    altText
                                    sourceUrl
                                  }
                                }
                                featureBlockFour {
                                  description
                                  fieldGroupName
                                  title
                                  icon {
                                    altText
                                    sourceUrl
                                  }
                                }
                                backgroundImage {
                                  altText
                                  sourceUrl
                                }
                                backgroundColor
                                backgroundPosition
                                backgroundRepeat
                                backgroundSize
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
                  <ProcessWrapper style={{backgroundImage:`url(${props.allWpPage.edges[0].node.template.homepage.ourProcess.backgroundImage.sourceUrl})`,backgroundPosition:props.allWpPage.edges[0].node.template.homepage.ourProcess.backgroundPosition, backgroundRepeat:props.allWpPage.edges[0].node.template.homepage.ourProcess.backgroundRepeat,backgroundColor:props.allWpPage.edges[0].node.template.homepage.ourProcess.backgroundColor,backgroundSize:props.allWpPage.edges[0].node.template.homepage.ourProcess.backgroundSize}}>
                    <ProcessContainer >
                        <DescriptionRow>
                          <div className="description">
                            <h5>{props.allWpPage.edges[0].node.template.homepage.ourProcess.subHeader}</h5>
                            <h3>{props.allWpPage.edges[0].node.template.homepage.ourProcess.header}</h3>
                            <p>{props.allWpPage.edges[0].node.template.homepage.ourProcess.description}</p>  
                          </div>
                        </DescriptionRow>
                        <ProgramsRow>                                  
                            <ProgramCard icon={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockOne.icon.sourceUrl} smallHeader={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockOne.title} description={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockOne.description}></ProgramCard>
                            <ProgramCard icon={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockTwo.icon.sourceUrl} smallHeader={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockTwo.title} description={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockTwo.description}></ProgramCard>
                            <ProgramCard icon={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockThree.icon.sourceUrl} smallHeader={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockThree.title} description={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockThree.description}></ProgramCard>
                            <ProgramCard icon={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockFour.icon.sourceUrl} smallHeader={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockFour.title} description={props.allWpPage.edges[0].node.template.homepage.ourProcess.featureBlockFour.description}></ProgramCard>
                        </ProgramsRow>
                    </ProcessContainer>
                  </ProcessWrapper>  
                )                    
                }
            />
        </React.Fragment>
    )
};
export default Process