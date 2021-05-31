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
import FormFeeder from './pages/FormFeeder'
import { StoreProvider } from "./store";
import { AuthProvider } from './store/AuthContext.js';

function App() {
  return (
    <AuthProvider>
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/products/:category/:productId" component={Product} />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/Profile" component={Profile} />
          <PrivateRoute exact path="/Admin-FormFeeder" component={FormFeeder} />
          <PrivateRoute path="/Admin" component={Feed} />
          <Route path="/product/Maps/:category" component={Category} />
          <Route path="/Maps" component={Category} />
          <Route path="/Mods/:category" component={Category} />
          <Route path="/Mods" component={Category} />
          <Route path="/Textures/:category" component={Category} />
          <Route path="/Textures" component={Category} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="/Shopbag" component={Shopbag} />
          <Route exact path="/Forget-Password" component={FP} />
          <Route path="/:pageName" component={Home} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
    </AuthProvider>
  );
}

export default App;
