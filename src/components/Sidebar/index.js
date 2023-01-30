import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    // SidebarBtnWrap,
    // SideBarRoute

 } from './SidebarElements'

export const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='welcome' onClick={toggle}>Welcome</SidebarLink>
                <SidebarLink to='prod-dev' onClick={toggle}>Product Development</SidebarLink>
                <SidebarLink to='founders' onClick={toggle}>Founders</SidebarLink>
                <SidebarLink to='advisors' onClick={toggle}>Advisors</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
