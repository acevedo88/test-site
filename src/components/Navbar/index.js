import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>Outfitter</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='welcome'>Welcome</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='prod-dev'>Product Development</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='founders'>Founders</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='advisors'>Advisors</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar