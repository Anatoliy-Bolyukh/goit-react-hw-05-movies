import styled from 'styled-components';

// export const Container = styled.div`
// display: flex;

// margin-left: auto;
// margin-right: auto;
// `


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

export const Title = styled.h2`
display: flex;
justify-content: center;
font-style: italic;
background: linear-gradient(331deg, rgba(61,107,134,0.16850490196078427) 52%, rgba(68,8,85,0.9248074229691877) 100%, rgba(0,212,255,1) 100%);
border-radius: 5px;
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