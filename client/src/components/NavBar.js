import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';

class Navigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgPink = {backgroundColor: '#2E4053'}
    return(
          <header>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/home">
                  <strong>Navbar</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                  <MDBNavLink  to="/home">Home</MDBNavLink >
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink  to="/about">About</MDBNavLink >
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink  to="/attendance">Attendance</MDBNavLink >
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink  to="/bird">Bird</MDBNavLink >
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink  to="/aviary">Aviary</MDBNavLink >
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink  to="/contact">Contact</MDBNavLink >
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
    );
  }
}
 
export default Navigation;
