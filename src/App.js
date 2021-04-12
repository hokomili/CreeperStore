import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import ShoppingCart from './pages/ShoppingCart';
import SignIn from './pages/SignIn';
import SignOn from './pages/SignOn';
import Feed from './pages/Feed'

import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignOn" component={SignOn} />
          <Route exact path="/ShoppingCart" component={ShoppingCart} />
          <Route exact path="/:pageName" component={Home} />
          <Route exact path="/admin/feed-products" component={Feed} />
          <Route path="/product/:category/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
