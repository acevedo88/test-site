import React from 'react'
// import {FaBars} from 'react-icons/fa'
import Logo from '../../images/shed_white.png'
import {
    Nav, 
    // NavbarContainer, 
    // NavLogo, 
    // MobileIcon, 
    // NavMenu, 
    // NavItem, 
    // NavLinks,
    TestLogo
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <TestLogo src={Logo}></TestLogo>
        {/* <NavbarContainer>
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
        </NavbarContainer> */}
    </Nav>
    </>
  )
}

export default Navbar