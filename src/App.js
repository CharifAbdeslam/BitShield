import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Exchange from './Exchange';
import NoMatch from './NoMatch';
import Footer from './Footer';
import Support from './Support';
class App extends Component {

  render() {
    return (<Router>
      <div>
        <Menu/>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/login" component={Login}/>
          <Route exact={true} path="/signup" component={Signup}/>
          <Route exact={true} path="/exchange" component={Exchange}/>
          <Route exact={true} path="/support" component={Support}/>
          <Route component={NoMatch}/>
        </Switch>
        <Footer/>
      </div>
    </Router>);
  }
}
export default App;
