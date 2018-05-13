import React from 'react';
import classes from './Roadmap.module.scss'

const roadmapItems = {
    'The website': {
        'Add a getting started/download section': {finished: true},
        'Add Roadmap': {finished: true},
        'Add FAQ section': {finished: false},
        finished: false
    },
    'Release Tablet/Phone app on Amazon App Store': {finished: false},
    'Add ability to long press buttons': {finished: true},
    'Add ability to press numpad keys': {finished: false},
    'Add ability to press F keys (f1, f2, f3, etc..)': {finished: true},
    'Add support for compound keys': {finished: true},
    'Customization': {
        'Ability to set custom icons and background images to buttons': {finished: false},
        'Ability to set background image for buttons screen': {finished: false},
        'Ability to create different tabs': {finished: false},
        finished: false
    }
};

const Roadmap = (props) => {
    const list = Object.keys(roadmapItems).map((item, index) => {
        return (

            <li key={index} className={roadmapItems[item].finished ? classes.Strike : null}>{item}
                <ul>
                    {Object.keys(roadmapItems[item]).map((nestItem, nestIndex) => {
                        return (
                            nestItem === 'finished' ?
                                null
                                :
                                <li key={nestIndex} className={roadmapItems[item][nestItem].finished ? classes.Strike : null}>{nestItem}</li>
                        )
                    })}
                </ul>
            </li>
        )
    });
    return (
        <div className={classes.Roadmap} name="roadmap">
            <div className="wrapper">
                <h1>Roadmap</h1>

                <ul>
                    {list}
                    <li style={{backgroundColor: '#443f4242', color: 'grey', borderLeft: 'none'}}>(last update 12.05.18) I'll add more to the roadmap in the next couple of days.</li>
                </ul>

            </div>
        </div>
    );
};

export default Roadmap;
