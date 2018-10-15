import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './ReactComponents/Home';
import './Styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Redux/Base/RootReducer';

const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
