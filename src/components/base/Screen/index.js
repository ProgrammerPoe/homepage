import React from 'react';
import { Modal } from 'reactstrap';
import './custom.css';

export default class Screen extends React.Component {

    render = () => {
        return (
            <div className="screen">
                {this.props.children}
            </div>
        );
    }

}