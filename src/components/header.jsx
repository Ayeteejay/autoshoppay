import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Logo from '../images/autoshoppay-logo-dark.svg';

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const Row = styled.div`
width:90%;
display:flex;
justify-content:space-between;
align-items:center;
padding:1em 0;
`

const LogoCol = styled.div`
.logo{
    max-width:175px;
}
@media (min-width:${props=>props.theme.breakPoints.lg}){
    .logo{
        max-width:250px;   
    }
}
`

const LinkCol = styled.div`
display:none;
ul{
    list-style:none;
    display:flex;
}
li{
    &:not(:last-child){
        padding:0 4rem 0 0;
    }
}
@media (min-width:${props=>props.theme.breakPoints.lg}){
    display:block;
}
`

const Whopper = styled.div`
padding:0 2rem 0 0;
position:relative;
display:block;
  .topPatty,.meat,.bottomPatty{
      position:absolute;
      background:${props=>props.theme.primaryColors.aspBlue};
      height:2px;
      width:30px;
  }
  .topPatty{
      top:-8px;
  }
  .bottomPatty{
      top:8px;
  }
  @media(min-width:${props=>props.theme.breakPoints.lg}){
      display:none;
  }
`

const Header = () =>{
    return (
        <Container>
            <Row>
                <LogoCol>
                    <Link to="/">
                        <img src={Logo} alt="AutoShopPay Logo" className="logo"/>
                    </Link>
                </LogoCol>
                <LinkCol>
                    <ul>
                        <li><a href="#pricing" className="header">Pricing</a></li>
                        <li><a href="#about-us" className="header">About Us</a></li>
                        <li><a href="#contact-us" className="header">Contact Us</a></li>
                        <li><a href="mailto:asmith@autoshoppay.com" className="amber-cta">Book Appointment</a></li>
                    </ul>
                </LinkCol>
                <Whopper>
                    <span className="topPatty"></span>
                    <span className="meat"></span>
                    <span className="bottomPatty"></span>
                </Whopper>
            </Row>
        </Container>
    )
};
export default Header