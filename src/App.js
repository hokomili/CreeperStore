import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../src/components/PrivateRoute.js'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import ShoppingCart from './pages/ShoppingCart';
import SignIn from './pages/SignIn';
import SignOn from './pages/SignOn';
import Feed from './pages/Feed'
import Profile from './pages/Profile'

import { StoreProvider } from "./store";
import { AuthProvider } from './store/AuthContext.js';

function App() {
  return (
    <AuthProvider>
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/Profile" component={Profile} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignOn" component={SignOn} />
          <Route exact path="/ShoppingCart" component={ShoppingCart} />
          <Route exact path="/:pageName" component={Home} />
          <Route exact path="/admin/feed-products" component={Feed} />
          <Route path="/product/:category/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
    </AuthProvider>
  );
}

export default App;
