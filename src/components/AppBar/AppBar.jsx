// import { NavLink } from 'react-router-dom';
import { Header, AppLink } from './AppBar.style';


const AppBar = () => {
  return (
      <Header>
      <AppLink to="/movies">Movies</AppLink>
      <AppLink to="/" end>home</AppLink>
    </Header>
  );
};

export default AppBar;
