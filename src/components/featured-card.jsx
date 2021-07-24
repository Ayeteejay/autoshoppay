import React from 'react';
import styled from 'styled-components';
import MatrixBackground from '../images/autoshoppay-featured-card-dot-matrix.svg';

const CardWrapper = styled.div`
background-image:url(${MatrixBackground});
background-color:${props=>props.theme.primaryColors.sable};
background-size:cover;
padding:3.5rem;
-webkit-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.5); 
box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.5);
margin:1rem 0;
`

const CompanyRow = styled.div`

`

const MonthlyRow = styled.div`
border-top:1px solid ${props=>props.theme.primaryColors.frost};
display:flex;
justify-content:space-between;
margin:1.5rem 0 0 0;
padding:1.5rem 0 0 0;
.sales{

}
.savings{

}
`
const FeaturedCard = (props) => {
    return (
        <CardWrapper>
            <CompanyRow>
                <img src={props.data.companyLogo === null ? "" : props.data.companyLogo.sourceUrl} alt={props.data.companyLogo === null ? "" : props.data.companyLogo.altText}/>
                <h4 className="white">{props.data.companyLogo === null ? props.data.companyName : ""}</h4>
            </CompanyRow>
            <MonthlyRow>
                <div className="sales">
                  <h5 className="white">Monthly Sales</h5>
                    <p className="white thick-header">{props.data.monthlySales}</p>
                </div>
                <div className="savings">
                <h5 className="green">Monthly Savings</h5>
                    <p className="green thick-header">{props.data.monthlySavings}</p>
                </div>
            </MonthlyRow>
        </CardWrapper>
    )
};
export default FeaturedCard