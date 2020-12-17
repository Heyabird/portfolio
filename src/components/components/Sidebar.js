import React from 'react';
import { StyledSideNav } from './StyledSideNav';
import { StyledNavItem } from './StyledNavItem';
import NavItem from './NavItem';
// import heya from '../../icons/heya.svg'
// import code from '../../icons/code.svg'
// import design from '../../icons/design.svg'
// import music from '../../icons/music.svg'


import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const imagesPath = {
  inactive: '/icons/code.svg',
  active: '/icons/code-active.svg'
}
class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heya: true,
      code: true,
      design: true,
      music: true,
      activePath: '/',
      items: [
        {
          path: '/', /* path is used as id to check which NavItem is active basically */
          name: 'heya',
          imagePath: '/icons/code.svg',
          activeImagePath: '/icons/code-active.svg',
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
          iconUrl: `{heya}`
        },
        {
          path: '/about',
          name: 'code',
          imagePath: '/icons/code.svg',
          activeImagePath: '/icons/code-active.svg',          
          key: 2,
          iconUrl: ''
        },
        {
          path: '/design',
          name: 'design',
          imagePath: '/icons/code.svg',
          activeImagePath: '/icons/code-active.svg',          
          key: 3,
          iconUrl: ''
        },
        {
          path: '/music',
          name: 'music',
          imagePath: '/icons/code.svg',
          activeImagePath: '/icons/code-active.svg',          
          key: 4,
          iconUrl: ''
        },
      ]
    }  
  }
  onItemClick = (path) => {
    // console.log("path: ", path)
    // this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
    this.setState({code: !this.state.code})
    this.setState({ activePath: path });
    console.log("image status : ", imagesPath['active'])
    console.log("active path : ", this.state.activePath)
  }

  getImageStatus = () => this.state.code ? 'inactive':'active'

  render() {
    const { items, activePath } = this.state;
    const { active } = true;
    const NavIcon = styled.div`x`;
    const ImageStatus = this.getImageStatus();
    console.log(ImageStatus)
    return (
      <StyledSideNav>
        {
          /* items = just array AND map() loops thru that array AND item is param of that loop */
          items.map((item) => {
            /* Return however many NavItems in array to be rendered */
            return (
              <NavItem path={item.path} name={item.name} imagePath={item.imagePath} onItemClick={this.onItemClick} active={item.path === activePath} key={item.key}/>

              // <StyledNavItem path={item.path} name={item.name} imagePath={item.imagePath} activeImagePath={item.activeImagePath} icon={item.icon} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key} icon={item.iconUrl}/>

              // <NavItem path={item.path} name={item.name} imagePath={item.imagePath} activeImagePath={item.activeImagePath} icon={item.icon} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key} icon={item.iconUrl}/>
            )
          })
        }
      </StyledSideNav>
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