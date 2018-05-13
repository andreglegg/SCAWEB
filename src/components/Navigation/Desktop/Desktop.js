import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'

import classes from './Desktop.module.scss'

const desktop = (props) => {
    return (
        <div className={classes.Desktop}>
            <nav>
                <ul>
                    <li><a onClick={() => scroll.scrollToTop({duration: 500})}>Home</a></li>
                    <li><Link activeClass="active" to="gettingStarted" spy={true} smooth={true} duration={500} >Getting Started</Link></li>
                    <li><Link activeClass="active" to="roadmap" spy={true} smooth={true} duration={500} >Roadmap</Link></li>
                    <li><Link activeClass="active" to="gettingStarted" spy={true} smooth={true} duration={500} >FAQ</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default desktop;
