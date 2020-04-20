import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Logout } from '../Redux/Action';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const user = useSelector((state) => state.auth.username)

  const dispatch = useDispatch()

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Todo</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          
          <Nav navbar>
            {
              user
              ?
              <React.Fragment>
                <Link to='/todo'>
                  <NavItem>
                    Todo
                  </NavItem>
                </Link>
                <Link to='/' onClick={() => dispatch(Logout())}>
                  <NavItem>
                    Logout
                  </NavItem>
                </Link>
              </React.Fragment>
              :
              <React.Fragment>
                <Link to='/login'>
                  <NavItem>
                    Login
                  </NavItem>
                </Link>
                <Link to='/register'>
                  <NavItem>
                    Register
                  </NavItem>
                </Link>
              </React.Fragment>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;