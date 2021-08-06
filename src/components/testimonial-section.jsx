import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import TestimonialSlider from './testimonial-slider.jsx';

const TestimonialWrapper = styled.div`
display:flex;
justify-content:center;
flex-flow:column;
align-items:center;
background:${props=>props.theme.primaryColors.frost};
`

const DescriptionContainer = styled.div`
width:75%;
padding:${props=>props.theme.spacing.top};
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

const SliderRow = styled.div`
padding:${props=>props.theme.spacing.bottom};
width:100%;
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
                    <DescriptionContainer>
                        <DescriptionRow>
                            <p className="section-subheader">{props.allWpPage.edges[0].node.template.testimonials.ourTestimonials.subHeader}</p>      
                            <h3 className="blue">{props.allWpPage.edges[0].node.template.testimonials.ourTestimonials.header}</h3>                            
                            <div dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.template.testimonials.ourTestimonials.description}`}}></div>                            
                        </DescriptionRow>
                    </DescriptionContainer>
                        <SliderRow>
                          <TestimonialSlider data={props.allWpPage.edges[0].node.template.testimonials.ourTestimonials} quantityOfQuotes={props.allWpPage.edges[0].node.template.testimonials.ourTestimonials.quoteNumber}></TestimonialSlider>
                        </SliderRow>
                </TestimonialWrapper>
            )}
            />      
        </React.Fragment>
    )
};
export default Testimonial;