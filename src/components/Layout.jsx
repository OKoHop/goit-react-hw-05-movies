import { NavLink, Outlet } from 'react-router-dom';
import { StyledList, StyledItem } from './GlobalStyles';

export const Layout = () => {
  return (
    <>
      <header>
        <StyledList>
          <StyledItem>
            <NavLink to="/">Home</NavLink>
          </StyledItem>
          <StyledItem>
            <NavLink to="/movies">Movies</NavLink>
          </StyledItem>
        </StyledList>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
