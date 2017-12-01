import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import './About.css';
import athleteData from './../json/athlete.json';

class About extends Component {

    constructor(props) {
        super(props)
        this.state = {
            athlete: {}
        }
    }

    componentDidMount() {
        this.setState({
            athlete: athleteData
        })
    }

    displayAthlete() {
        var html = ""
        Object.keys(this.state.athlete).map((e, i) => {
            if (!(this.state.athlete[e] instanceof Array) 
                && e !== 'profile_medium' && e !== 'profile') {
                html += `<tr><td>${i}</td><td>${e}</td><td>${this.state.athlete[e]}</td></tr>`                
            }
        })
        return html
    }

    render() {
        return (
            <div className="container">
                <table className={this.props.darkTheme ? 'table table-striped table-dark' : 'table table-striped'}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">KEY</th>
                            <th scope="col">VALUE</th>
                        </tr>
                    </thead>
                    <tbody>{renderHTML(this.displayAthlete())}</tbody>
                </table>
            </div>
        );
    }
}

export default About;
