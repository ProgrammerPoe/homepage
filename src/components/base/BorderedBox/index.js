import React from 'react';
import './custom.css';

export default class BorderedBox extends React.Component {

    render = () => {
        return (
            <div className="bordered-box">
                {this.props.children}
            </div>
        );
    }

}