import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import TestimonialSlider from './testimonial-slider.jsx';

const TestimonialWrapper = styled.div`
display:flex;
justify-content:center;
background:${props=>props.theme.primaryColors.frost};
`

const TestimonialContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.topBottom};
`
const DescriptionRow = styled.div`
display:flex;
flex-flow:column;
align-items:flex-start;
justify-content:flex-start;
padding:0 0 3rem 0;
@media(min-width:${props=>props.theme.breakPoints.lg}){
  text-align:center;
  justify-content:center;
  align-items:center;
}
`

const TestimonialRow = styled.div`
padding: 0 0 2rem 0;
`

const Testimonial = (props) =>{
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
                          testimonials {
                            ourTestimonials {
                              backgroundColor
                              backgroundPosition
                              backgroundRepeat
                              backgroundSize
                              backgroundImage {
                                altText
                                sourceUrl
                              }
                              description
                              header
                              subHeader
                              quoteNumber
                              quoteBlockOne {
                                quote
                                source
                                sourceTitle
                                sourceLogo {
                                  altText
                                  sourceUrl
                                }
                                quoteImage {
                                  altText
                                  sourceUrl
                                }
                              }
                              quoteBlockTwo {
                                quote
                                source
                                sourceTitle
                                sourceLogo {
                                  altText
                                  sourceUrl
                                }
                                quoteImage {
                                  altText
                                  sourceUrl
                                }
                              }
                              quoteBlockThree {
                                quote
                                source
                                sourceTitle
                                sourceLogo {
                                  altText
                                  sourceUrl
                                }
                                quoteImage {
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
                <TestimonialWrapper>
                    <TestimonialContainer>
                        <DescriptionRow>
                            <h5>{props.allWpPage.edges[0].node.template.testimonials.ourTestimonials.subHeader}</h5>      
                            <h3 className="blue">{props.allWpPage.edges[0].node.template.testimonials.ourTestimonials.header}</h3>                            
                            <p>{props.allWpPage.edges[0].node.template.testimonials.ourTestimonials.description}</p>                            
                        </DescriptionRow>
                        <TestimonialRow>
                          <TestimonialSlider data={props.allWpPage.edges[0].node.template.testimonials.ourTestimonials} quantityOfQuotes={props.allWpPage.edges[0].node.template.testimonials.ourTestimonials.quoteNumber}></TestimonialSlider>
                        </TestimonialRow>
                    </TestimonialContainer>
                </TestimonialWrapper>
            )}
            />      
        </React.Fragment>
    )
};
export default Testimonial;