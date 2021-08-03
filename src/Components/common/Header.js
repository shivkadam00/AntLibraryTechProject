import React from "react";
import { Menu } from "antd"

function AppHeader() {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo" >
                <i className="fas fa-bolt"></i>
                {/* <i className="fas fa-bolt"></i> */}
                <a href="http://google.com">USD Services</a></div>
            <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="about">About</Menu.Item>
                <Menu.Item key="feachres">Features</Menu.Item>
                <Menu.Item key="howitworks">How it Works</Menu.Item>
                <Menu.Item key="faq">FAQ</Menu.Item>
                <Menu.Item key="pricing">Princing</Menu.Item>
                <Menu.Item key="contact">Contact</Menu.Item>
            </Menu>
        
        </div>
        </div>
        
    );
}
export default AppHeader;