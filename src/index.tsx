import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "./globalStyled";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
