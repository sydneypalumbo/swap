/**
 * Created by SPalumbo on 10/16/16.
 */
import React from 'react';
import './promoImage.css';

export default class PromoImage extends React.Component{

    render() {
        return (
            <div className="promoContainer">
                <div className="promoImageContainer">
                    <img className="promoImage"
                            src={this.props.image}
                    />
                    <div className="promoText">
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}