import styled from 'styled-components'; 

export const Contact = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const ContactBox = styled.div`
width: clamp(100px, 100%, 1000px);
margin: 40px 15px;
display: flex;
flex-wrap: wrap;
@media only screen and (max-width: 400px) {
  ContactBox{
    width: 95%;
    margin: 8% 5%;
  }
}`

export const Form = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;

@media only screen and (max-width: 600px) {
  {
    grid-gap: 5px;
   }}
`

export const FormItem = styled.div`
position: relative;
`


export const FormInput = styled.input`
width: 100%;
border: 1px solid #bdbdbd;
border-radius: 5px;
padding: 1em; 
font-size: 13px;
`


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
border-radius: 8px;
cursor: pointer;
padding: 12px;
width: 100%;
font-size: 13px;
&:focus {
  color: black;
}
`;



export const HiddenText = styled.div`
margin: 10px 10px;
cursor: pointer;
align-items: center;
color: black; 
 p{
  font-size: 12px;
  color: black; 


 }
`
export const FullInput = styled.div`
grid-column: 1 / 3;

`

export const FullInputContainer = styled.div`
display: grid;
grid-gap: 20px;
`

export const Button = styled.button`
font: inherit;
font-size: 15px;
color: inherit;
background-color: grey;
border: none;
cursor: pointer;
padding: 13px 30px;
align-self: flex-start;
justify-self: flex-end;
margin: 10px;


&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}


`