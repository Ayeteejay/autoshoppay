import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import "../styles/global.css"

import Header from './header.jsx';

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
        slow:"2s",
        normal:"1s",
        fast:"250ms",
    }
};

const ThemeWrapper = styled.div`
h2{
    font-size:2.1875rem
}
a{
    text-decoration:none;
}
a.header{
    font-weight:600;
    color:${props=>props.theme.primaryColors.sable};
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
`
const Container = styled.div`

`

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
           <ThemeWrapper>
                <Container>
                <Header></Header>
                    {children}
                </Container>
            </ThemeWrapper>
        </ThemeProvider>
    )
};
export default Layout