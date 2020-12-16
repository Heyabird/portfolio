import styled from "styled-components";

const breakpoint = 480;

export const StyledNavItem = styled.div`
  // height: 130px;
  // width: 4.5rem; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 3.2em;
    color: ${(props) => props.active ? "#FFAEED" : "black"};
    :hover {
      opacity: 0.6;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  @media (max-width: ${breakpoint}px) {
    img {
      width: 73%;
      height: auto;
    }
  }
`;