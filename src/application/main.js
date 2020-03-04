import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes.js';

export const run = () => {
    ReactDOM.render(
        <Routes/>,
        document.getElementById('root')
    );
}