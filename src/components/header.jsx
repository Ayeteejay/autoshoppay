import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link, graphql, StaticQuery} from 'gatsby';
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
.desktop{
color:blue
}
.mobile{
    color:red
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

const Header = ({data}) =>{
    const [isDesktop,setIsDesktop] = useState(true);
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
    // For displaying size of window
    // const size = useWindowSize();

    // Working on this to check window size
    useEffect(()=>{
        const linkMenu = document.querySelectorAll("ul")[0];
        
        if(windowSize.width > 992){
            
            setIsDesktop(true);
            linkMenu.className = "desktop";
        }else{
            
            setIsDesktop(false);
            linkMenu.className = "mobile";
        }
    })
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
                <Row>
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
                <Whopper>
                    <span className="topPatty"></span>
                    <span className="meat"></span>
                    <span className="bottomPatty"></span>
                </Whopper>
            </Row>
            )}
            />
        </Container>
    )
};
export default Header