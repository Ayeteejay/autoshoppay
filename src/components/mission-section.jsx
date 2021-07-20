import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

const MissionWrapper = styled.div`
display:flex;
justify-content:center;
`;

const MissionContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.topBottom};
display:flex;
justify-content:flex-start;
flex-flow:column;
.quote{
    font-weight:400;
    @media(max-width:${props=>props.theme.breakPoints.lg}){
        font-size:1.75rem;
    }
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    text-align:center;
    justify-content:center;
    padding:${props=>props.theme.spacing.lgTopBottom};
}
`

const Mission = () => {
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
                              mission {
                                ourMission {
                                  backgroundColor
                                  backgroundImage {
                                    altText
                                    sourceUrl
                                  }
                                  backgroundPosition
                                  backgroundRepeat
                                  backgroundSize
                                  header
                                  subHeader
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
                    <MissionWrapper style={{backgroundImage:`url(${props.allWpPage.edges[0].node.template.mission.ourMission.backgroundImage.sourceUrl})`,backgroundPosition:props.allWpPage.edges[0].node.template.mission.ourMission.backgroundPosition,backgroundRepeat:props.allWpPage.edges[0].node.template.mission.ourMission.backgroundRepeat, backgroundColor:props.allWpPage.edges[0].node.template.mission.ourMission.backgroundColor,backgroundSize:props.allWpPage.edges[0].node.template.mission.ourMission.backgroundSize}}>
                    <MissionContainer>
                        <h5 className="white">{props.allWpPage.edges[0].node.template.mission.ourMission.subHeader}</h5>
                        <h3 className="green quote">{props.allWpPage.edges[0].node.template.mission.ourMission.header}</h3>
                    </MissionContainer>
                </MissionWrapper>
                )}
            />
        </React.Fragment>
    )
};
export default Mission;