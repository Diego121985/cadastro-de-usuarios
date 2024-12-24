import styled from "styled-components";

export const Form = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
max-width: 500px;

`




export const Container = styled.div`
display: flex;
flex-direction: column;
background-color:#181f36;;
height: 100vh;
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

export const ContainerInputs = styled.div`
display: flex;
gap: 50px;



`

export const Input = styled.input`
border-radius: 10px;
border: 1px solid #d2dae2;
background-color: #fff;
padding: 10px 20px;
width: 100%;
outline: none;
display: flex;



`

export const InputLabel = styled.label`
color: #fff;
font-size: 12px;
font-weight:500;
span{
    color: #ef4f45;
}


`


