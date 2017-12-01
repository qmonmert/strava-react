import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Activity from './../Activity/Activity';
import NavbarCustom from './../NavbarCustom/NavbarCustom';
import myData from './../json/activities.json';

class Activities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: []
        };
    }

    componentDidMount() {
        this.setState(prevState => ({
            activities: myData
        }));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.activities.map((activity, i) => 
                        <Activity key={activity.id} id={activity.id} startDate={activity.start_date} name={activity.name} type={activity.type}/> 
                    )}
                </div> 
            </div>
        );
    }
}

export default Activities;
