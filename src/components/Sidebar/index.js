import React from 'react'
import { CloseIcon, Icon, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to="about">About</SidebarLink>
            <SidebarLink onClick={toggle} to="discover">Discover</SidebarLink>
            <SidebarLink onClick={toggle} to="services">Services</SidebarLink>
            <SidebarLink onClick={toggle} to="signup">Sign up</SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to="/signin">Sign in</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  )
}

export default Sidebar
