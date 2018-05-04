import React from 'react';
import FaBeer from 'react-icons/lib/fa/beer';

import classes from './Mobile.module.css'

const mobile = (props) => {
    return (
        <div className={classes.Mobile}>
            <div>
                <div class={[classes.Slideout, props.slideoutActive ? classes.SlideoutActive : null].join(' ')}
                     onClick={props.slideOutClicked}>
                    <i class={classes.Expand}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </i>
                </div>
                <nav className={[classes.SlidingNav, props.slideoutActive ? classes.SlidingNavActive : null].join(' ')}>
                    <ul>
                        <li className={classes.NavItem}><a href="#">Link</a></li>
                        <li className={classes.NavItem}><a href="#">Link</a></li>
                        <li className={classes.NavItem}><a href="#">Link</a></li>
                        <li className={classes.NavItem}><a href="#">Link</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default mobile;
