import React, { Component } from 'react';

class NavbarCustom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            darkTheme: true
        };
    }

    onChangeTheme() {
        this.setState({
            darkTheme: !this.state.darkTheme
        },
        () => {
            this.props.theme(this.state.darkTheme);
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">Activities</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.onChangeTheme.bind(this)}>
                                {this.state.darkTheme ? 'Default theme' : 'Dark theme'}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavbarCustom;
