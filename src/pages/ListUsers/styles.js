import styled from "styled-components";

export const Container = styled.div`
background-color: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;

`

export const Title = styled.h2`

color: #fff;
text-align: center;
font-size: 30px;
font-style: normal;
font-weight: 600;


`

export const ContainerUsers = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 20px;
text-align: center;
margin-bottom: 20px;

@media (max-width:750px) {
    grid-template-columns: 250px;
}


`

export const CardUsers = styled.div`
background-color: #252d48;
padding: 16px;
border-radius: 32px;
justify-content: space-between;
align-items:center;
gap:20px;
max-width: 400px;


p{
    color: white;
    font-size: 14px;
    font-weight: 200;

}
h3{
    color:white;
   font-size:24px ;
   text-transform: capitalize;
}

`

export const TrashIcon = styled.img`
cursor: pointer;
padding-left: 0px;
background-color: white;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}


`

export const AvatarUser = styled.img`
height: 80px;

`