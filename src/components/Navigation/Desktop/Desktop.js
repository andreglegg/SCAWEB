import React from 'react';
import classes from './Desktop.module.scss'

const desktop = (props) => {
    return (
        <div className={classes.Desktop}>
            <nav>
                <ul>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default desktop;
