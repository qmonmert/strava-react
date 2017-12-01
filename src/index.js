import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {IntlProvider} from 'react-intl';
import fr from 'react-intl/locale-data/fr';

import { addLocaleData } from 'react-intl';
addLocaleData([...fr]);

const esMessages = {
    "dateActivity": "Date"
};

ReactDOM.render(
    <IntlProvider locale="fr" messages={esMessages}>
        <App/>
    </IntlProvider>, 
    document.getElementById('root')
);
registerServiceWorker();
