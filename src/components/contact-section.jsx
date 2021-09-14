import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactWrapper = styled.div`
display:flex;
justify-content:center;
padding:${props => props.theme.spacing.lgTopBottom};
`

const ContactContainer = styled.div`
width:75%;
`

const DescriptionRow = styled.div`
display:grid;
grid-template-columns:1fr;
padding:${props => props.theme.spacing.bottom};
.description{
}
@media (min-width:${props => props.theme.breakPoints.lg}){
  grid-template-columns:1fr 1fr;
}
`

const FormRow = styled.div`
.success-message{
  opacity:0;
  visibility:hidden;
  max-height:0;
  transition: all ${props => props.theme.animationSpeeds.slow};
}
.show-success-message{
  opacity:1;
  visibility:visible;
  max-height:5000px;
}
.contact-form{
  transition:all ${props => props.theme.animationSpeeds.fast};
  max-height:5000px;
  visibility: visible;
  display:grid;
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
      border:1px solid ${props => props.theme.primaryColors.frost};
      color:${props => props.theme.primaryColors.mintGreen};
      transition:all ${props => props.theme.animationSpeeds.fast};
      background:none;
      &::placeholder{
          color:${props => props.theme.primaryColors.frost};
      };
      &:focus{
          background:${props => props.theme.primaryColors.mintGreen};
          color:${props => props.theme.primaryColors.sable};
          &::placeholder{
              color:${props => props.theme.primaryColors.sable};
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
      padding:5% 0 0 0;
  }
  @media(min-width:${props => props.theme.breakPoints.md}){
      grid-template-columns:repeat(3,1fr);
      grid-template-rows:repeat(3,1fr);
      grid-template-areas: "your-name your-dealer your-message"
                          "your-email your-phone your-message"
                          "submit-button . .";
  }
  .error-message{
      color:${props => props.theme.primaryColors.amber};
      padding:2% 0 5% 0;
      font-size:0.75rem;    
  }
  @media(min-width:${props => props.theme.breakPoints.lg}){
    grid-gap:2rem;
    .submit{
      padding:0;
    }
  }
}
.successful-submission{
  opacity:0;
  visibility:hidden ;
  max-height:0;
}
`
const Contact = (props) => {
  const formik = useFormik({
    initialValues: { fullName: "", dealerName: "", email: "", phoneNumber: "", yourMessage: "" },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Full name is required."),
      dealerName: Yup.string(),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email address is required."),
      phoneNumber: Yup.number().positive().integer(),
      yourMessage: Yup.string(),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const contactForm = document.querySelector(".contact-form");
      contactForm.classList.toggle("successful-submission");
      const successMessage = document.querySelector(".success-message");
      successMessage.classList.toggle("show-success-message");
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/ayeteejay/google_sheets/GktdmMHVXXQfYNMb?tabId=Contact",
          {
            method: "post",
            body: JSON.stringify([Object.values(values)]),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const json = await response.json();
        console.log("Success:", JSON.stringify(json));

      } catch (error) {
        console.error("Error:", error);

      }
      setSubmitting(false);
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
                  
            `} render={props => (
          <ContactWrapper id="contact-us" style={{ backgroundColor: props.allWpPage.edges[0].node.template.contact.contactUs.backgroundColor, backgroundImage: `url(${props.allWpPage.edges[0].node.template.contact.contactUs.backgroundImage.sourceUrl})`, backgroundSize: props.allWpPage.edges[0].node.template.contact.contactUs.backgroundSize, backgroundPosition: props.allWpPage.edges[0].node.template.contact.contactUs.backgroundPosition, backgroundRepeat: props.allWpPage.edges[0].node.template.contact.contactUs.backgroundRepeat }}>
            <ContactContainer>
              <DescriptionRow>
                <div className="description">
                  <p className="section-subheader white">{props.allWpPage.edges[0].node.template.contact.contactUs.subHeader}</p>
                  <h3 className="green">{props.allWpPage.edges[0].node.template.contact.contactUs.header}</h3>
                  <div className="white" dangerouslySetInnerHTML={{ __html: `${props.allWpPage.edges[0].node.template.contact.contactUs.description}` }}></div>
                </div>
              </DescriptionRow>
              <FormRow>
                <form className="contact-form" onSubmit={formik.handleSubmit}>
                  <div className="name">
                    <input
                      placeholder="Your name*" id="fullName" type="text"  {...formik.getFieldProps("fullName")}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? <div className="error-message">{formik.errors.fullName}</div> : null}
                  </div>

                  <div className="dealer">
                    <input placeholder="Your dealer name" id="dealerName" type="text"  {...formik.getFieldProps("dealerName")}
                    />
                  </div>

                  <div className="email">
                    <input placeholder="Your email address*" id="email" type="email"  {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? <div className="error-message">{formik.errors.email}</div> : null}
                  </div>

                  <div className="phone">
                    <input placeholder="Your phone number" id="phoneNumber" type="text"  {...formik.getFieldProps("phoneNumber")}
                    />
                  </div>

                  <textarea
                    className="message" placeholder="Message" id="yourMessage" type="text"  {...formik.getFieldProps("yourMessage")}
                  />
                  <div className="submit">
                    <button className="amber-cta" type="submit">Submit</button>
                  </div>

                </form>

                <div className="success-message">
                  <h3 className="green">Thank you!</h3>
                  <p className="white">We will be in touch with you shortly.</p>
                </div>
              </FormRow>
            </ContactContainer>
          </ContactWrapper>
        )}
      />
    </React.Fragment>

  )
};
export default Contact;