import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import ProgramCard from './program-card.jsx';

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
                            process {
                              ourProcess {
                                description
                                fieldGroupName
                                header
                                subHeader
                                backgroundImage {
                                  altText
                                  sourceUrl
                                }
                                backgroundColor
                                backgroundPosition
                                backgroundRepeat
                                backgroundSize
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
                  <ProcessWrapper style={{backgroundImage:`url(${props.allWpPage.edges[0].node.template.process.ourProcess.backgroundImage.sourceUrl})`,backgroundPosition:props.allWpPage.edges[0].node.template.process.ourProcess.backgroundPosition, backgroundRepeat:props.allWpPage.edges[0].node.template.process.ourProcess.backgroundRepeat,backgroundColor:props.allWpPage.edges[0].node.template.process.ourProcess.backgroundColor,backgroundSize:props.allWpPage.edges[0].node.template.process.ourProcess.backgroundSize}}>
                    <ProcessContainer >
                        <DescriptionRow>
                          <div className="description">
                            <p className="section-subheader">{props.allWpPage.edges[0].node.template.process.ourProcess.subHeader}</p>
                            <h3>{props.allWpPage.edges[0].node.template.process.ourProcess.header}</h3>
                            <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.template.process.ourProcess.description}`}}></div>  
                          </div>
                        </DescriptionRow>
                        <ProgramsRow>
                          {(Object.values(props.allWpPage.edges[0].node.template.process.ourProcess)).slice(Object.keys(props.allWpPage.edges[0].node.template.process.ourProcess).length-4).map((value,index)=>{
                            return(
                               <ProgramCard key={index} data={value}></ProgramCard>
                            )
                          })}
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