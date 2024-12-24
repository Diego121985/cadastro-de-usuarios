import styled from "styled-components";
import { Background } from "../TopBackground/styles";



export const Button = styled.button`
border: ${props => props.theme === "primary" ? "none" : "1px solid"};
background:${props => props.theme === "primary" ? "linear-gradient(180deg,#FE7E7D 0%, #FF6378 100%)" : "transparent"};
border-radius: 30px;
padding: 16px 32px;
color: #fff;
font-size: 16px;
width: fit-content;
cursor: pointer;

&:hover{
    ${props => props.theme === "primary" ? "opacity:0.8" : "color:red"};
}
&:active{
    opacity: 0.5;
}

`

