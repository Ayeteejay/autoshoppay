import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
`

const ContactForm = styled.form`
display:grid;
grid-gap:2rem;
grid-template-columns:1fr;
grid-template-rows:repeat(6,1fr);
grid-template-areas: "your-name"
"your-dealer"
"your-email"
"your-phone"
"your-message"
"submit-button";
input,textarea{
    padding:1rem;
    font-family:"Work Sans", san-serif;
    font-size:1rem;
    width:100%;
    border:1px solid ${props=>props.theme.primaryColors.frost};
    color:${props=>props.theme.primaryColors.mintGreen};
    transition:all ${props=>props.theme.animationSpeeds.fast};
    background:none;
    &::placeholder{
        color:${props=>props.theme.primaryColors.frost};
    };
    &:focus{
        background:${props=>props.theme.primaryColors.mintGreen};
        color:${props=>props.theme.primaryColors.sable};
        &::placeholder{
            color:${props=>props.theme.primaryColors.sable};
        }
    }
}
.name{
    grid-area:your-name;
}        
.dealer{
    grid-area:your-dealer;
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
    grid-template-areas: "your-name your-dealer your-message"
                        "your-email your-phone your-message"
                        "submit-button . .";
}
.error-message{
    color:${props=>props.theme.primaryColors.amber};
}
`

const Contact = (props) =>{
    const formik = useFormik({
        initialValues: { fullName: "", dealerName: "", yourMessage:"", email: "",phoneNumber: "" },
        validationSchema: Yup.object({
          fullName: Yup.string()            
            .required("Full name is required"),
          dealerName: Yup.string()            
            .required("Dealer name is required"),
          yourMessage: Yup.string(),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email address is required"),
          phoneNumber: Yup.number().positive().integer(),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
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
                                <p className="section-subheader white">{props.allWpPage.edges[0].node.template.contact.contactUs.subHeader}</p>
                                <h3 className="green">{props.allWpPage.edges[0].node.template.contact.contactUs.header}</h3>
                                <div className="white" dangerouslySetInnerHTML={{__html:`${props.allWpPage.edges[0].node.template.contact.contactUs.description}`}}></div>
                            </div>
                        </DescriptionRow>
                        <FormRow>
                            <ContactForm onSubmit={formik.handleSubmit}>
                            <div className="name">
                            <input
                            placeholder="Your name" id="fullName" type="text"  {...formik.getFieldProps("fullName")}
                            />
                            {formik.touched.fullName && formik.errors.fullName ? <div className="error-message">{formik.errors.fullName}</div> : null}
                            </div>

                            <div className="dealer">
                            <input placeholder="Your dealer name" id="dealerName" type="text"  {...formik.getFieldProps("dealerName")}
                            />
                            {formik.touched.dealerName && formik.errors.dealerName ? <div className="error-message">{formik.errors.dealerName}</div> : null}
                            </div>

                            <div className="email">
                            <input placeholder="Your email address" id="email" type="email"  {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email ? <div className="error-message">{formik.errors.email}</div> : null}
                            </div>

                            <div className="phone">
                            <input placeholder="Your phone number" id="phoneNumber" type="text"  {...formik.getFieldProps("phoneNumber")}
                            />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className="error-message">{formik.errors.phoneNumber}</div> : null}
                            </div>

                            <textarea
                            className="message" placeholder="Message" id="yourMessage" type="text"  {...formik.getFieldProps("yourMessage")}
                            />

                            <button className="submit amber-cta">Submit</button>                            
                            </ContactForm>   
                        </FormRow>
                    </ContactContainer>
                </ContactWrapper>
            )}
            />
        </React.Fragment>

    )
};
export default Contact;