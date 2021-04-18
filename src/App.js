import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../src/components/PrivateRoute.js'
import './App.css';
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Shopbag from './pages/Shopbag'
import FP from './pages/Forget-Password'
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
          <Route exact path="/Maps" component={Category} />
          <Route exact path="/Maps/:category" component={Category} />
          <Route exact path="/Mods" component={Category} />
          <Route exact path="/Mods/:category" component={Category} />
          <Route exact path="/Textures" component={Category} />
          <Route exact path="/Textures/:category" component={Category} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="/Shopbag" component={Shopbag} />
          <Route exact path="/Forget-Password" component={FP} />
          <Route exact path="/:pageName" component={Home} />
          <PrivateRoute exact path="/admin/feed-products" component={Feed} />
          <Route exact path="/products/:category/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
    </AuthProvider>
  );
}

export default App;
