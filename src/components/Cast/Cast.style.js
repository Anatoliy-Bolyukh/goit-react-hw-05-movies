import styled from 'styled-components';

export const List = styled.ul`
display: flex;
justify-content: center;
gap: 30px;
flex-wrap: wrap;
text-decoration: none;

`

export const Item = styled.li`
list-style: none

`


export const Img = styled.img`
display: flex;
gap: 30px;
width: 300px;
border-radius: 5px;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

&:hover{
    transform: scale(0.9);
}
`