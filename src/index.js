import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/font-awesome-4.7.0/css/font-awesome.css';
import Home from './webComponents/Home';
import  Header from './webComponents/commonComponent/Header';
import Footer from './webComponents/commonComponent/Footer';
import LogIn from './webComponents/commonComponent/LogIn';
import SignUp from './webComponents/commonComponent/SignUp';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

