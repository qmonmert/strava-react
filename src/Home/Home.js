import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                <div className="col-6 mx-auto col-md-6 order-md-2">
                    <img className="img-fluid mb-3 mb-md-0" src="/images/home.jpg" alt="" width="1024" height="860"/>
                </div>
                <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
                    <h1 className="mb-3 bd-text-purple-bright">Quentin MONMERT</h1>
                    <p className="lead">
                        Ingénieur d'Etudes et de Développement chez Ippon Technologies
                    </p>
                    <p className="lead mb-4">
                        Spécialités : Angular5, Firebase, Bootstrap, ReactJS, Java, Spring, Jahia, GIT, MySQL, Tomcat, MongoDB, Electron
                    </p>
                    <div className="d-flex flex-column flex-md-row lead mb-3">
                        <a href="http://quentin.monmert.pagesperso-orange.fr/" className="btn btn-lg btn-bd-purple mb-3 mb-md-0 mr-md-3" >My site</a>
                        <a href="https://www.ippon.fr/" className="btn btn-lg btn-outline-secondary">Ippon</a>
                    </div>
                    <p className="text-muted mb-0">
                        Site developed in ReactJS
                    </p>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;
