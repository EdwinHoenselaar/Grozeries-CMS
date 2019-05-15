
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import store from './store'
import React from 'react';

import Sidebar from './components/Sidebar/SidebarContainer'
import Login from './components/Login/LoginContainer'
import Store from './components/Store/StoreContainer'
import Products from './components/Products/ProductsContainer'
import Orders from './components/Orders/OrdersContainer'

import './index.css';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <nav>
        <Sidebar />
      </nav>
      <Route exact path="/" component={Login} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/orders" component={Orders} />
    </Router>
  </Provider>,
  rootElement
)