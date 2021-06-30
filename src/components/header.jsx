import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link, graphql, StaticQuery} from 'gatsby';
import Logo from '../images/autoshoppay-logo-dark.svg';
import Background from '../images/autoshoppay-background.svg';

const Container = styled.div`
display:flex;
flex-flow:column;
justify-content:center;
align-items:center;
position:fixed;
width:100%;
background:${props=>props.theme.primaryColors.frost};
`

const Desktop = styled.div`
width:90%;
display:flex;
background:${props=>props.theme.primaryColors.frost};
justify-content:space-between;
align-items:center;
padding:1em 0;
z-index:999;
position:relative;
`

const Mobile = styled.div`
    width:100%;
    .mobile-container{
        // background-color:${props=>props.theme.primaryColors.aspBlue};
        background-color:rgba(0,54,255,0.98);
        background-image:url(${Background});
        background-repeat:no-repeat;
        background-position:350% 275%;
        background-size:90% 90%;
        width:100%;
        align-items:center;
        justify-content:center;
        display:flex;
        transition:${props=>props.theme.animationSpeeds.fast};        
        visibility:hidden;
        height:0;
        position:fixed;
    }
        .mobile-row{
            width:80%;
            height:100vh;     
            padding:2rem 0;
            transition:${props=>props.theme.animationSpeeds.fast};
            ul{
                list-style:none;
                display:flex;
                flex-flow:column;                
            }
            li{
                padding:0.75rem 0;
                &:not(:last-child){
                    a{
                        color:${props=>props.theme.primaryColors.frost};
                        font-size:1.5rem;
                        &:hover{
                            color:${props=>props.theme.primaryColors.amber};
                        }                
                    }
                }
           
            }            
        }
    .show{
        height:100%;
        visibility:visible;
    }
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

const DesktopLinkCol = styled.div`
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
cursor:pointer;
display:block;
height:16px;
  .topBun,.meat,.bottomBun{
      position:absolute;
      background:${props=>props.theme.primaryColors.aspBlue};
      transition:${props=>props.theme.animationSpeeds.fast};
      height:2px;
      width:30px;
  }
  .topBun{
      top:0px;
  }
  .meat{
      top:7px;
  }
  .bottomBun{
  bottom:0px;
  }
  .burger-flip{
      transform:translate(0,4px) rotate(-45deg);
  }
  .burger-revert{
      transform:translate(0,-10px) rotate(45deg);
  }
  .smash-burger{
      opacity:0;
      transform:translate(0,-5px);
  }
  @media(min-width:${props=>props.theme.breakPoints.lg}){
      display:none;
  }
`

const Header = ({data}) =>{
    const [isDesktop, setIsDesktop] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Hook for checking window size and height
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        });
    const useWindowSize = () => {
        useEffect(() => {
        function handleResize() {
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    };
    const size = useWindowSize();
    useEffect(()=>{
        const linkMenu = document.querySelectorAll("ul")[0];
        if(windowSize.width > 992){
            setIsDesktop(true);
        }else{            
            setIsDesktop(false);     
            setMobileMenu(false);       
        }
    },[windowSize.width]);

    // Open mobile dropdown menu
    const openMobileMenu = () =>{
        const mobileContainer = document.querySelector(".mobile-container");
        const bunTop = document.querySelector(".topBun");
        const burgerMiddle = document.querySelector(".meat");
        const bunBottom = document.querySelector(".bottomBun");
        mobileContainer.classList.toggle("show");
        bunTop.classList.toggle("burger-flip");
        burgerMiddle.classList.toggle("smash-burger");
        bunBottom.classList.toggle("burger-revert");
        if(mobileMenu === false){
            setMobileMenu(true);               
        }else if(mobileMenu){
            setMobileMenu(false);        
        };
    };
    return (
        <Container>
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
                <React.Fragment>
                <Desktop>
                    <LogoCol>
                        <Link to="/">
                            <img src={Logo} alt="AutoShopPay Logo" className="logo"/>
                        </Link>
                    </LogoCol>
                    <DesktopLinkCol>
                        <ul>     
                            {props.allWpMenu.edges[0].node.menuItems.nodes.map((value,index)=>{
                                const totalLinks = props.allWpMenu.edges[0].node.menuItems.nodes.length - 1;
                                if(index !== totalLinks){
                                    return (
                                        <li key={value.id}><a href={value.url} className="header" >{value.label}</a></li>
                                    )
                                }
                                else{
                                    return (
                                        <li key={value.id}><a href={value.url} className="amber-cta" >{value.label}</a></li>
                                    )
                                }
                            })}               
                        </ul>
                    </DesktopLinkCol>                
                    <Whopper onClick={()=>openMobileMenu()}>
                        <span className="topBun"></span>
                        <span className="meat"></span>
                        <span className="bottomBun"></span>
                    </Whopper>
                </Desktop>
                <Mobile>
                    <div className="mobile-container" style={{opacity: mobileMenu ? "1" : "0"}}>
                        <div className="mobile-row">
                            <ul>     
                                {props.allWpMenu.edges[0].node.menuItems.nodes.map((value,index)=>{
                                    const totalLinks = props.allWpMenu.edges[0].node.menuItems.nodes.length - 1;
                                    if(index !== totalLinks){
                                        return (
                                            <li key={value.id}><a href={value.url} className="header" >{value.label}</a></li>
                                        )
                                    }
                                    else{
                                        return (
                                            <li key={value.id}><a href={value.url} className="amber-cta" >{value.label}</a></li>
                                        )
                                    }
                                })}               
                            </ul>
                            
                        </div>  
                    </div>
                </Mobile>           
            </React.Fragment>   
            )}
            />
        </Container>
    )
};
export default Header