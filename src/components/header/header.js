/**
 * Created by SPalumbo on 10/14/16.
 */
import React from 'react';
import './header.css';

export default class Header extends React.Component{

    render() {
        return (
            <div className="header">
                {this.props.header}
                <div className="subheader">
                    {this.props.subheader}
                </div>
            </div>
        )
    }

}