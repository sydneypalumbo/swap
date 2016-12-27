/**
 * Created by SPalumbo on 12/17/16.
 */
import React from "react";
import ReactDOM from 'react-dom';
import HomeDisplay from './components/homeDisplay/homeDisplay';

var homeDisplayImages = ['./../src/images/emptyapartment.jpg', './../src/images/movingboxes.jpg'];
var homeDisplayTexts = {
    center: 'Swap + Sell',
    left: 'Missing Something?',
    right: 'Packing Up?'
};

ReactDOM.render(
    <div>
        <HomeDisplay images={homeDisplayImages}
                    text={homeDisplayTexts}/>
    </div>,
    document.body
);