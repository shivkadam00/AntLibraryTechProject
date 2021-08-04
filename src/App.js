import React from "react";
import "./App.css";
import 'antd/dist/antd.css';

import AppHeader from "./Components/common/Header";
import AppHome from "./views/Home";
import AppFooter from "./Components/Homee/Footer";

import { Layout } from 'antd';
const { Header, Content ,Footer} = Layout;

function App() {
  return (
    <>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>
    </>
  );
};

export default App;
