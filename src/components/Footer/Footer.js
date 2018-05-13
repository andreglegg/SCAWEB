import React from 'react';
import classes from './Footer.module.scss'

const Footer = (props) => {
    return (
        <div className={classes.Footer} name="footer">
            <div className="wrapper">
                <h1>The Star Citizen Assistant apps including this website are in early development.</h1>
                <h3>Status</h3>
                <ul>
                    <li><a href="https://github.com/andreglegg/SCA/releases/download/v0.0.7/Star-Citizen-Assistant-Setup-0.0.7.exe">Windows Host App: 0.0.7(live)</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=no.andreglegg.sca">Android Client App: 0.0.5(live)</a></li>
                    <li>iPhone Client App: 0.0.5(pre-release)</li>
                    <li>Website: 0.1.1(live)</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
