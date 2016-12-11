import React, { PureComponent } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router';
import '../../css/components/HomeMenu.css'

class HomeMenu extends PureComponent {
  render() {
    return (
      <Navbar inverse={true} className="HomeMenu">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Restaurant</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem componentClass={Link} href="/dashboard" to="/dashboard">Dashboard</NavItem>
            <NavItem componentClass={Link} href="/orders" to="/orders">Orders</NavItem>
            <NavItem componentClass={Link} href="/kitchen" to="/kitchen">Kitchen</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HomeMenu;