import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import TechnologyCard from './technology-card';

const OptionsWrapper = styled.div`
display:flex;
justify-content:center;
`

const OptionsContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.topBottom};
position:relative;
display:flex;
justify-content:center;
flex-flow:column
`

const DescriptionRow = styled.div`
display:flex;
flex-flow:column;
align-items:center;
text-align:center;
padding:0 0 3rem 0;
`

const TechnologyRow = styled.div`
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
            <OptionsContainer>
                <DescriptionRow>
                    <h5>{props.allWpPage.edges[0].node.template.options.technologyOptions.subHeader}</h5>
                    <h3 className="blue">{props.allWpPage.edges[0].node.template.options.technologyOptions.header}</h3>
                    <p>{props.allWpPage.edges[0].node.template.options.technologyOptions.description}</p>
                </DescriptionRow>
                <TechnologyRow>
                    {(Object.values(props.allWpPage.edges[0].node.template.options.technologyOptions)).slice(Object.keys(props.allWpPage.edges[0].node.template.options.technologyOptions).length-4).map((value,index)=>{
                        return (
                            <TechnologyCard key={index} data={value}></TechnologyCard>
                        )
                    })}
                </TechnologyRow>
            </OptionsContainer>
        </OptionsWrapper>
        )}
        />
        </React.Fragment>
    )
};
export default Options