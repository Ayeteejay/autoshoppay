import React from 'react';
import Helmet from 'react-helmet';
import styled, {ThemeProvider} from 'styled-components';
import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bullet from '../images/autoshoppay-bullet.svg';

import Header from './header.jsx';
import Footer from './footer.jsx';

const theme = {
    primaryColors: {
        aspBlue: "#0036FF",
        amber: "#ff5e2b",
        mintGreen: "#00ffb5",
        sable: "#001233",
        frost: "#fff",
        rain: "#6300ff",
    },
    secondaryColors:{
        lightAspBlue: "#EFF2FF",
        lightAmber: "#FFEBE5",
        lightMintGreen: "#EBFFF9",
        darkAmber: "#F24C17",
        darkMintGreen: "#00A374",
        lightGray:"#C7C7C7",
        offGray:"#F2F2F2",
    },
    breakPoints:{
        xs: "450px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
    },
    animationSpeeds:{
        extraSlow:"2s",
        slow:"1.5s",
        normal:"1s",
        fast:"500ms",
        extraFast:"250ms",
    },
    spacing:{
        topBottom: "5rem 0",
        lgTopBottom: "10rem 0",
        bottom: "0 0 5rem 0",
        top: "5rem 0 0 0",
    }
};

const ThemeWrapper = styled.div`
h1{
    font-size:3.125rem;
    padding:0 0 1.5rem 0;
}
h2,h3{
    font-size:2.1875rem;
    line-height:1.3;
    padding:0 0 1.5rem 0;
}
h5{
    font-size:0.9375rem;
    text-transform:uppercase;
    font-weight:600;
    padding:0 0 0.5rem 0;
}
a{
    text-decoration:none;
}
p{
    line-height:1.5;
}
p.small-header{
    font-size:1.4375rem;
    font-weight:500;
}
p.medium-header{
    font-size:1.4375rem;
    font-weight:700;
}
p.large-header{
    font-size:2.1875rem;
    line-height:1.1;
    padding:0 0 1.5rem 0;
}
p.thick-header{
    font-size:2.1875rem;
    line-height:1.1;
    padding:0 0 1.5rem 0;
    font-weight:600
}
a.header{
    font-weight:600;
    color:${props=>props.theme.primaryColors.sable};
    transition:${props=>props.theme.animationSpeeds.fast};
    &:hover{
        color:${props=>props.theme.primaryColors.amber};
    }
}
a.footer{
    color:${props=>props.theme.primaryColors.frost};
    transition:${props=>props.theme.animationSpeeds.fast};
    &:hover{
        color:${props=>props.theme.primaryColors.amber};
    }
}
.amber-cta{
    font-weight:600;
    border:1px solid ${props=>props.theme.primaryColors.amber};
    background:${props=>props.theme.primaryColors.amber};
    color:${props=>props.theme.primaryColors.frost};
    transition:${props=>props.theme.animationSpeeds.fast};
    display:flex;
    justify-content:center;
    align-items:center;
    padding:1rem 0;
    &:hover{
        background:none;
        color:${props=>props.theme.primaryColors.amber};
    }
    @media(min-width:${props=>props.theme.breakPoints.lg}){
        padding:1rem 1.75rem;
        display:inline;
    }
}
.frost-cta{
    font-weight:600;
    border:1px solid ${props=>props.theme.primaryColors.frost};
    color:${props=>props.theme.primaryColors.frost};
    transition:${props=>props.theme.animationSpeeds.fast};
    padding:1rem 0;
    display:block;
    text-align:center;
    max-width:35%;
    margin:1rem 0 0 0;
    &:hover{
        color:${props=>props.theme.primaryColors.frost};
        background:${props=>props.theme.primaryColors.amber};
        border:1px solid ${props=>props.theme.primaryColors.amber};
    }
    @media(min-width:${props=>props.theme.breakPoints.lg}){
        padding:1rem 1.5rem;
    }
}
.blue-cta{
    font-weight:600;
    border:1px solid ${props=>props.theme.primaryColors.aspBlue};
    background:${props=>props.theme.primaryColors.aspBlue};
    color:${props=>props.theme.primaryColors.frost};
    transition:${props=>props.theme.animationSpeeds.fast};
    padding:1rem 0;
    text-align:center;
    &:hover{
        background:none;
        color:${props=>props.theme.primaryColors.aspBlue};
    }
    @media(min-width:${props=>props.theme.breakPoints.lg}){
        padding:1rem 1.5rem;
    }
}
ul.orange-bullet{
    list-style-image: url(${Bullet});
    margin:0 0 0 1.5rem;
    li{
        line-height:1.6;
    }
}
.icon{
    max-width:50px;
    padding:0 0 15px 0;
}
.blue{
    color:${props=>props.theme.primaryColors.aspBlue};
}
.green{
    color:${props=>props.theme.primaryColors.mintGreen};
}
.white{
    color:${props=>props.theme.primaryColors.frost};
}
.uppercase{
    text-transform:uppercase
}
.fluid-img{
max-width:100%;
}
button{
    font-size:1rem;
    cursor:pointer;
}
.slide{
    padding:0 10px 25px 10px;
    cursor:grab;
}
ul.slick-dots li.slick-active{
    background-color:#0036FF;    
    border-radius:50%;
    height:12px;
    transition:all ${props=>props.theme.animationSpeeds.extraFast} ease-in-out;
}
ul.slick-dots li{
    height:12px;
    width:12px;
}
`
const Container = styled.div`
padding:50px 0 0 0;
`

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Helmet>
                <meta name="icon" href="../images/autoshoppay-icon.svg"/>
                <meta name="keywords" content="AutoShopPay"/>
                <meta name="description" content="The definitive payment solution for all auto shops."/>
            </Helmet>
        <ThemeProvider theme={theme}>
           <ThemeWrapper>
           {/* <Header></Header> */}
                <Container>         
                    {children}
                </Container>
                <Footer></Footer>
            </ThemeWrapper>
        </ThemeProvider>
        </React.Fragment>
    )
};
export default Layout