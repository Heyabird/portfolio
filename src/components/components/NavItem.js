import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StyledNavItem } from './StyledNavItem';
import styled from "styled-components";


export default class NavItem extends React.Component {

  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  }

  render() {
    const { active } = this.props;
    const NavIcon = styled.div`x`;
    return (
      <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon></NavIcon>
        </Link>
    </StyledNavItem>
    );
  }
}