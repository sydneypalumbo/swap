/**
 * Created by SPalumbo on 12/20/16.
 */
import React from 'react';
import './homeDisplay.css';

export default class HomeDisplay extends React.Component{

    images = this.props.images;
    text = this.props.text;

    render() {
        return (
            <div className="homeDisplay">
                <img className="homeDisplayImage"
                    src={this.images[0]}>
                </img>
                <img className="homeDisplayImage"
                     src={this.images[1]}>
                </img>
                <div className="homeDisplayCenterText">
                    {this.text.center}
                </div>
                <div className="homeDisplayLeftText">
                    {this.text.left}
                </div>
                <div className="homeDisplayRightText">
                    {this.text.right}
                </div>
            </div>
        )
    }
}