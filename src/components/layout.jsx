import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import "../styles/global.css"

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
        bottom: "0 0 5rem 0",
        top: "5rem 0 0 0",
    }
};

const ThemeWrapper = styled.div`
h2,h3{
    font-size:2.1875rem;
    line-height:1.1;
    padding:0 0 1.5rem 0;
}
h3.blue{
    color:${props=>props.theme.primaryColors.aspBlue};
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
.icon{
    max-width:50px;
    padding:0 0 15px 0;
}


`
const Container = styled.div`
padding:75px 0 0 0;
`

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
           <ThemeWrapper>
           <Header></Header>
                <Container>         
                    {children}
                </Container>
                <Footer></Footer>
            </ThemeWrapper>
        </ThemeProvider>
    )
};
export default Layout