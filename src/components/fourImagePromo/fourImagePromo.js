/**
 * Created by SPalumbo on 10/16/16.
 */
import React from 'react';
import PromoImage from './../promoImage/promoImage.js';
import './fourImagePromo.css';

export default class FourImagePromo extends React.Component{

    promoImages = this.props.promoImages.map(function(object) {
        return (
            <PromoImage image={object.image}
                        text={object.text}/>
        );
    });

    render() {
        return (
            <div className="fourImagePromo">
                {this.promoImages}
            </div>
        )
    }
}