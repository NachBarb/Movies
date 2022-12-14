import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./MenuTop.scss"

const MenuTop = () => {
  return (<div className="menu-top">
    <div className="menu-top_logo">
      <Logo />
    </div>
    <Menu className="menu-top_listMenu" theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ lineHeight: "64px" }}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/newMovies">Ultimos lanzamientos</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/popular">Populares</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/search">Buscador</Link>
      </Menu.Item>
    </Menu>
  </div>);
};

export default MenuTop;
