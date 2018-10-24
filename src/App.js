import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import LayoutContent from './layout/LayoutContent'

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            <LayoutContent name="test"></LayoutContent>
          </Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;
