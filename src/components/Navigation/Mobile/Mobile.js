import React from 'react';
import FaBeer from 'react-icons/lib/fa/beer';

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
                        <li className={classes.NavItem}><a href="#">Home</a></li>
                        <li className={classes.NavItem}><a href="#">Download</a></li>
                        <li className={classes.NavItem}><a href="#">Roadmap</a></li>
                        <li className={classes.NavItem}><a href="#">FAQ</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default mobile;
