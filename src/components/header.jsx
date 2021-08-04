import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link, graphql, StaticQuery} from 'gatsby';
import DarkLogo from '../images/autoshoppay-logo-dark.svg';
import Background from '../images/autoshoppay-background.svg';

const HeaderContainer = styled.div`
display:flex;
flex-flow:column;
justify-content:center;
align-items:center;
position:fixed;
width:100%;
background:${props=>props.theme.primaryColors.frost};
z-index:999;
-webkit-box-shadow: 0px 5px 18px 2px rgba(0,0,0,0.10); 
box-shadow: 0px 5px 18px 2px rgba(0,0,0,0.10);
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
            padding:3rem 0;
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
   width:175px;
}
@media (min-width:${props=>props.theme.breakPoints.lg}){
    .logo{
       width:250px;   
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
  .top-bun,.meat,.bottom-bun{
      position:absolute;
      background:${props=>props.theme.primaryColors.aspBlue};
      height:2px;
      width:30px;
  }
  .top-bun{
    top:0px;
    transition:all 400ms;
  }
  .meat{
    top:7px;
    transition:all 300ms;
  }
  .bottom-bun{
    bottom:0px;
    transition:all 200ms;
  }
  .grill{
    opacity:0;
    width:0;   
  }
  .lettuce{
      position:relative;
      top:50%;
      left:50%;
      opacity:0;
      transition:all 500ms;
  }
  .top-lettuce, .bottom-lettuce{
    position:absolute;
    background:${props=>props.theme.primaryColors.aspBlue};
    height:2px;
    width:30px;
    transition:all 500ms;
  }
  .cook{
      opacity:1;
  }
  .top-slice{
    transform:rotate(-45deg);
  }
  .bottom-slice{
    transform:rotate(45deg);
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
        // const size = useWindowSize();
    useEffect(()=>{
        // const linkMenu = document.querySelectorAll("ul")[0];
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
        const bunTop = document.querySelector(".top-bun");
        const burgerMiddle = document.querySelector(".meat");
        const bunBottom = document.querySelector(".bottom-bun");
        const lettuceHead = document.querySelector(".lettuce");
        const lettuceTop = document.querySelector(".top-lettuce");
        const lettuceBottom = document.querySelector(".bottom-lettuce");
        mobileContainer.classList.toggle("show");
        bunTop.classList.toggle("grill");
        burgerMiddle.classList.toggle("grill");
        bunBottom.classList.toggle("grill");
        lettuceHead.classList.toggle("cook");
        lettuceTop.classList.toggle("top-slice");
        lettuceBottom.classList.toggle("bottom-slice");
        if(mobileMenu === false){
            setMobileMenu(true);               
        }else if(mobileMenu){
            setMobileMenu(false);        
        };
    };
    return (
        <HeaderContainer>
            <StaticQuery query={
                graphql`
                {
                    allWpMenu(filter: {name: {eq: "Header Menu"}}) {
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
                            <img src={DarkLogo} alt="AutoShopPay Logo" className="logo"/>
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
                        <span className="top-bun"></span>
                        <span className="meat"></span>
                        <span className="bottom-bun"></span>
                        <span className="lettuce">
                            <span className="top-lettuce"></span>
                            <span className="bottom-lettuce"></span>
                        </span>
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
                                            <li key={value.id}><a href={value.url} className="header" onClick={()=>openMobileMenu()}>{value.label}</a></li>
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
        </HeaderContainer>
    )
};
export default Header