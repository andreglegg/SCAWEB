import React from 'react';
import classes from './Button.module.scss'

const button = (props) => {
    return (
        <button className={[classes.Button, classes[props.type] ? classes[props.type] : null].join(' ')} style={{fontSize: props.fontSize}} name={props.name} onClick={props.click}>
            {props.name}
        </button>
    );
};

export default button;
