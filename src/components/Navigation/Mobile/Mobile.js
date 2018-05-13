import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
//import FaBeer from 'react-icons/lib/fa/beer';

import classes from './Mobile.module.scss'

const mobile = (props) => {
    return (
        <div className={classes.Mobile}>
            <div>
                <div className={[classes.Slideout, props.slideoutActive ? classes.SlideoutActive : null].join(' ')}
                     onClick={props.slideOutClicked}>
                    <i className={classes.Expand}>
                        <span/>
                        <span/>
                        <span/>
                    </i>
                </div>
                <nav className={[classes.SlidingNav, props.slideoutActive ? classes.SlidingNavActive : null].join(' ')}>
                    <ul>
                        <li><a onClick={() => scroll.scrollToTop({duration: 500})}>Home</a></li>
                        <li><Link activeClass="active" to="gettingStarted" spy={true} smooth={true} duration={500} >Getting Started</Link></li>
                        <li><Link activeClass="active" to="roadmap" spy={true} smooth={true} duration={500} >Roadmap</Link></li>
                        <li><Link activeClass="active" to="gettingStarted" spy={true} smooth={true} duration={500} >FAQ</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default mobile;
