/**
 * Created by SPalumbo on 11/1/16.
 */
import React from 'react';
import './footer.css';

export default class Footer extends React.Component {

    text = this.props.text.map(function(text) {
        return (
            <div className="footerTab">
                {text}
            </div>
        );
    });

    render() {
        return (
            <div className="footer">
                {this.text}
            </div>
        )
    }

}