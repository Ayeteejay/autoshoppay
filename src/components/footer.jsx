import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Link, graphql, StaticQuery} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
import LightLogo from '../images/autoshoppay-logo-light.svg';

const shiftingGradient = keyframes`
0%{
    background-position:0% 50%;
}
50%{
    background-position: 100% 50%;
}
100%{
    background-position:0% 50%;
}
`

const FooterWrapper = styled.div`
background-image: linear-gradient(90deg, ${props=>props.theme.primaryColors.aspBlue}, ${props=>props.theme.primaryColors.rain});
// background-size:500% 500%;
// animation: ${shiftingGradient} 2s ease infinite;
display:flex;
flew-flow:column;
align-items:center;
justify-content:center;
width:100%;
`;

const FooterContainer = styled.div`
width:75%;
display:flex;
flex-flow:column;
justify-content:space-between;
align-items:flex-start;
padding: ${props=>props.theme.spacing.topBottom};
`

const LinkRow = styled.div`
width:100%;
display:flex;
flex-flow:column;
padding:0 0 2rem 0;
@media (min-width:${props=>props.theme.breakPoints.lg}){
    justify-content:space-between;
    align-items:flex-start;
    flex-flow:row;
}
`



const LogoCol = styled.div`
.logo{
   width:175px;
}
@media (min-width:${props=>props.theme.breakPoints.lg}){
    .logo{
        width:250px;   
    }
}
`

const LinkCol = styled.div`
display:flex;
flex-flow:column;
color:${props=>props.theme.primaryColors.frost};
padding:1rem 0;
.product{
    ul{
        list-style:none;    
    }
    li{
        line-height:1.75;
        &:first-child{
            color:${props=>props.theme.primaryColors.frost};
            font-weight:600;
            padding:0 0 0.5rem 0;
        }
    }
}
.contact{
    display:flex;
    flex-flow:column;
    justify-content:space-between;
    padding:1.5rem 0 0 0;
        p{
            line-height:1.5;
        }
        p.title{
            font-weight:600;
            padding:0 0 0.5rem 0;
            line-height:1.75;
        }
        p.contact-info{
            padding:1rem 0 0 0;
        }
}
@media (min-width:${props=>props.theme.breakPoints.lg}){
    flex-flow:row;   
    padding:0;
    .contact{
        padding:0 0 0 4rem;
    }
}
`
const LegalRow = styled.div`
border-top:1px solid ${props=>props.theme.primaryColors.frost};
width:100%;
display:flex;
flex-flow:column;
justify-content:space-between;
align-items:flex-start;
padding:2rem 0;
p{
    color:${props=>props.theme.primaryColors.frost};
    font-weight:200;
    letter-spacing:0.5px;
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    flex-flow:row;
}
`

const SocialCol = styled.div`
display:flex;
justify-content:flex-start;
width:100%;
padding:1rem 0 0 0;
a{
    padding:0 1.5rem 0 0;
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    width:auto;
    padding:0;
    a{
        padding:0 0 0 1.5rem;
    }
}
`

const Footer = () => {

    const copyrightYear = () => (new Date()).getFullYear();
    
    return (
        <FooterWrapper>
            <StaticQuery query={
                graphql`
                {
                    allWpMenu(filter: {name: {eq: "Footer Menu"}}) {
                      edges {
                        node {
                          id
                          menuItems {
                            nodes {
                              id
                              url
                              label
                            }
                          }
                        }
                      }
                    }
                  }                  
                `
            }
        render={props=>(
            <FooterContainer>
                <LinkRow>             
                        <LogoCol>
                            <Link to="/">
                            <img src={LightLogo} alt="AutoShopPay Logo" className="logo"/>
                            </Link>
                        </LogoCol>    
                <LinkCol>
                        <div className="product">
                        <ul>
                            <li>Product</li>
                            {props.allWpMenu.edges[0].node.menuItems.nodes.map((value)=>{
                                return (
                                    <li key={value.id}><a href={value.url} className="footer">{value.label}</a></li>
                                )
                            })}
                        </ul>
                        </div>
                        <div className="contact">                          
                            <p className="title">Contact</p>
                            <p>2550 Meridian Blvd Ste 200<br></br>Franklin TN 37067</p>
                            <p className="contact-info">(619)990-8133<br></br><a href="mailto:hello@autoshoppay.com" className="footer">hello@autoshoppay.com</a></p>
                        </div>
                    </LinkCol>
                </LinkRow>   
                <LegalRow>
                    <p>Copyright &copy; AutoShopPay {copyrightYear()}. All rights reserved.</p>
                    <SocialCol>
                        <a href="https://www.facebook.com/autoshoppay" target="_blank" className="footer" rel="noopener noreferrer" aria-label="AutoShopPay Facebook"><FontAwesomeIcon icon={faFacebookF} size="lg" ></FontAwesomeIcon></a>
                        <a href="https://twitter.com/autoshoppay" target="_blank" className="footer" rel="noopener noreferrer" aria-label="AutoShopPay Twitter"><FontAwesomeIcon icon={faTwitter} size="lg" ></FontAwesomeIcon></a>
                    </SocialCol>
                </LegalRow>
            </FooterContainer>   
        )}
        />
        </FooterWrapper>
    )
};
export default Footer;