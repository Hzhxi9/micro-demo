import React, { useState, Suspense, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';

import { Menu } from 'antd';

const BASE_NAME = (window as any).__POWERED_BY_QIANKUN__ ? '/react' : '/';

const menus = [
  { key: 'react', route: BASE_NAME === '/' ? '' : BASE_NAME, title: '主页' },
  { key: 'react-list', route: BASE_NAME + '/list', title: '列表页' },
];

const routes = [
  { exact: true, component: Home, path: BASE_NAME === '/' ? '' : BASE_NAME },
  { exact: true, component: List, path: BASE_NAME + '/list' },
];

function App(props: any) {
  const [refresh, setRefresh] = useState(0);
  const [selectedKeys, setSelectedKeys] = useState(['react']);

  useEffect(() => {
    const { hash } = window.location;
    const menu = menus.find(menu => `#${menu.route}` === hash);
    setSelectedKeys(() => [menu ? menu.key : 'react']);
  }, [refresh]);

  return (
    <Router>
      <section>
        {console.log(selectedKeys)}
        <Menu selectedKeys={selectedKeys} mode="horizontal" theme="dark" onClick={() => setRefresh(refresh => ++refresh)}>
          {menus.map(menu => (
            <Menu.Item key={menu.key}>
              <Link to={menu.route}>{menu.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <Suspense fallback={null}>
          <Switch>
            {routes.map(route => (
              <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
            ))}
          </Switch>
        </Suspense>
      </section>
    </Router>
  );
}

export default App;
