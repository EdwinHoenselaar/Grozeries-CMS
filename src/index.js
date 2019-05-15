
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import store from './store'
import React from 'react';

import Sidebar from './components/Sidebar/SidebarContainer'
import Login from './components/Login/LoginContainer'
import Store from './components/Store/StoreContainer'
import ProductsListContainer from './components/Products/ProductsListContainer'
import Orders from './components/Orders/OrdersContainer'

import './index.css';
import OrderDetailsContainer from './components/Orders/OrderDetailsContainer';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Router>
        <nav>
            <Sidebar />
        </nav>
      <Route exact path="/" component={Login} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/products" component={ProductsListContainer} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/orders/:id" component={OrderDetailsContainer} />
    </Router>
  </Provider>,
  rootElement
)