import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import './public-path';

function getSubRootContainer(container: HTMLElement) {
  return container ? container.querySelector('#umi-root') : document.querySelector('#umi-root');
}

function storeTest(props?: any) {
  props.onGlobalStateChange((value: any, prev: any) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev), true);
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

function render(props?: any) {
  const { container } = props;

  const root = getSubRootContainer(container);
  ReactDOM.render(
    <React.StrictMode><App store={{...props}} /></React.StrictMode>,root
  );
}

if (!(window as any).__POWERED_BY_QIANKUN__) render();

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props?: any) {
  console.log('props from main framework', props);
  storeTest(props)
  render(props);
}

export async function unmount(props?: any) {
  console.log('ReactMicroApp unmount');
  const root = document.getElementById('root');
  root && ReactDOM.unmountComponentAtNode(root);
}
