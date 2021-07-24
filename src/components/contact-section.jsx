import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';

const ContactWrapper = styled.div`
display:flex;
justify-content:center;
padding:${props=>props.theme.spacing.lgTopBottom};
`

const ContactContainer = styled.div`
width:75%;
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

const FormRow = styled.div`
display:grid;
grid-gap:2rem;
grid-template-columns:1fr;
grid-template-rows:repeat(6,1fr);
grid-template-areas: "your-name"
"your-shop"
"your-email"
"your-phone"
"your-message"
"submit-button";
input{
    padding:1rem;
    font-family:Inter, san-serif;
    font-size:1rem;
    border:1px solid ${props=>props.theme.primaryColors.frost};
    color:${props=>props.theme.primaryColors.frost};
    background:none;
    &::placeholder{
        color:${props=>props.theme.primaryColors.frost};
    };
}
.name{
    grid-area:your-name;
}                    
.shop{
    grid-area:your-shop;
}
.message{
    grid-area:your-message;
};
.email{
    grid-area:your-email;
};
.phone{
    grid-area:your-phone;
};
.message{
    grid-area:your-message;
}
.submit{
    grid-area:submit-button;
}
@media(min-width:${props=>props.theme.breakPoints.md}){
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(3,1fr);
    grid-template-areas: "your-name your-shop your-message"
                        "your-email your-phone your-message"
                        "submit-button . .";
}
`

const Contact = (props) =>{
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
                              contact {
                                contactUs {
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
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  
            `} render={props=>(
                <ContactWrapper id="contact-us" style={{backgroundColor:props.allWpPage.edges[0].node.template.contact.contactUs.backgroundColor,backgroundImage:`url(${props.allWpPage.edges[0].node.template.contact.contactUs.backgroundImage.sourceUrl})`,backgroundSize:props.allWpPage.edges[0].node.template.contact.contactUs.backgroundSize,backgroundPosition:props.allWpPage.edges[0].node.template.contact.contactUs.backgroundPosition,backgroundRepeat:props.allWpPage.edges[0].node.template.contact.contactUs.backgroundRepeat}}>
                    <ContactContainer>
                        <DescriptionRow>
                            <div className="description">
                                <h5 className="white">{props.allWpPage.edges[0].node.template.contact.contactUs.subHeader}</h5>
                                <h3 className="green">{props.allWpPage.edges[0].node.template.contact.contactUs.header}</h3>
                                <p className="white">{props.allWpPage.edges[0].node.template.contact.contactUs.description}</p>
                            </div>
                        </DescriptionRow>
                        <FormRow>
                            
                            <input className="name" type="text" placeholder="Your name"></input>
                            <input className="shop" type="text" placeholder="Your shop name"></input>
                            <input className="email" type="text" placeholder="Your email address"></input>
                            <input className="phone" type="text" placeholder="Your phone number"></input>
                            <input className="message" type="text area" placeholder="Message"></input>
                            <button className="submit blue-cta">Submit</button>
                        </FormRow>
                    </ContactContainer>
                </ContactWrapper>
            )}
            />
        </React.Fragment>

    )
};
export default Contact;