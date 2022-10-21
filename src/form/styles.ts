import styled from 'styled-components'; 

export const Container = styled.main`
max-width: 1440px;
display: flex;
width: 1440px;
height: 586px;
padding: 60px 0px;
flex-direction: column;
align-items: flex-start;
flex-direction: row;
gap: 60px;
align-items: center;
`;

export const FormContainer = styled.div`
background: #fff;

`;
export const Form = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;

p{
    margin: 0;
    position: relative;

}

`;



export const FullInput = styled.div`
grid-column: 1 / 3;

`;
export const FullInputContainer = styled.div`
display: grid;
grid-gap: 20px;
`;

export const SelectDiv = styled.div`
position: relative;
border: 2px solid #E3E3E3;
border-radius: 8px;
&::after {
  content: "▾"; 
  color: black;
  margin-right: 10px;
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 20px;
  
`;


export const SelectButton = styled.select`
-moz-appearance: none;
-webkit-appearance: none;
background: white;
border: none;
border-radius: 0;
cursor: pointer;
padding: 12px;
width: 100%;
font-size: 18px;
&:focus {
  color: black;
}
`;

export const ButtonSend = styled.button`
width: 380px;
height: 50px;
align-items: center;
background: #E3E3E3;
border-radius: 8px;
border: none;
`

export const HiddenText = styled.span`
font-size: 15px;
margin: 10px 10px;
cursor: pointer;
`

