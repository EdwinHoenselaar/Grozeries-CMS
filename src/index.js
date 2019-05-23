
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import store from './store'
import React from 'react';

import Sidebar from './components/Sidebar/SidebarContainer'
import Login from './components/Login/LoginContainer'
import Shop from './components/Shops/ShopDetailContainer'
import ProductsListContainer from './components/Products/ProductsListContainer'
import ProductsDetailContainer from './components/Products/ProductsDetailContainer'
import OrdersContainer from './components/Orders/OrdersContainer'
import CreateProductContainer from './components/Products/CreateProductContainer'

import './index.css';
import OrderDetailsContainer from './components/Orders/OrderDetailsContainer'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Router>
        <nav>
            <Sidebar />
        </nav>
      <Route exact path="/" component={Login} />
      <Route exact path="/shops" component={Shop} />
      <Route exact path="/products" component={ProductsListContainer} />
      <Route exact path="/products/:id" component={ProductsDetailContainer} />
      <Route exact path="/product/create" component={CreateProductContainer} />
      <Route exact path="/orders" component={OrdersContainer} />
      <Route exact path="/orders/:id" component={OrderDetailsContainer} />
    </Router>
  </Provider>,
  rootElement
)