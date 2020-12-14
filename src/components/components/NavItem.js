import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StyledNavItem } from './StyledNavItem';
import styled from "styled-components";
import  heya from './heya.svg'


export default class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: heya
    }
  }

  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  }


  render() {
    console.log(this.props.icon);
    console.log(typeof this.props.icon);
    const { active } = this.props;
    const NavIcon = styled.div`x`;
    return (
      <StyledNavItem active={active}>
        <Link to={this.props.path} onClick={this.handleClick}>
          <NavIcon></NavIcon>
          {/* <img src={this.props.iconUrl} alt="icon"/> */}
          <img src={heya} alt="icon"/>
          <p class="nav-text">{this.props.name}</p>
        </Link>
    </StyledNavItem>
    );
  }
}