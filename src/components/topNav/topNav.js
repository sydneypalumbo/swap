import React from "react";
import Tab from '../tab/tab.js';
import './topNav.css'

export default class TopNav extends React.Component{

    tabs = this.props.tabNames.map(function(name) {
        return (
            <Tab tabName={name}/>
        );
    });

    render () {
        return (
            <div className="topNav">
                {this.tabs}
            </div>
        );
    }
};