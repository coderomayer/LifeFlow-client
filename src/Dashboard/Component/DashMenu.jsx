import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;




const DashMenu = () => {


  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Dashboard",
      icon: <AppstoreOutlined />,
      key: "/dashboard",
    },
    {
      label: "Profile",
      icon: <ShopOutlined />,
      key: "profile",
    },
    {
      label: "Orders",
      icon: <ShoppingCartOutlined />,
      key: "/orders",
    },
    {
      label: "Customers",
      icon: <UserOutlined />,
      key: "/customers",
    },
  ];





  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout className='h-screen'>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        
        <Menu
          className=""
          mode="vertical"
          theme="dark"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={menuItems} // Pass the menuItems array here
        ></Menu>

      </Sider>
      <Layout>
       
      </Layout>
    </Layout>
  );
};
export default DashMenu;
