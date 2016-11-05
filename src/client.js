import React from "react";
import TopNav from "./components/topNav/topNav.js";
import Header from "./components/header/header.js";
import FourImagePromo from "./components/fourImagePromo/fourImagePromo.js";
import ReactDOM from 'react-dom';

var tabNames = ['Bedding', 'Furniture', 'Room Decor', 'Kitchen Supplies', 'Textbooks'];
var header = 'Swap + Sell';
var subheader = 'College Essentials, from Blue Devil to Blue Devil';
var promoImages = [
    {
        image: './../src/images/books2.jpeg',
        text: 'get books'
    },
    {
        image: './../src/images/books2.jpeg',
        text: 'get books'
    },
    {
        image: './../src/images/books2.jpeg',
        text: 'get books'
    },
    {
        image: './../src/images/books2.jpeg',
        text: 'get books'
    }
];

ReactDOM.render(
    <div>
        <Header header={header}
                subheader={subheader}
        />
        <TopNav tabNames={tabNames}/>
        <FourImagePromo promoImages={promoImages}/>
    </div>,
    document.body
);