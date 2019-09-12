import { createElement } from 'react';
import { render } from 'react-dom'
import App from './App';

const MOUNT_NODE = document.getElementById('root');
(function() {
  render(createElement(App), MOUNT_NODE);
})();
