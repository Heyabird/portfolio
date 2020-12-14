import React from 'react';
import { StyledSideNav } from './StyledSideNav';
import { StyledNavItem } from './StyledNavItem';
// import NavItem from './NavItem';
import heya from '../../icons/heya.svg'
import code from '../../icons/code.svg'
import design from '../../icons/design.svg'
import music from '../../icons/music.svg'


import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: '/',
      items: [
        {
          path: '/', /* path is used as id to check which NavItem is active basically */
          name: 'Heya',
          css: 'fa fa-fw fa-circle',
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
          iconUrl: `{heya}`
        },
        {
          path: '/about',
          name: 'Code',
          css: 'fa fa-fw fa-circle',
          key: 2,
          iconUrl: ''
        },
        {
          path: '/design',
          name: 'Design',
          css: 'fas fa-circle',
          key: 3,
          iconUrl: ''
        },
        {
          path: '/music',
          name: 'Music',
          css: 'fas fa-circle',
          key: 4,
          iconUrl: ''
        },
      ]
    }  
  }
  onItemClick = (path) => {
    console.log("path: ", path)
    this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
  }

  render() {
    const { items, activePath } = this.state;
    const { active } = true;
    const NavIcon = styled.div`x`;
    return (
      <StyledSideNav>
        <StyledNavItem active={active}>
          <Link to={items[0].path} onClick={this.onItemClick}>
            <NavIcon></NavIcon>
            <img src={heya} alt="icon"/>
            <p class="nav-text">heya</p>
          </Link>
        </StyledNavItem>
        <StyledNavItem active={active}>
            <Link to={items[1].path} onClick={this.onItemClick}>
              <NavIcon></NavIcon>
              <img src={code} alt="icon"/>
              <p class="nav-text">code</p>
            </Link>
        </StyledNavItem>
        <StyledNavItem active={active}>
            <Link to={items[2].path} onClick={this.onItemClick}>
              <NavIcon></NavIcon>
              <img src={design} alt="icon"/>
              <p class="nav-text">design</p>
            </Link>
        </StyledNavItem>
        <StyledNavItem active={active}>
            <Link to={items[3].path} onClick={this.onItemClick}>
              <NavIcon></NavIcon>
              <img src={music} alt="icon"/>
              <p class="nav-text">music</p>
            </Link>
        </StyledNavItem>
      </StyledSideNav>
      // <StyledSideNav>
      //   {
      //     /* items = just array AND map() loops thru that array AND item is param of that loop */
      //     items.map((item) => {
      //       /* Return however many NavItems in array to be rendered */
      //       return (
      //         <NavItem path={item.path} name={item.name} css={item.css} icon={item.icon} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key} icon={item.iconUrl}/>
      //       )
      //     })
      //   }
      // </StyledSideNav>
    );
  }
}

// export as default React component
export default class Sidebar extends React.Component {
  render() {
    return (
      <SideNav></SideNav>
    );
  }
}