import React, { useState, Suspense, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';

import { Menu } from 'antd';

const BASE_NAME = (window as any).__POWERED_BY_QIANKUN__ ? '/react' : '';

const menus = [
  { key: 'react', route: '/', title: '主页' },
  { key: 'react-list', route: '/list' , title: '列表页' },
];

function App() {
  const [refresh, setRefresh] = useState(0);
  const [selectedKeys, setSelectedKeys] = useState(['react']);

  useEffect(() => {
    const { hash } = window.location;
    console.log(hash, '==hash==', menus)
    const menu = menus.find(menu => `#${BASE_NAME}${menu.route}` === hash);
    setSelectedKeys(() => [menu ? menu.key : 'react']);
  }, [refresh]);

  return (
    /**设置路由命名空间 */
    <Router basename={BASE_NAME}>
      <section>
        <Menu selectedKeys={selectedKeys} mode="horizontal" onClick={() => setRefresh(refresh => ++refresh)}>
          {menus.map(menu => (
            <Menu.Item key={menu.key}>
              <Link to={menu.route}>{menu.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
          </Switch>
        </Suspense>
      </section>
    </Router>
  );
}

export default App;
