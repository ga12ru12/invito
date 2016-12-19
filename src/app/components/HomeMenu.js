import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
import '../../css/components/HomeMenu.css';
import logo from '../../media/icon.jpg';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HomeMenu extends PureComponent {
  render() {
    return (
      <div className="main-menu">
        <Link to="/">
          <img src={logo} className="logo-icon"/>
          <span className="title-menu">Invito</span>
        </Link>
        <Menu mode="horizontal">
          <SubMenu title={<span><Icon type="setting" />Quang.Hoang</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default HomeMenu;