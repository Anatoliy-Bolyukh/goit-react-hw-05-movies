import styled from 'styled-components';

export const MoviesForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background: linear-gradient(331deg, rgba(61,107,134,0.16850490196078427) 52%, rgba(121,9,113,1) 100%, rgba(0,212,255,1) 100%);;
  border-radius: 3px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 20px;
`;

export const MoviesInput = styled.input`
  display: inline-block;
  width: 100%;
  background: linear-gradient(331deg, rgba(61,107,134,0.16850490196078427) 52%, rgba(121,9,113,1) 100%, rgba(0,212,255,1) 100%);;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  /* color: #7a00ff; */
  
  &::placeholder {
    font-size: 18px;
  }
  &::selection {
    color: black;
    background: #7a00ff;
  }
`;

export const MoviesBtn = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  background: linear-gradient(331deg, rgba(61,107,134,0.16850490196078427) 52%, rgba(121,9,113,1) 100%, rgba(0,212,255,1) 100%);;
  background-image: url('https://cdn-icons-png.flaticon.com/128/8443/8443367.png');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    background-size: 55%;
  }
`;

export const BtnIcon = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
  background-color: transparent;
`;