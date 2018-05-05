import React from 'react';
import classes from './Desktop.module.scss'

const desktop = (props) => {
    return (
        <div className={classes.Desktop}>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default desktop;
