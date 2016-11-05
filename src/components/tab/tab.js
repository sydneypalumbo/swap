/**
 * Created by SPalumbo on 10/11/16.
 */
import React from "react";
import './tab.css';

export default class Tab extends React.Component{
    render () {
        return (
            <div className="tabContainer">
                <div className="tab">
                    {this.props.tabName}
                </div>
            </div>
        );
    }
};