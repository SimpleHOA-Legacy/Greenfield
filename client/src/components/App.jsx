import React from 'react';
import axios from 'axios';
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Login from './Login.jsx';
import About from './HomePages/About.jsx';
import Tutorial from './HomePages/Tutorial.jsx';
import Navbar from './HeaderComponent/Navbar.jsx'; 
import Sidebar from './SidebarComponents/Sidebar.jsx';
import Deposit from './Deposit.jsx';
import Expense from './Expense.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Sidebar />
          <Route name="login" exact path="/" component={Login} />
          <Route name="about" exact path="/About" component={About} />
          <Route name="tutorial" exact path="/Tutorial" component={Tutorial} />
          <Route name="deposit" exact path="/Deposit" component={Deposit} />
          <Route name="expense" exact path="/Expense" component={Expense} />
        </div> 
      </Router>
    )
  }
}

export default App;
