import React from "react";
import TopNav from "./components/topNav/topNav.js";
import Footer from "./components/footer/footer.js";
import Header from "./components/header/header.js";
import FourImagePromo from "./components/fourImagePromo/fourImagePromo.js";
import ReactDOM from 'react-dom';

var tabNames = ['Bedding', 'Furniture', 'Room Decor', 'Kitchen Supplies', 'Textbooks'];
var header = 'Swap + Sell';
var subheader = 'College Essentials, from Blue Devil to Blue Devil';
var promoImages = [
    {
        image: './../src/images/books2.jpeg',
        text: "books on a budget"
    },
    {
        image: './../src/images/mirror.jpg',
        text: "house so empty need a centerpiece"
    },
    {
        image: './../src/images/bedding.jpg',
        text: "don't lose sleep"
    },
    {
        image: './../src/images/potsandpans.jpg',
        text: "get cookin'"
    }
];
var footerText = ['About Us', 'Contact', 'FAQ', 'Terms & Conditions'];

ReactDOM.render(
    <div>
        <Header header={header}
                subheader={subheader}
        />
        <TopNav tabNames={tabNames}/>
        <FourImagePromo promoImages={promoImages}/>
        <Footer text={footerText}/>
    </div>,
    document.body
);