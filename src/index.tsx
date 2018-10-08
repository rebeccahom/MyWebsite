import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './ReactComponents/Home';
import './Styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Home />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
