import React from "react";

const date = new Date();

function Footer(){
    return (
        <footer><p className="footer"> Copyright ⓒ  {date.getFullYear()} </p> </footer>
    );
}

export default Footer;