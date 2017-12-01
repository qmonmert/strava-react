import React, { Component } from 'react';
import './App.css';
import About from './About/About';
import Activities from './Activities/Activities';
import NavbarCustom from './NavbarCustom/NavbarCustom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        darkTheme: true
    }
  }

  changeTheme(t) {
      this.setState({
          darkTheme: t
      });
  }

  render() {
    return (
      <Router>
        <div className={this.state.darkTheme ? 'dark' : 'default'}>
          <div className="container">
            <NavbarCustom theme={this.changeTheme.bind(this)} />
            <br />
          </div>
          <Route exact path="/" component={Activities} />
          <Route path="/about" render={(props) => (<About darkTheme={this.state.darkTheme} {...props}/>)} />
        </div>
      </Router>
    );
  }
}

export default App;
