import React from 'react';
import { StyledSideNav } from './StyledSideNav';
import NavItem from './NavItem';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: '/',
      items: [
        {
          path: '/', /* path is used as id to check which NavItem is active basically */
          name: 'Home',
          css: 'fa fa-fw fa-circle',
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
        },
        {
          path: '/about',
          name: 'Code',
          css: 'fa fa-fw fa-circle',
          key: 2
        },
        {
          path: '/design',
          name: 'Design',
          css: 'fas fa-circle',
          key: 3
        },
        {
          path: '/music',
          name: 'Music',
          css: 'fas fa-circle',
          key: 4
        },
      ]
    }  
  }
  onItemClick = (path) => {
    this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
  }
  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        {
          /* items = just array AND map() loops thru that array AND item is param of that loop */
          items.map((item) => {
            /* Return however many NavItems in array to be rendered */
            return (
              <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key}/>
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