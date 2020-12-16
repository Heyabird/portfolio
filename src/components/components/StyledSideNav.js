import styled from "styled-components";
/* This defines the actual bar going down the screen */

const breakpoint = 480;

export const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  // height: 80%;
  // width: 100px;     /* Set the width of the sidebar */
  z-index: 2;      
  top: 2rem;      /* Stay at the top */
  background-color: #fff; /* White */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
  margin-left: 1rem;

  @media (max-width: ${breakpoint}px) {
    position: inherit;
    width: inherit;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;

