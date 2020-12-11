import styled from "styled-components";
/* This defines the actual bar going down the screen */
export const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 100px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #fff; /* White */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;