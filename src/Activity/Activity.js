import React, { Component } from 'react';
import './Activity.css';
import { FormattedDate, FormattedMessage } from 'react-intl';

class Activity extends Component {

    render() {
        return (
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.type}</h4>
                        <p className="card-text">
                            {this.props.name}
                            <br/>
                            <FormattedMessage 
                                id="myId" 
                                defaultMessage="{day}/{month}/{year}" 
                                values={{
                                    day: <FormattedDate value={this.props.startDate} day="2-digit"/>,
                                    month: <FormattedDate value={this.props.startDate} month="2-digit"/>,
                                    year: <FormattedDate value={this.props.startDate} year="2-digit"/>
                                }}
                            />
                        </p>
                        <a href={'https://www.strava.com/activities/' + this.props.id} className="btn btn-secondary">See activity</a>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Activity;
