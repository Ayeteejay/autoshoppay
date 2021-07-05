import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Link, graphql, StaticQuery} from 'gatsby';
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
width:90%;
display:flex;
flex-flow:column;
justify-content:space-between;
align-items:flex-start;
padding: ${props=>props.theme.spacing.topBottom};
`

const LinkRow = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:flex-start;
padding:0 0 2rem 0;
`

const LegalRow = styled.div`
border-top:1px solid ${props=>props.theme.primaryColors.frost};
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:2rem 0;
p{
    color:${props=>props.theme.primaryColors.frost};
    font-weight:200;
    letter-spacing:0.5px;
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

}

`

const SocialCol = styled.div`

`

const Footer = () => {
    return (
        <FooterWrapper>
            <StaticQuery query={
                graphql`
                {
                    allWpMenu {
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
                    <LogoCol><img src={LightLogo} alt="AutoShopPay Logo" className="logo"/></LogoCol>    
                    <LinkCol>
                        <div className="product">
                        <ul>
                            <li>Product</li>
                            {props.allWpMenu.edges[0].node.menuItems.nodes.map((value,index)=>{
                                return (
                                    <li key={value.id}><a href={value.url} className="footer">{value.label}</a></li>
                                )
                            })}
                        </ul>
                        </div>
                        <div className="contact">
                            <p>2550 Meridian Blvd Ste 200<br></br>Franklin TN 37067</p>
                        </div>
                    </LinkCol>
                </LinkRow>   

                <LegalRow>
                    <p>Copyright &copy; AutoShopPay 2021. All rights reserved.</p>
                    <SocialCol>
                        <p>Twitter</p>
                    </SocialCol>
                </LegalRow>
            </FooterContainer>   
        )}
        />
        </FooterWrapper>
    )
};
export default Footer;