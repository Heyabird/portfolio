import styled from "styled-components";

const mobile_breakpoint = 480;

export const StyledNavItem = styled.div`
  // height: 130px;
  // width: 4.5rem; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 10px;   /* Puts space between NavItems */

  a {
    font-size: 3.2em;
    border-radius: 50px;
    color: ${(props) => props.active ? "#007BFF" : "black"};
    transition: color 1s;

    :hover {
      // opacity: 0.5;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  img {
    width: 90px;
    transition: background-color 1s;
    border: ${(props) => props.active ? "1px solid #007BFF" : "1px solid black"};
    background-color: ${(props) => props.active ? "#007BFF" : ""};
    border-radius: ${(props) => props.active ? "10px" : "50px"}
  }
  @media (max-width: ${mobile_breakpoint}px) {
    margin-bottom: 0;
    

    img {
      width: 60%;
      min-width: 60px;
      height: auto;
      margin-top: 8px;
    }
  }
`;