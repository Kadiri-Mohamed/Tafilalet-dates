import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import App from './App.jsx';
import { Reducer } from './config/Reducer.js';

const store = createStore(Reducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
