import App from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('main'));
