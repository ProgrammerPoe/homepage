import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//import ReactDOM from 'react-dom';
import MainScreen from '../screens/MainScreen/index.js';

export default class Routes extends React.Component {
    render = () => {
        return (
            <Router>
                <Route 
                    path="/" 
                    component={MainScreen} 
                />
            </Router>
        );
    }
}