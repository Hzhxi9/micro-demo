import React, { lazy, Suspense, useEffect } from 'react';

import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.min.css';
import { Button, Divider, Modal } from 'antd';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const routes = [
  { path: '/', component: Home, key: 'home' },
  { path: '/about', component: About, key: 'about' },
];

const base = (window as any).__POWERED_BY_QIANKUN__ ? '/react-sub' : '/';

const Routes = () => {
  return (
    <Router basename={base}>
      <nav>
        <NavLink exact to="/" className="app-main-link" activeClassName="app-main-link-active">
          Home
        </NavLink>
        <Divider type="vertical"></Divider>
        <NavLink exact to="/about" className="app-main-link" activeClassName="app-main-link-active">
          About
        </NavLink>
      </nav>

      <Suspense fallback={null}>
        <Switch>
          {routes.map(route => (
            <Route exact path={route.path} component={route.component} key={route.key} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
};

function App(props: any) {
  const state = props?.state?.getGlobalState();

  useEffect(() => {
    console.log(state,'==state')
    /**注册一个观察者函数 */
    props?.store?.onGlobalStateChange?.((state: any, prevState: any) => {
      /**state: 变更后的状态; prevState: 变更前的状态 */
      Modal.confirm({
        title: '主应用数据变化了',
        content: `主应用改变后的数据为：${JSON.stringify(state)}`,
      });
    });
  }, [props?.store]);

  const onAppend = () => {
    props?.store?.setGlobalState({
      user: { name: 'umi' },
    });
  };

  return (
    <div className="app">
      <span>{`子应用react中显示-主应用的数据：${JSON.stringify(state)}`}</span>
      <Button type="primary" onClick={onAppend}>
        更改主应用数
      </Button>
      <Divider />
      <Routes />
    </div>
  );
}

export default App;
