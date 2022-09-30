import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
export const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
`;
export const BtnBack = styled(Link)`
  display: flex;
  max-width: 30px;
  max-height: 30px;
  padding: 10px;
 padding-left: 50px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 30px;
  text-decoration: none;
  background-color: black;
  border-radius: 7px;
  color: white;
  font-family: 'Caveat Brush';
  &.active {
    /* color: gray; */
    color:#7a00ff ;
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    /* color: gray; */
    color: #7a00ff;
  }
`;
export const MainWrap = styled.div`
  background-color: black;
  max-width: 1125px;
  margin: 0 auto;
  border-radius: 50px;
  max-height: 735px;
  box-shadow: 3px 3px 9px black;
`;
export const Image = styled.img`
  max-width: 400px;
  margin: 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  max-height: 725px;
`;
export const MovieWrapper = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;
export const Title = styled.h1`
  font-family: 'Caveat Brush';
  font-size: 40px;
  color: black;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const ScoreParagrapher = styled.p`
  font-family: 'Caveat Brush';
  font-size: 40px;
  color: orange;
  margin: 0;
  color: #fbab7e;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const OverviewTitle = styled.h2`
  font-family: 'Caveat Brush';
  color: orange;
  font-size: 40px;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const GenresTitle = styled.h2`
  font-family: 'Caveat Brush';
  font-size: 40px;
  color: orange;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const OverviewParagrapher = styled.p`
  font-family: 'Caveat Brush';
  max-width: 700px;
  color: orange;
  font-size: 30px;
  margin: 0;
  color: #fbab7e;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const GenresParapher = styled.p`
  font-family: 'Caveat Brush';
  font-size: 40px;
  color: orange;
  margin: 0;
  color: #fbab7e;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const NavBtn = styled(NavLink)`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 17px;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    transform: scale(1.125);
  }

  &.active {
    color: #7a00ff;
  }

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
