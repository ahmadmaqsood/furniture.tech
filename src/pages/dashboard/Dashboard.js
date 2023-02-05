import React from 'react';
import { Layout, theme } from 'antd';
import Topbar from 'pages/dashboard/Topbar';
import ContentFile from 'pages/dashboard/Content'

import Menu from './Menu';
const { Content, Sider } = Layout;
export default function Dashboard() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }} >
        <Sider
          width={200}
          style={{
            background: "#ff7f51",
            paddingTop: "60px",
            borderRight: "1px solid #e0e0e0",
          }}
          className="d-none d-md-block"
        >
          <Menu />
        </Sider>

        <Layout>
          {/* this is our navbar for dashboard */}
          <Topbar />

          <Layout style={{ padding: '20px 20px 20px', }}>
            <Content
              style={{
                padding: 0,
                margin: 0,
                minHeight: 280,
              }} >

              {/* content from file. All content is coming from this component */}
              <ContentFile />

            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
