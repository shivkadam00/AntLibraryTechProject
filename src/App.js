import React from "react";
import "./App.css";
import 'antd/dist/antd.css';

import AppHeader from "./Components/common/Header";
import { Layout} from 'antd';
import AppHome from "./views/Home";
const { Header, Content } = Layout;

function App() {
  return (
   <>
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
    <AppHome/>
      </Content>
      </Layout>
    </>
  );
};

export default App;
