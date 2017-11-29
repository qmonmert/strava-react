import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Activity from './Activity/Activity';
import NavbarCustom from './NavbarCustom/NavbarCustom';
import myData from './json/activities.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        darkTheme: true,
        activities: []
    };
  }

  componentDidMount() {
    this.setState(prevState => ({
      activities: myData
    }));
  }

  changeTheme(t) {
    this.setState({
      darkTheme: t
    });
  }

  render() {
    return (
      <div className="container">
        <div className={this.state.darkTheme ? 'dark' : 'default'}>
          <NavbarCustom theme={this.changeTheme.bind(this)} />
          <br/>
          <div className="row">
            {this.state.activities.map((activity, i) => 
              <Activity key={activity.id} id={activity.id} startDate={activity.start_date} name={activity.name} type={activity.type}/> 
            )}
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
